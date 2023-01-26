import { getDefaultLayout, IDefaultLayoutPage, IPageHeader } from "@/components/layout/default-layout";
import { Button, DatePicker } from "antd";
import { useRouter } from "next/router";

const pageHeader: IPageHeader = {
  title: "샘플 페이지",
};

const SamplePage: IDefaultLayoutPage = () => {
  const router = useRouter();

  return (
    <>
      <main>
        Hello World {router.query.id}
        <div className="p-5 border border-gray-600">타이포그래피: ‘Typography’, 1972. @ㅇ0ㅇ ₩0 〈응♥〉</div>
        <DatePicker />
        <Button type="primary">버튼입니다</Button>
        <a href="#">Hello</a>
        <h1>큰 제목</h1>
        <h2>큰 제목</h2>
        <h3>큰 제목</h3>
        <h4>큰 제목</h4>
      </main>
    </>
  );
};

SamplePage.getLayout = getDefaultLayout;
SamplePage.pageHeader = pageHeader;

export default SamplePage;
