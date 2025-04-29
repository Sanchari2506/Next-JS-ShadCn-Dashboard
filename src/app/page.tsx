import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { CustomChart } from "@/components/charts/CustomChart";
import { AreaChartCustom } from "@/components/charts/AreaChart";
import { PieChartCustom } from "@/components/charts/PieChartCustom";
import CartList from "@/components/common/CartList";
import TodoList from "@/components/common/TodoList";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-2">
        <div className="first-container bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-2 2xl:col-span-2">
          <CustomChart />
        </div>
        <div className="second-container bg-primary-foreground p-4 rounded-lg">
          <CartList title="Latest Transactions" />
        </div>
        <div className="third-container bg-primary-foreground p-4 rounded-lg">
          <PieChartCustom />
        </div>
        <div className="fourth-container bg-primary-foreground p-4 rounded-lg">
        <CartList title="Popular Courses" />
        </div>
        <div className="fifth-container bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-2 2xl:col-span-2">
          <AreaChartCustom/>
        </div>
        <div className="sixth-container bg-primary-foreground p-4 rounded-lg">
          <TodoList/>
        </div>
      </div>
      
    </>
  );
}
