import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import Image from "next/image";
import { AddDeveloper } from "./AddDeveloper";
import { SearchBar } from "../SearchBar";
import { Suspense } from "react";

export const NavBar = (): JSX.Element => {
  return (
    <Navbar isBlurred={false} isBordered maxWidth="xl">
      <NavbarBrand as={Link} href={"/"} className="flex-none">
        <Image
          src="/assets/logo.webp"
          alt="logo da Dynamik"
          width={50}
          height={50}
        />
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Suspense>
            <SearchBar />
          </Suspense>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <AddDeveloper />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
