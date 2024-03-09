import { formSchema } from "@/lib/formSchema";
import { createSafeActionClient } from "next-safe-action";
import { redirect } from "next/navigation";

export const action = createSafeActionClient({
  handleReturnedServerError(e) {
    console.error(e);
    return "Erro ao adicionar developer.";
  },
});

export const postDev = action(
  formSchema,
  async ({ nickname, name, birthdate, stack }) => {
    const developer = {
      nickname,
      name,
      birth_date: new Date(birthdate),
      stack: Array.isArray(stack) ? [] : stack.split(","),
    };
    const response = await fetch("/api/devs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(developer),
    });
    const responseData = await response.json();
    if (responseData.message === "Este nickname já está a ser usado.") {
      return { failure: responseData.message };
    }

    if (!response.ok) {
      throw new Error("Erro ao adicionar developer.");
    }

    const url = new URL(`http://localhost:3000/dev/${responseData._id}`);
    redirect(url.toString());
  }
);
