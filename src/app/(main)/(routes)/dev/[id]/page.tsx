import { TableView } from "@/components/shared/Table";
import { getDevById } from "@/lib/fetch";
import { tableHeadData } from "@/utils/constants";

export default async function Detail({
  params,
}: {
  params: { id: string };
}): Promise<JSX.Element> {
  const response = await getDevById(params.id);

  return response.data && response.data.name ? (
    <TableView headData={tableHeadData} data={[response.data]} />
  ) : (
    <p className="w-full text-center">
      Não foi possível encontrar developer com esse id.
    </p>
  );
}
