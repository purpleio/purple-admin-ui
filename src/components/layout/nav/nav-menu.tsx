import { ChevronDown, ChevronUp } from "lucide-react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { IMenu, isEqualPath } from ".";
import NavItem from "./nav-item";

interface INavMenuProps {
  menu: IMenu;
}

const NavMenu = ({ menu }: INavMenuProps) => {
  const router = useRouter();
  const [isShowSubMenu, setIsShowSubMenu] = useState(
    menu.submenu && menu.submenu.length > 0 && menu.submenu.find((v) => (v.isActive || isEqualPath)(router, v.link))
      ? true
      : false
  );

  if (menu.submenu) {
    return (
      <li>
        <a onClick={() => setIsShowSubMenu(!isShowSubMenu)}>
          {menu.icon}
          <span className="cursor-pointer grow">{menu.name}</span>
          {menu.submenu && menu.submenu.length > 0 ? (
            isShowSubMenu ? (
              <ChevronUp className="w-6 h-6 text-gray-500" />
            ) : (
              <ChevronDown className="w-6 h-6 text-gray-500" />
            )
          ) : (
            <></>
          )}
        </a>
        <ul className={isShowSubMenu ? "block" : "hidden"}>
          {menu.submenu.map((sub) => {
            return <NavItem key={sub.name} item={sub} />;
          })}
        </ul>
      </li>
    );
  }

  return <NavItem item={menu} />;
};

export default React.memo(NavMenu);
