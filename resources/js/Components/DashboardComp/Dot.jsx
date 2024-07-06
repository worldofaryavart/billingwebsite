import React from "react";
import { useTheme } from "@mui/material/styles";
import clsx from "clsx";

export default function Dot({ size, color }) {
  const theme = useTheme();

  const dotClasses = clsx(
    "rounded-full transition-colors duration-300",
    {
      "w-1 h-1": size !== "large" && size !== "small",
      "w-2 h-2": size === "large",
      "w-1 h-1": size === "small",
    }
  );

  const backgroundColor = color && theme.palette[color] ? theme.palette[color].main : theme.palette.text.secondary;

  return (
    <div 
      className={dotClasses}
      style={{ backgroundColor }}
    />
  );
}