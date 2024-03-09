"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { programmingLanguages } from "@/utils/constants";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  Select,
  SelectItem,
  Input,
  useDisclosure,
  ModalFooter,
} from "@nextui-org/react";
import { Plus } from "lucide-react";
import { formSchema } from "@/lib/formSchema";
import { IAddDeveloper } from "@/types";
import { postDev } from "@/app/(main)/(routes)/(action)/postDev";
import { useAction } from "next-safe-action/hooks";

export const AddDeveloper = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IAddDeveloper>({
    resolver: zodResolver(formSchema),
  });
  const { execute, status } = useAction(postDev, {
    onSuccess: (data) => {
      if (data.failure) {
        setError("nickname", {
          type: "manual",
          message: data.failure,
        });
      }
    },
  });

  const onSubmit = handleSubmit((data: IAddDeveloper) => {
    execute(data);
  });

  return (
    <>
      <Button variant="light" color="default" onClick={onOpen}>
        <Plus /> Adicionar
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="text-foreground"
      >
        <ModalContent>
          <form onSubmit={onSubmit}>
            <ModalHeader className="flex flex-col gap-1">
              Adicionar Developer
            </ModalHeader>
            <ModalBody>
              <Input
                isRequired
                type="text"
                label="Nickname"
                placeholder="Introduza o seu nickname"
                errorMessage={errors.nickname?.message}
                {...register("nickname")}
              />
              <Input
                isRequired
                type="text"
                label="Nome"
                placeholder="Introduza o seu nome"
                errorMessage={errors.name?.message}
                {...register("name")}
              />
              <Input
                isRequired
                type="date"
                max={new Date().toISOString().split("T")[0]}
                min={"1900-01-01"}
                label="Data de Nascimento"
                errorMessage={errors.birthdate?.message}
                {...register("birthdate")}
              />
              <Select
                label="Stack"
                placeholder="Selecione o seu stack"
                errorMessage={errors.stack?.message}
                {...register("stack")}
                selectionMode="multiple"
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
              <Button
                isDisabled={status === "executing"}
                color="default"
                variant="light"
                onClick={onOpenChange}
              >
                Cancelar
              </Button>
              <Button
                isDisabled={status === "executing"}
                isLoading={status === "executing"}
                color="primary"
                variant="solid"
                type="submit"
              >
                Submeter
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};
