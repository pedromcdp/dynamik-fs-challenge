"use server";

import { AppConfig } from "@/utils/appConfig";
import { redirect } from "next/navigation";

export async function redirectWithQ(formData: FormData) {
  const q = formData.get("q");
  const encodedQ = typeof q === "string" ? encodeURIComponent(q) : "";
  const url = new URL(`${AppConfig.domain}/?q=${encodedQ}`);
  return redirect(url.toString());
}
