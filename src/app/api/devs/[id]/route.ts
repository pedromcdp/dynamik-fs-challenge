import { BadRequest, Success, NotFound, Error } from "@/utils/responses";
import { connect } from "@/lib/mongodb";
import { Developer } from "@/models";
import { formatDev } from "@/helpers/formatDev";

export async function GET(_: Request, { params: { id } }: any) {
  if (!id) {
    return BadRequest("ID em falta.");
  }

  try {
    await connect();
    const dev = await Developer!.findById(id);

    return dev
      ? Success(200, formatDev(dev))
      : NotFound("Não foi encontrado nenhum Developer com esse id.");
  } catch (error) {
    return Error(error);
  }
}
