import React from "react";
import style from "./spinner.module.css";

interface ISpinnerProps {
  color?: "gray";
}

const Spinner = ({ color = "gray" }: ISpinnerProps) => {
  return (
    <div className={style.spinner}>
      <div className={`mx-auto lds-spinner lds-spinner-${color}`}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default React.memo(Spinner);
