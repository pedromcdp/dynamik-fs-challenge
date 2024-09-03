"use client";

import { useSearchParams } from "next/navigation";
import { Input, Kbd } from "@nextui-org/react";
import { Search } from "lucide-react";
import { useEffect, useRef } from "react";

export const SearchBar = (): JSX.Element => {
  const searchParams = useSearchParams();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const q = formData.get("q") as string;
    location.href = `/?q=${q}`;
    inputRef.current?.blur();
  };

  function onKeyDown(e: KeyboardEvent) {
    if (e.metaKey && e.key === "k") {
      e.preventDefault();
      inputRef.current?.focus();
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  });

  return (
    <form onSubmit={handleSubmit}>
      <Input
        ref={inputRef}
        required
        placeholder="Pesquisar dev"
        name="q"
        defaultValue={searchParams.get("q") || ""}
        startContent={<Search className="w-5 h-5" />}
        endContent={<Kbd keys={["command"]}>K</Kbd>}
      />
    </form>
  );
};
