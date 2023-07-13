import Rechart from "./components/Recharts/Recharts";
import DoughuntChart from "./components/chart.js/DoughuntChart";
import { GroupedBarChart } from "./components/chart.js/GroupedBarChart";
import PieChart from "./components/chart.js/PieChart";

function App() {
  return (
    <div>
      <Rechart />
      <PieChart />
      <DoughuntChart />
      <GroupedBarChart />
    </div>
  );
}

export default App;
