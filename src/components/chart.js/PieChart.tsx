import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { data } from "./pieChartConfig";
import { styled } from "styled-components";
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  return (
    <>
      <Main>
        <h1>Chart.js</h1>
        <Pie data={data} width={500} height={500}></Pie>
      </Main>
    </>
  );
};

export default PieChart;

const Main = styled.div`
  width: 500px;
  height: 500px;
`;
