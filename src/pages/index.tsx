import { useDashboard } from "@/client/dashboard";
import { getDefaultLayout, IDefaultLayoutPage, IPageHeader } from "@/components/layout/default-layout";
import Statistics from "@/components/page/index/statistics";
import { useAuth } from "@/lib/auth/auth-provider";
import { Skeleton } from "antd";

const pageHeader: IPageHeader = {
  title: "Welcome",
};

const IndexPage: IDefaultLayoutPage = () => {
  const { session } = useAuth();
  const { data } = useDashboard();

  return (
    <>
      <div className="text-xl">👋 {session.user.name || "관리자"}님 안녕하세요!</div>

      <div className="mt-5">{data ? <Statistics data={data} /> : <Skeleton />}</div>
    </>
  );
};

IndexPage.getLayout = getDefaultLayout;
IndexPage.pageHeader = pageHeader;

export default IndexPage;
