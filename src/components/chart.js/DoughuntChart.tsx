import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { data } from "./DoughuntChartConfig";
import { styled } from "styled-components";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughuntChart = () => {
  return (
    <Main>
      <Doughnut data={data} />;
    </Main>
  );
};

export default DoughuntChart;

const Main = styled.div`
  margin-top: 100px;
  width: 500px;
  height: 500px;
`;
