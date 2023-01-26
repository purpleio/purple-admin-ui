import { getDefaultLayout, IDefaultLayoutPage, IPageHeader } from "@/components/layout/default-layout";
import UserTable from "@/components/page/manage/user/\buser-table";
import UserSearch from "@/components/page/manage/user/user-search";
import DefaultBtnGroup from "@/components/shared/ui/default-btn-group";
import { Button } from "antd";
import { Plus } from "lucide-react";
import { useRouter } from "next/router";

const pageHeader: IPageHeader = {
  title: "사용자 관리",
};

const users = [
  { id: "1", login: "subicura", name: "김충섭", role: "관리자" },
  { id: "2", login: "user", name: "직원1", role: "일반 사용자" },
];
const UserPage: IDefaultLayoutPage = () => {
  const router = useRouter();

  return (
    <>
      <UserSearch />

      <DefaultBtnGroup align="end">
        <Button className="btn-with-icon" type="primary">
          <Plus />
          사용자 추가
        </Button>
      </DefaultBtnGroup>

      <UserTable users={users} />
    </>
  );
};

UserPage.getLayout = getDefaultLayout;
UserPage.pageHeader = pageHeader;

export default UserPage;
