import { Document } from "mongoose";

export interface IDeveloper extends Document {
  _id: string;
  nickname: string;
  name: string;
  birth_date: Date | string;
  stack: string[] | null;
}

export interface IGetDevByTermResponse {
  success: boolean;
  numberOfResults: number;
  totalResults: number;
  page: number;
  totalPages: number;
  data: Developer[];
}

export interface Developer {
  id: string;
  nickname: string;
  name: string;
  birth_date: string;
  stack: string[] | null;
}

export interface IGetDevResponse {
  sucess: boolean;
  id: string;
  nickname: string;
  name: string;
  birth_date: string;
  stack: string[] | null;
}
