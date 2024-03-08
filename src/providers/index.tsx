"use client";

import { NextUIProvider } from "@nextui-org/react";
import type { ReactNode } from "react";

export function Providers({
  children,
}: {
  children: Readonly<ReactNode>;
}): JSX.Element {
  return <NextUIProvider>{children}</NextUIProvider>;
}
