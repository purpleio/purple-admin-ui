import { useNpmPackages } from "@/client/npmjs";
import { getDefaultLayout, IDefaultLayoutPage, IPageHeader } from "@/components/layout/default-layout";
import ListSearch from "@/components/page/sample/list/list-search";
import ListTable from "@/components/page/sample/list/list-table";
import DefaultBtnGroup from "@/components/shared/ui/default-btn-group";
import { Button } from "antd";
import { Download } from "lucide-react";
import { useRouter } from "next/router";

const pageHeader: IPageHeader = {
  title: "NPM 패키지 목록",
};

const ListPage: IDefaultLayoutPage = () => {
  const router = useRouter();
  const { data, isLoading } = useNpmPackages({
    text: (router.query.text as string) || "",
    size: 20,
    from: ((Number(router.query.page) || 1) - 1) * 20,
  });

  return (
    <>
      <ListSearch />

      <DefaultBtnGroup>
        <Button className="btn-with-icon">
          <Download />
          엑셀 다운로드
        </Button>
      </DefaultBtnGroup>

      <ListTable data={data} isLoading={isLoading} />
    </>
  );
};

ListPage.getLayout = getDefaultLayout;
ListPage.pageHeader = pageHeader;

export default ListPage;
