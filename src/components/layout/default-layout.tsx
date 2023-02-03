import { motion } from "framer-motion";
import { ChevronRight, Menu as MenuIcon } from "lucide-react";
import { NextComponentType, NextPage } from "next";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import MainMenu from "./main-menu";
import MenuBtn from "./menu-btn";
import PageHeader from "./page-header";
import Profile from "./profile";
import Sidebar from "./sidebar";

export interface IPageHeader {
  title: string;
}

export type IDefaultLayoutPage<P = {}> = NextPage<P> & {
  getLayout(page: NextComponentType, props: unknown): React.ReactNode;
  pageHeader?: IPageHeader;
};

interface IDefaultLayoutProps {
  Page: IDefaultLayoutPage;
}

const DefaultLayout = ({ Page, ...props }: IDefaultLayoutProps) => {
  const [isShowSidebar, setIsShowSidebar] = useState(true);
  const [isShowPopupMenu, setIsShowPopupMenu] = useState(false);
  const router = useRouter();

  const showSidebar = useCallback(() => {
    setIsShowSidebar(true);
  }, []);

  const hideSidebar = useCallback(() => {
    setIsShowSidebar(false);
  }, []);

  const setActive = useCallback((val: boolean) => {
    if (val) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    setIsShowPopupMenu(val);
  }, []);

  useEffect(() => {
    setActive(false);
  }, [router.asPath, setActive]);

  return (
    <div>
      <Sidebar isShowSidebar={isShowSidebar} hideSidebar={hideSidebar} />

      {/* mobile navigation */}
      <div className="z-40 flex items-center justify-between px-5 border-b h-14 sm:hidden">
        <div className="flex items-center">
          <div className="flex items-center justify-center w-8 h-8 text-white rounded-lg bg-turquoise">P</div>
          <div className="ml-3 text-lg text-black">Purple Admin UI</div>
        </div>
        <div>
          <MenuBtn isActive={isShowPopupMenu} setActive={setActive} />
        </div>
      </div>
      <motion.div
        animate={isShowPopupMenu ? "open" : "closed"}
        initial={{ display: "none" }}
        variants={{
          open: { display: "block", opacity: 1, y: 0 },
          closed: { opacity: 0, y: "-10px", transitionEnd: { display: "none" } },
        }}
        transition={{ duration: 0.15 }}
        className="fixed bottom-0 left-0 right-0 z-30 w-full p-5 overflow-auto bg-white"
        style={{ top: "3.5rem" }}
      >
        <Profile />
        <MainMenu />
      </motion.div>

      <div className={`sm:h-full sm:overflow-auto ${isShowSidebar ? "sm:ml-72" : ""}`}>
        {Page.pageHeader ? (
          <PageHeader value={Page.pageHeader} />
        ) : !isShowSidebar ? (
          <div className="pt-5 pl-7">
            <button
              className="inline-flex items-center justify-center h-12 px-3 transition-all duration-300 rounded hover:bg-gray-200"
              onClick={showSidebar}
            >
              <MenuIcon className="w-5 h-5" />
              <span className="px-2">메뉴 열기</span>
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        ) : (
          <></>
        )}
        <section className="px-5 pb-5 sm:px-10">
          <Page {...props} />
        </section>
        {!isShowSidebar ? (
          <div className="fixed bottom-5 left-5">
            <button
              className="flex items-center justify-center w-12 h-12 bg-white border rounded opacity-50 enable-transition hover:opacity-100"
              onClick={showSidebar}
            >
              <MenuIcon className="w-5 h-5" />
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export const getDefaultLayout = (Page: IDefaultLayoutPage, props: Record<string, unknown>) => {
  return <DefaultLayout {...props} Page={Page} />;
};
