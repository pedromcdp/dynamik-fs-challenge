import { TableView } from "@/components/shared/Table";
import { getDevsbyTerm } from "@/lib/fetch";
import { tableHeadData } from "@/utils/constants";

interface ISearchParams {
  q: string;
  page: string;
}

export default async function Home({
  searchParams,
}: {
  searchParams: ISearchParams;
}) {
  if (!searchParams.q) {
    return (
      <p className="text-center w-full">
        Use a barra de pesquisa para encontrar devs
      </p>
    );
  }

  const response = await getDevsbyTerm(
    searchParams.q,
    Number(searchParams.page)
  );

  if (response.numberOfResults === 0) {
    return <p className="text-center w-full ">Nenhum dev encontrado</p>;
  }

  return <TableView headData={tableHeadData} data={response.data} />;
}
