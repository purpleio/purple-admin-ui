import React, { PropsWithChildren } from "react";

const FieldInline = ({ children }: PropsWithChildren<{}>) => {
  return <div className="flex flex-wrap items-center gap-2">{children}</div>;
};

export default React.memo(FieldInline);
