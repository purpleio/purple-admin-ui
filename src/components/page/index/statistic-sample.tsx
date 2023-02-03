import { IDashboardResponse } from "@/client/sample/dashboard";
import { ArrowDown, ArrowUp } from "lucide-react";
import React from "react";
import CountUp from "react-countup";

interface IStatisticSampleProps {
  data: IDashboardResponse;
}

const renderChangeRate = (value: number) => {
  if (value > 0) {
    return (
      <span className="flex items-center px-2 py-1 text-sm text-white rounded-full bg-emerald">
        <ArrowUp className="w-5 h-4" />
        {value}%
      </span>
    );
  } else if (value < 0) {
    return (
      <span className="flex items-center px-2 py-1 text-sm text-white rounded-full bg-alizarin">
        <ArrowDown className="w-5 h-4" />
        {value}%
      </span>
    );
  }
};

const StatisticSample = ({ data }: IStatisticSampleProps) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-5 border rounded-lg ">
          <div>방문자</div>
          <div className="mt-3">
            <div className="flex items-center mt-3">
              <div className="text-2xl font-semibold grow">
                <CountUp end={data.visitor.value} separator="," />명
              </div>
              <div>{renderChangeRate(data.visitor.rate)}</div>
            </div>
          </div>
        </div>
        <div className="p-5 border rounded-lg ">
          <div>주문</div>
          <div className="flex items-center mt-3">
            <div className="text-2xl font-semibold grow">
              <CountUp end={data.order.value} separator="," />건
            </div>
            <div>{renderChangeRate(data.order.rate)}</div>
          </div>
        </div>
        <div className="p-5 border rounded-lg ">
          <div>매출</div>
          <div className="flex items-center mt-3">
            <div className="text-2xl font-semibold grow">
              <CountUp end={data.income.value} separator="," />원
            </div>
            <div>{renderChangeRate(data.income.rate)}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(StatisticSample);
