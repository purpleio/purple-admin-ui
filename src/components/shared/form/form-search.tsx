import React, { PropsWithChildren } from "react";
import style from "./form.module.css";

interface IFormSearchProps {}

const FormSearch = ({ children }: PropsWithChildren<IFormSearchProps>) => {
  return <div className={style["search-form"]}>{children}</div>;
};

export default React.memo(FormSearch);
