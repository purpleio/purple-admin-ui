import React from "react";

interface IDefaultBtnGroupProps {
  children: React.ReactNode;
  align?: "start" | "end" | "center";
  className?: string;
}

const DefaultBtnGroup = ({ className, children, align = "start" }: IDefaultBtnGroupProps) => {
  return <div className={`flex flex-wrap gap-2 mt-5 justify-${align} ${className || ""}`}>{children}</div>;
};

export default React.memo(DefaultBtnGroup);
