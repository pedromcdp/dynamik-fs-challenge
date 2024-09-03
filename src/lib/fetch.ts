import type { IGetDevResponse, IGetDevByTermResponse } from "@/types";
import { AppConfig } from "@/utils/appConfig";
import { revalidateTag } from "next/cache";

export const getDevById = async (id: string): Promise<IGetDevResponse> => {
  try {
    const response = await fetch(`${AppConfig.domain}/api/devs/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: { tags: [id] },
    });
    revalidateTag(id);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getDevsbyTerm = async (
  term: string,
  page?: number
): Promise<IGetDevByTermResponse> => {
  try {
    const response = await fetch(
      `${AppConfig.domain}/api/devs?terms=${term}&page=${page}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        next: { tags: [term] },
      }
    );
    revalidateTag(term);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
