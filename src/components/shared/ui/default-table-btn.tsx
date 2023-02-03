import React, { PropsWithChildren } from "react";

interface IDefaultTableBtnProps {
  className?: string;
}

const DefaultTableBtn = ({ children, className }: PropsWithChildren<IDefaultTableBtnProps>) => {
  return <div className={`my-5 flex-item-list ${className}`}>{children}</div>;
};

export default React.memo(DefaultTableBtn);
