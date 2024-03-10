import { render, screen } from "@testing-library/react";
import fetchMock from "jest-fetch-mock";
import Detail from "@/app/(main)/(routes)/dev/[id]/page";

fetchMock.enableMocks();
jest.mock("next/cache", () => ({
  ...jest.requireActual("next/cache"),
  revalidateTag: jest.fn(() => Promise.resolve()),
  revalidatePath: jest.fn(() => Promise.resolve()),
}));

describe("Detail", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("renders detalhes do developer quando a resposta é bem sucedida", async () => {
    const params = { id: "1" };

    fetchMock.mockResponseOnce(JSON.stringify({ data: { name: "John Doe" } }));

    render(await Detail({ params }));
    await screen.findByText("John Doe");
    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });

  it("renders  mensagem de erro quando a resposta não é bem sucedida", async () => {
    const params = { id: "2" };

    const errorResponse = {
      success: false,
      message: "Não foi encontrado nenhum Developer com esse id.",
    };
    fetchMock.mockResponseOnce(JSON.stringify(errorResponse));

    render(await Detail({ params }));
    await screen.findByText(
      "Não foi possível encontrar developer com esse id."
    );

    expect(
      screen.getByText("Não foi possível encontrar developer com esse id.")
    ).toBeInTheDocument();
  });
});
