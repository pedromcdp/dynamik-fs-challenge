"use client";

import { Developer } from "@/types";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

interface ITableView {
  headData: string[];
  data: Developer[] | Developer;
}

export const TableView = ({ headData, data }: ITableView): JSX.Element => {
  return (
    <Table aria-label="table" className="w-full">
      <TableHeader>
        {headData.map((item, index) => (
          <TableColumn key={item + index}>{item}</TableColumn>
        ))}
      </TableHeader>
      <TableBody>
        {Array.isArray(data) ? (
          data.map((item, index) => (
            <TableRow key={item.id + index}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.nickname}</TableCell>
              <TableCell>{item.birth_date}</TableCell>
              <TableCell>
                {item.stack ? item.stack?.join(", ") : "sem stack"}
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell>{data.name}</TableCell>
            <TableCell>{data.nickname}</TableCell>
            <TableCell>{data.birth_date}</TableCell>
            <TableCell>{data.stack?.join(", ")}</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
