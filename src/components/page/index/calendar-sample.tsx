import { Badge, BadgeProps, Calendar } from "antd";
import { Dayjs } from "dayjs";
import React from "react";

const getListData = (value: Dayjs) => {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        { type: "warning", content: "외부 미팅" },
        { type: "success", content: "내부 미팅" },
      ];
      break;
    case 10:
      listData = [
        { type: "warning", content: "외부 미팅" },
        { type: "success", content: "내부 미팅" },
        { type: "error", content: "미팅 1" },
      ];
      break;
    case 15:
      listData = [
        { type: "warning", content: "외부 미팅" },
        { type: "success", content: "내부 미팅" },
        { type: "error", content: "미팅 1." },
        { type: "error", content: "미팅 2." },
        { type: "error", content: "미팅 3." },
        { type: "error", content: "미팅 4." },
      ];
      break;
    default:
  }
  return listData || [];
};

const getMonthData = (value: Dayjs) => {
  if (value.month() === 8) {
    return 1394;
  }
};

const CalendarSample = () => {
  const monthCellRender = (value: Dayjs) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

  const dateCellRender = (value: Dayjs) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type as BadgeProps["status"]} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };

  return <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />;
};

export default React.memo(CalendarSample);
