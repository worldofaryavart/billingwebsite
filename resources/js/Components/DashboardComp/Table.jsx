import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";

const states = {
  sent: "bg-green-500",
  pending: "bg-yellow-500",
  declined: "bg-gray-500",
};

export default function TableComponent({ data }) {
  const keys = Object.keys(data[0]).filter(key => key !== "id").map(i => i.toUpperCase());

  return (
    <TableContainer component={Paper} className="mb-4">
      <Table className="min-w-full">
        <TableHead>
          <TableRow>
            {keys.map(key => (
              <TableCell key={key} className="font-bold bg-gray-100">
                {key}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(({ id, name, email, product, price, date, city, status }) => (
            <TableRow key={id} className="hover:bg-gray-50">
              <TableCell className="pl-4 font-normal">{name}</TableCell>
              <TableCell>{email}</TableCell>
              <TableCell>{product}</TableCell>
              <TableCell>{price}</TableCell>
              <TableCell>{date}</TableCell>
              <TableCell>{city}</TableCell>
              <TableCell>
                <Button
                  className={`px-2 py-1 text-white text-xs font-medium rounded ${states[status.toLowerCase()]}`}
                  variant="contained"
                >
                  {status}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}