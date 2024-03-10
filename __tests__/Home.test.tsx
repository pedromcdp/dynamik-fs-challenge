import { render, screen } from "@testing-library/react";
import fetchMock from "jest-fetch-mock";
import Home from "@/app/(main)/(routes)/page";

fetchMock.enableMocks();
jest.mock("next/cache", () => ({
  ...jest.requireActual("next/cache"),
  revalidateTag: jest.fn(() => Promise.resolve()),
  revalidatePath: jest.fn(() => Promise.resolve()),
}));

describe("Home Page", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });
  it("renders 'Use a barra de pesquisa para encontrar devs' quando searchParams.q está vazio", async () => {
    const searchParams = { q: "", page: "1" };
    render(await Home({ searchParams }));
    const p = screen.getByText("Use a barra de pesquisa para encontrar devs");
    expect(p).toBeInTheDocument();
  });

  it("renders 'Nenhum dev encontrado' quando response.numberOfResults é 0", async () => {
    const searchParams = { q: "search term", page: "1" };
    const response = { numberOfResults: 0 };

    fetchMock.mockResponseOnce(JSON.stringify(response));

    render(await Home({ searchParams }));

    const p = screen.getByText("Nenhum dev encontrado");
    expect(p).toBeInTheDocument();
  });

  it("Da render a tabela quando response.numberOfResults é superior a 0", async () => {
    const searchParams = { q: "search term", page: "1" };
    const response = {
      sucess: true,
      numberOfResults: 2,
      page: 1,
      totalPages: 1,
      data: [
        {
          id: 1,
          name: "John Doe",
          birth_date: "1990-01-01",
          stack: ["React", "Node.js"],
        },
        {
          id: 2,
          name: "Jane Smith",
          birth_date: "1995-02-02",
          stack: ["Angular", "Java"],
        },
      ],
    };
    fetchMock.mockResponseOnce(JSON.stringify(response));

    render(await Home({ searchParams }));

    const page = screen.getByText("Página 1 de 1");
    const results = screen.getByText("2 devs encontrados");
    const table = screen.getByRole("grid");
    expect(page).toBeInTheDocument();
    expect(results).toBeInTheDocument();
    expect(table).toBeInTheDocument();
  });
});
