import React, { useState } from "react";
import { Grid, Select, MenuItem, Input, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useTheme } from "@mui/material/styles";
import { BarChart, Bar } from "recharts";
import clsx from "clsx";
import Widget from "./Widget";

export default function BigStat({ product, total, color, registrations, bounce }) {
  const theme = useTheme();
  const [value, setValue] = useState("daily");

  return (
    <Widget
      header={
        <div className="flex justify-between items-center w-full">
          <Typography variant="h5">{product}</Typography>
          <Select
            value={value}
            onChange={(e) => setValue(e.target.value)}
            input={<Input disableUnderline className="text-gray-600 text-sm" />}
            // className="min-w-[75px]"
          >
            <MenuItem value="daily">Daily</MenuItem>
            <MenuItem value="weekly">Weekly</MenuItem>
            <MenuItem value="monthly">Monthly</MenuItem>
          </Select>
        </div>
      }
      upperTitle
      className="w-full" // Ensure the widget takes the full width
    >
      <div className="flex justify-between items-center mb-4 w-full">
        <div className="flex items-center">
          <Typography variant="h3" className="text-gray-600 mr-2">
            {total[value]}
          </Typography>
          <Typography
            className={clsx(
              "text-sm",
              total.percent.profit ? "text-green-500" : "text-red-500"
            )}
          >
            {total.percent.profit ? "+" : "-"}
            {total.percent.value}%
          </Typography>
        </div>
        <BarChart width={200} height={70} data={getRandomData()}>
          <Bar
            dataKey="value"
            fill={theme.palette[color].main}
            radius={10}
            barSize={10}
          />
        </BarChart>
      </div>
      <div className="grid grid-cols-3 divide-x w-full">
        <StatCell
          value={registrations[value].value}
          label="Registrations"
          profit={registrations[value].profit}
        />
        <StatCell
          value={`${bounce[value].value}%`}
          label="Bounce Rate"
          profit={bounce[value].profit}
        />
        <StatCell
          value={registrations[value].value * 10}
          label="Views"
          profit={registrations[value].profit}
        />
      </div>
    </Widget>
  );
}

function StatCell({ value, label, profit }) {
  return (
    <div className="px-4">
      <Grid container alignItems="center" className="mb-1">
        <Typography variant="h6">{value}</Typography>
        <ArrowForwardIcon
          className={clsx(
            "ml-1 text-sm",
            profit ? "text-green-500" : "text-red-500"
          )}
        />
      </Grid>
      <Typography variant="body2" className="text-gray-600">
        {label}
      </Typography>
    </div>
  );
}

function getRandomData() {
  return Array(7)
    .fill()
    .map(() => ({ value: Math.floor(Math.random() * 10) + 1 }));
}
