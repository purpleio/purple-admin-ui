import { Divider } from "antd";
import { Home, List, Monitor, User } from "lucide-react";
import React from "react";
import Menu, { IMenu } from "./nav";

const mainMenuData: IMenu[] = [
  {
    name: "홈",
    icon: <Home className="w-5 h-5" />,
    link: {
      path: "/",
    },
  },
  {
    name: "리스트",
    icon: <List className="w-5 h-5" />,
    link: {
      path: "/list",
      query: {
        text: "react",
      },
    },
  },
];

const adminMenuData: IMenu[] = [
  {
    name: "사용자관리",
    icon: <User className="w-5 h-5" />,
    link: {
      path: "/manage/user",
    },
  },
];

const devMenuData: IMenu[] = [
  {
    name: "사용 가이드",
    icon: <Monitor className="w-5 h-5" />,
    submenu: [
      {
        name: "폼",
        link: {
          path: "/guide/form",
        },
      },
      {
        name: "리스트/조회/팝업",
        link: {
          path: "/guide/list",
        },
      },
    ],
  },
];

const MainMenu = () => {
  return (
    <>
      <>
        <Divider orientation="left" plain>
          메인
        </Divider>

        <Menu data={mainMenuData} />
      </>
      <>
        <Divider orientation="left" plain>
          관리자
        </Divider>

        <Menu data={adminMenuData} />
      </>
      <>
        <Divider orientation="left" plain>
          개발
        </Divider>

        <Menu data={devMenuData} />
      </>
    </>
  );
};

export default React.memo(MainMenu);
