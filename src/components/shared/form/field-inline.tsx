import React, { PropsWithChildren } from "react";

const FieldInline = ({ children }: PropsWithChildren<{}>) => {
  return <div className="flex flex-wrap items-center gap-3">{children}</div>;
};

export default React.memo(FieldInline);
