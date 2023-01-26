import React from "react";
import style from "./default-layout.module.css";

interface IMenuBtnProps {
  isActive: boolean;
  setActive: (val: boolean) => void;
}

const MenuBtn = ({ isActive, setActive }: IMenuBtnProps) => {
  return (
    <button className="p-3 -mr-2" onClick={() => setActive(!isActive)}>
      <div className={style["menu-wrapper"]}>
        <div className={`${style["menu-bar"]} ${style["menu-top"]} ${isActive ? "active" : ""}`} />
        <div className={`${style["menu-bar"]} ${style["menu-middle"]} ${isActive ? "active" : ""}`} />
        <div className={`${style["menu-bar"]} ${style["menu-bottom"]} ${isActive ? "active" : ""}`} />
      </div>
    </button>
  );
};

export default React.memo(MenuBtn);
