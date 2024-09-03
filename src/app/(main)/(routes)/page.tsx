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
  
  if (response.success === false) {
    return <p className="text-center w-full">Ocorreu um erro na ligação a base de dados</p>;
  } 

  if (response.numberOfResults === 0) {
    return <p className="text-center w-full">Nenhum dev encontrado</p>;
  }


  return (
    <section id="dev-table" className="w-full flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <span>
          Página {response.page} de {response.totalPages}
        </span>
        <span>
          {response.numberOfResults}{" "}
          {response.numberOfResults === 1
            ? "dev encontrado"
            : "devs encontrados "}
        </span>
      </div>
      <TableView headData={tableHeadData} data={response.data} />
    </section>
  );
}
