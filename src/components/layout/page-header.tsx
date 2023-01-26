import React from "react";
import { IPageHeader } from "./default-layout";

interface IPageHeaderProps {
  value: IPageHeader;
}

const PageHeader = ({ value }: IPageHeaderProps) => {
  return (
    <div className={`pt-7 px-5 sm:px-10`}>
      <div className="flex items-center text-3xl text-gray-900">{value.title}</div>
    </div>
  );
};

export default React.memo(PageHeader);
