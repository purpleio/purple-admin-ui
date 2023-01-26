import { ChevronLeft, MenuIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import style from "./default-layout.module.css";
import MainMenu from "./main-menu";
import Profile from "./profile";

interface ISidebarProps {
  isShowSidebar: boolean;
  hideSidebar: () => void;
}

const Sidebar = ({ isShowSidebar, hideSidebar }: ISidebarProps) => {
  return (
    <aside className={`hidden ${style.sidebar} ${isShowSidebar ? "sm:block" : "hidden"}`}>
      <div className="flex flex-col h-full">
        <div className="flex">
          <div className="shrink-0">
            <Link href="/" className="flex items-center justify-center w-12 h-12 text-white rounded-lg bg-turquoise">
              P
            </Link>
          </div>
          <div className="ml-1 grow">
            <Profile />
          </div>
        </div>
        <div className="overflow-auto grow">
          <MainMenu />
        </div>
        <div>
          <div className="flex justify-end">
            <button
              className="flex items-center justify-center w-12 h-12 rounded enable-transition hover:bg-gray-200"
              onClick={hideSidebar}
            >
              <ChevronLeft className="w-3 h-3" />
              <MenuIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default React.memo(Sidebar);
