"use server";

import { redirect } from "next/navigation";

export async function redirectWithQ(formData: FormData) {
  const q = formData.get("q");
  const encodedQ = typeof q === "string" ? encodeURIComponent(q) : "";
  const url = new URL(`http://localhost:3000/?q=${encodedQ}`);
  return redirect(url.toString());
}
