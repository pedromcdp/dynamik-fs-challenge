import { Success, Error, BadRequest } from "@/utils/responses";
import { diacriticSensitiveRegex } from "@/helpers/diacriticSensitiveRegex";
import { connect } from "@/lib/mongodb";
import { Developer } from "@/models";
import type { IDeveloper } from "@/types";
import { formatDev } from "@/helpers/formatDev";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get("page")) || 1;
  let term = searchParams.get("terms");

  if (!term) {
    return BadRequest("Termos de pesquisa em falta.");
  }

  term = term.trim().toLowerCase();

  try {
    await connect();
    const result = await Developer!.aggregate([
      {
        $match: {
          $or: [
            { nickname: { $regex: term, $options: "i" } },
            { name: { $regex: diacriticSensitiveRegex(term), $options: "i" } },
            { stack: { $elemMatch: { $regex: term, $options: "i" } } },
          ],
        },
      },
      {
        $group: {
          _id: null,
          totalResults: { $sum: 1 },
          devs: { $push: "$$ROOT" },
        },
      },
      {
        $project: {
          totalResults: 1,
          devs: { $slice: ["$devs", page > 1 ? (page - 1) * 20 : 0, 20] },
          numberOfResults: { $size: "$devs" },
        },
      },
    ]);

    if (result.length === 0) {
      return Success(200, { devs: [] });
    }

    return Success(200, {
      numberOfResults: result[0].numberOfResults,
      totalResults: result[0].totalResults,
      page: page,
      totalPages: Math.ceil(result[0].totalResults / 20),
      data: result[0].devs.map((dev: IDeveloper) => formatDev(dev)),
    });
  } catch (error) {
    return Error(error);
  }
}

export async function POST(req: Request) {
  const body = await req.json();

  const { nickname, name, birth_date, stack } = body;

  if (!nickname || !name || !birth_date) {
    return BadRequest("nickname, name e birth_date são obrigatórios.");
  }

  if (typeof nickname !== "string" || typeof name !== "string") {
    return BadRequest("nickname e name têm de ser strings.");
  }

  if (nickname.length > 32 || name.length > 100) {
    return BadRequest(
      "nickname têm de ter no máximo 32 caracteres e name no máximo 100."
    );
  }

  try {
    await connect();
    const dev = await Developer!.create({
      nickname,
      name,
      birth_date,
      stack,
    });

    return Success(201, dev, {
      Location: `/devs/${dev.id}`,
    });
  } catch (error) {
    return Error(error);
  }
}
