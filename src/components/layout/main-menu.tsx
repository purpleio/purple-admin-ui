import { Divider } from "antd";
import { Home, List, Monitor } from "lucide-react";
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
    name: "샘플 페이지",
    icon: <List className="w-5 h-5" />,
    submenu: [
      {
        name: "프로필",
        link: {
          path: "/sample/profile",
        },
      },
      {
        name: "패키지 목록",
        link: {
          path: "/sample/list",
          query: {
            text: "react",
          },
        },
      },
      {
        name: "사용자관리",
        link: {
          path: "/sample/manage/user",
        },
      },
    ],
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
          path: "/sample/form",
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
          개발
        </Divider>

        <Menu data={devMenuData} />
      </>
    </>
  );
};

export default React.memo(MainMenu);
