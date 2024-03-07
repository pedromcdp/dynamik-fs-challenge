import { IDeveloper } from "@/types";
import { format } from "date-fns";

export interface IPromiseDeveloper {
  id: string;
  nickname: string;
  name: string;
  birth_date: string;
  stack: string[] | null;
}

export const formatDev = (dev: IDeveloper): IPromiseDeveloper => {
  return {
    id: dev._id.toString(),
    nickname: dev.nickname,
    name: dev.name,
    birth_date: format(dev.birth_date, "yyyy/MM/dd"),
    stack: dev.stack && dev.stack.length ? dev.stack : null,
  };
};
