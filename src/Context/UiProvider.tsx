"use client";
import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
import { NextUIProvider } from "@nextui-org/react";

function NextUiProvider({ children }: Props) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
export default NextUiProvider;
