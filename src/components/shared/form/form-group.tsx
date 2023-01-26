import React, { PropsWithChildren } from "react";

interface IFormGroupProps {
  title?: string;
  description?: string;
}

const FormGroup = ({ title, description, children }: PropsWithChildren<IFormGroupProps>) => {
  return (
    <div className="mb-0 display lg:flex lg:mb-3">
      <div className="w-full mt-1 mb-3 lg:w-48 lg:mb-0 shrink-0">
        <div>{title}</div>
        <div className="text-gray-400">{description}</div>
      </div>
      <div className="mb-5 grow lg:-mb-3">{children}</div>
    </div>
  );
};

export default React.memo(FormGroup);
