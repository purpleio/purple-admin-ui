import { IProductFormValue } from "@/client/sample/product";
import DateRangeField from "@/components/shared/form/control/date-range-field";
import DefaultSearchForm from "@/components/shared/form/ui/default-search-form";
import FieldInline from "@/components/shared/form/ui/field-inline";
import FormSearch from "@/components/shared/form/ui/form-search";
import { Button, Checkbox, Form, Input, Select } from "antd";
import { useForm } from "antd/lib/form/Form";
import { Search } from "lucide-react";
import { useRouter } from "next/router";
import React, { useCallback } from "react";

const statusOptions = [
  { label: "전체", value: "ALL" },
  { label: "판매중", value: "SALE" },
  { label: "품절", value: "SOLDOUT" },
  { label: "판매중단", value: "NOTSALE" },
];

const ProductSearch = () => {
  const [form] = useForm();
  const router = useRouter();

  const handleFinish = useCallback(
    (formValue: IProductFormValue) => {
      router.push({
        pathname: router.pathname,
        query: { ...router.query, ...formValue },
      });
    },
    [router]
  );

  return (
    <DefaultSearchForm form={form} onFinish={handleFinish}>
      <FormSearch>
        <FieldInline>
          <Form.Item label="기간" name="searchDateType" initialValue="created">
            <Select dropdownMatchSelectWidth={false}>
              <Select.Option value="created">등록일자</Select.Option>
              <Select.Option value="updated">수정일자</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="searchDatePeriod">
            <DateRangeField />
          </Form.Item>
        </FieldInline>
        <div>
          <Form.Item name="status" label="판매상태">
            <Checkbox.Group options={statusOptions} />
          </Form.Item>
        </div>
        <div>
          <FieldInline>
            <Form.Item label="검색조건" name="searchType" initialValue="productName">
              <Select dropdownMatchSelectWidth={false}>
                <Select.Option value="productName">상품명</Select.Option>
                <Select.Option value="brandName">브랜드명</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item name="searchText" className="grow">
              <Input placeholder="검색어를 입력해주세요" />
            </Form.Item>
          </FieldInline>
        </div>
        <div>
          <Form.Item name="productCode" label="상품번호">
            <Input.TextArea placeholder="복수입력시 쉼표(,) 또는 엔터(Enter)로 구분해주세요" />
          </Form.Item>
        </div>
      </FormSearch>
      <div className="flex justify-center gap-2">
        <Button htmlType="submit" className="btn-with-icon" icon={<Search />}>
          검색
        </Button>
        <Button htmlType="submit" className="btn-with-icon" onClick={() => form.resetFields()}>
          초기화
        </Button>
      </div>
    </DefaultSearchForm>
  );
};

export default React.memo(ProductSearch);
