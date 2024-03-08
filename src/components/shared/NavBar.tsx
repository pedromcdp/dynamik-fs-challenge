import { redirectWithQ } from "@/app/(main)/(routes)/(action)/redirect";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
} from "@nextui-org/react";
import { Search } from "lucide-react";
import Image from "next/image";
import { AddDeveloper } from "./AddDeveloper";

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
          <form action={redirectWithQ}>
            <Input
              required
              placeholder="Pesquisar dev"
              name="q"
              startContent={<Search className="w-5 h-5" />}
            />
          </form>
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
