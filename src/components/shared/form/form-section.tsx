import React, { PropsWithChildren } from "react";

interface IFormSectionProps {
  title?: string;
  description?: string;
}

const FormSection = ({
  title,
  description,
  children,
}: PropsWithChildren<IFormSectionProps>) => {
  return (
    <div className="w-full border border-gray-200 shadow-sm rounded-lg pt-5 pl-3 pr-3 pb-4 mb-5">
      {title ? <h3 className="text-xl pl-4 pr-4">{title}</h3> : null}
      {description ? (
        <div className="mt-1 pb-5 pl-4 pr-4 mb-6 text-gray-400 border-b border-gray-200">
          {description}
        </div>
      ) : null}

      <div className="pl-4 pr-4">{children}</div>
    </div>
  );
};

export default React.memo(FormSection);
