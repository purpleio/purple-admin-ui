import { useDashboard } from "@/client/sample/dashboard";
import { getDefaultLayout, IDefaultLayoutPage, IPageHeader } from "@/components/layout/default-layout";
import CalendarSample from "@/components/page/index/calendar-sample";
import StatisticSample from "@/components/page/index/statistic-sample";
import { useAuth } from "@/lib/auth/auth-provider";
import { Alert, Divider, Skeleton } from "antd";

const pageHeader: IPageHeader = {
  title: "Welcome",
};

const IndexPage: IDefaultLayoutPage = () => {
  const { session } = useAuth();
  const { data, error } = useDashboard();

  return (
    <>
      <h2 className="title">π {session.user.name || "κ΄λ¦¬μ"}λ μλνμΈμ!</h2>

      <div className="my-5">
        {data ? (
          <StatisticSample data={data} />
        ) : error ? (
          <Alert message="λμλ³΄λ API νΈμΆ μ€ μ€λ₯κ° λ°μνμ΅λλ€." type="warning" />
        ) : (
          <Skeleton />
        )}
      </div>

      <Divider />

      <h3 className="title">λ¬λ ₯</h3>

      <CalendarSample />
    </>
  );
};

IndexPage.getLayout = getDefaultLayout;
IndexPage.pageHeader = pageHeader;

export default IndexPage;
