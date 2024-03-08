import { TableView } from "@/components/shared/Table";
import { getDevById } from "@/lib/fetch";
import { tableHeadData } from "@/utils/constants";

export default async function Page({
  params,
}: {
  params: { id: string };
}): Promise<JSX.Element> {
  const data = await getDevById(params.id);

  return data && data.name ? (
    <TableView headData={tableHeadData} data={[data]} />
  ) : (
    <p className="w-full text-center">
      Não foi possível encontrar developer com esse id.
    </p>
  );
}
