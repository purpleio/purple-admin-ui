import { getDefaultLayout, IDefaultLayoutPage, IPageHeader } from "@/components/layout/default-layout";
import { useAuth } from "@/lib/auth/auth-provider";

const pageHeader: IPageHeader = {
  title: "Welcome",
};

const IndexPage: IDefaultLayoutPage = () => {
  const { session } = useAuth();

  return (
    <>
      <div className="text-xl">👋 {session.user.name || "관리자"}님 안녕하세요!</div>
    </>
  );
};

IndexPage.getLayout = getDefaultLayout;
IndexPage.pageHeader = pageHeader;

export default IndexPage;
