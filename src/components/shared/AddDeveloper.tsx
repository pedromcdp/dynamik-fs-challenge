"use client";

import { programmingLanguages } from "@/utils/constants";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Select,
  SelectItem,
  Input,
} from "@nextui-org/react";
import { Plus } from "lucide-react";

export const AddDeveloper = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button variant="light" color="default" onPress={onOpen}>
        <Plus /> Adicionar
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="text-foreground"
      >
        <ModalContent>
          {(onClose) => (
            <form action="">
              <ModalHeader className="flex flex-col gap-1">
                Adicionar Developer
              </ModalHeader>
              <ModalBody>
                <Input
                  isRequired
                  type="text"
                  label="Nickname"
                  placeholder="Introduza o seu nickname"
                  className="max-md:w-full md:min-w-96 md:grow"
                />
                <Input
                  isRequired
                  type="text"
                  label="Nome"
                  placeholder="Introduza o seu nome"
                  className=""
                />

                <Input
                  isRequired
                  type="text"
                  label="Data de Nascimento"
                  placeholder="Introduza a sua data de nascimento"
                  className=""
                />

                <Select
                  label="Stack"
                  placeholder="Selecione o seu stack"
                  selectionMode="multiple"
                  className=""
                >
                  {programmingLanguages.map((language: string) => (
                    <SelectItem
                      key={language}
                      value={language}
                      className="text-foreground"
                    >
                      {language}
                    </SelectItem>
                  ))}
                </Select>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancelar
                </Button>
                <Button color="primary" onPress={onClose}>
                  Submeter
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
