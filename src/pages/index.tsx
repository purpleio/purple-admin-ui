import { useDashboard } from "@/client/dashboard";
import { getDefaultLayout, IDefaultLayoutPage, IPageHeader } from "@/components/layout/default-layout";
import CalendarSample from "@/components/page/index/calendar-sample";
import StatisticSample from "@/components/page/index/statistic-sample";
import { useAuth } from "@/lib/auth/auth-provider";
import { Divider, Skeleton } from "antd";

const pageHeader: IPageHeader = {
  title: "Welcome",
};

const IndexPage: IDefaultLayoutPage = () => {
  const { session } = useAuth();
  const { data } = useDashboard();

  return (
    <>
      <div className="text-xl">👋 {session.user.name || "관리자"}님 안녕하세요!</div>

      <div className="mt-5">{data ? <StatisticSample data={data} /> : <Skeleton />}</div>

      <Divider />

      <div className="mt-5">
        <div className="text-xl">달력</div>
        <CalendarSample />
      </div>
    </>
  );
};

IndexPage.getLayout = getDefaultLayout;
IndexPage.pageHeader = pageHeader;

export default IndexPage;
