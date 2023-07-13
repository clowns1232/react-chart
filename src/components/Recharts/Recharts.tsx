import {
  Pie,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  AreaChart,
  Area,
} from "recharts";
import { data, data01, data02, rangeData } from "./RechartsData";
import { PieChartStyled, ResponsiveContainerStyled } from "./RechartsStyle";

export default function Rechart() {
  return (
    <div>
      <h1>Recharts</h1>
      <PieChartStyled
        width={400}
        height={400}
        onClick={(i: any, e: any) => {
          e.stopPropagation();
          e.preventDefault();
        }}
      >
        <Pie
          data={data01}
          dataKey="value"
          cx={200}
          cy={200}
          outerRadius={60}
          fill="#8884d8"
        />
        <Pie
          data={data02}
          dataKey="value"
          cx={200}
          cy={200}
          innerRadius={70}
          outerRadius={90}
          fill="#82ca9d"
          label
        />
        <Tooltip cursor={true} />
      </PieChartStyled>
      <ResponsiveContainerStyled width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainerStyled>

      <AreaChart
        width={730}
        height={250}
        data={rangeData}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <XAxis dataKey="day" />
        <YAxis />
        <Area dataKey="temperature" stroke="#8884d8" fill="#8884d8" />
        <Tooltip />
      </AreaChart>
    </div>
  );
}
