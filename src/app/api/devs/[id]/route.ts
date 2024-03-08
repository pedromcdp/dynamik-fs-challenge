import { BadRequest, Success, NotFound, Error } from "@/utils/responses";
import { connect } from "@/lib/mongodb";
import { Developer } from "@/models";
import { formatDev } from "@/helpers/formatDev";
import { IDeveloper } from "@/types";

export async function GET(_: Request, { params: { id } }: any) {
  if (!id) {
    return BadRequest("ID em falta.");
  }

  try {
    await connect();
    const dev: IDeveloper | null = await Developer!.findById(id);

    return dev
      ? Success(200, { data: formatDev(dev) })
      : NotFound("Não foi encontrado nenhum Developer com esse id.");
  } catch (error) {
    return Error(error);
  }
}
