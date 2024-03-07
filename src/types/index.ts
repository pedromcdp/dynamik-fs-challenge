import { Document } from "mongoose";

export interface IDeveloper extends Document {
  _id: string;
  nickname: string;
  name: string;
  birth_date: Date | string;
  stack: string[] | null;
}
