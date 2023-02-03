import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { IMenu, isEqualPath } from ".";

interface INavItemProps {
  item: IMenu;
}

const NavItem = ({ item }: INavItemProps) => {
  const router = useRouter();

  return (
    <li>
      <Link
        href={{
          pathname: item.link?.path ?? "/",
          query: item.link?.query,
        }}
        className={(item.isActive || isEqualPath)(router, item.link) ? "active" : ""}
      >
        {item.icon}
        <span className="cursor-pointer grow">{item.name}</span>
        <ChevronRight className="w-6 h-6 text-white active-check" />
      </Link>
    </li>
  );
};

export default React.memo(NavItem);
