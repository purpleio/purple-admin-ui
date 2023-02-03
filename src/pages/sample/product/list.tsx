import { getDefaultLayout, IDefaultLayoutPage, IPageHeader } from "@/components/layout/default-layout";
import ProductList from "@/components/page/sample/product/product-list";
import ProductSearch from "@/components/page/sample/product/product-search";

const pageHeader: IPageHeader = {
  title: "상품 목록",
};

const ProductListPage: IDefaultLayoutPage = () => {
  return (
    <>
      <ProductSearch />
      <ProductList />
    </>
  );
};

ProductListPage.getLayout = getDefaultLayout;
ProductListPage.pageHeader = pageHeader;

export default ProductListPage;
