import styled from "styled-components";
import { PieChart, ResponsiveContainer } from "recharts";

// 높이 문제로 차트가 제대로 안나오는 문제
export const ResponsiveContainerStyled = styled(ResponsiveContainer)`
  height: 200px !important;
`;
// 클릭하면 이상한 선이 나오는 문제
export const PieChartStyled = styled(PieChart)`
  /* pointer-events: none; */
`;
