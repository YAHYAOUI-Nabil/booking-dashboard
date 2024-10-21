import BarUI from "./components/BarUI";
import ChartUI from "./components/ChartUI";
import DoughnutUI from "./components/DoughnutUI";
import Header from "./components/Header";
import PieUI from "./components/PieUi";

const Discounts = () => {
  return (
    <div className="flex flex-col gap-4 mt-4 mx-4 p-8 bg-white rounded-md">
      <Header />
      <div className="flex flex-col gap-24 p-8">
        <ChartUI />
        <div className="flex flex-row justify-around gap-4">
          <PieUI />
          <DoughnutUI />
        </div>
        <BarUI />
      </div>
    </div>
  );
};

export default Discounts;
