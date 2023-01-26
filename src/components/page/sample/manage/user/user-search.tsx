import DefaultForm from "@/components/shared/form/default-form";
import FormSearch from "@/components/shared/form/form-search";
import { Button, Form, Input, Select } from "antd";
import { useForm } from "antd/lib/form/Form";
import { Search } from "lucide-react";
import React from "react";

const authoritiesSearchOptions = [
  {
    label: "전체",
    value: null,
  },
  {
    label: "관리자",
    value: "ROLE_ADMIN",
  },
  {
    label: "일반 사용자",
    value: "ROLE_USER",
  },
];

const UserSearch = () => {
  const [form] = useForm();

  const handleFinish = (formValue: Record<string, unknown>) => {
    console.log(formValue);
  };

  return (
    <DefaultForm form={form} onFinish={handleFinish}>
      <FormSearch>
        <Form.Item label="아이디" name="login">
          <Input placeholder="아이디" />
        </Form.Item>
        <Form.Item label="이름" name="name">
          <Input placeholder="이름" />
        </Form.Item>
        <Form.Item label="권한" name="authorities">
          <Select options={authoritiesSearchOptions} placeholder="권한" />
        </Form.Item>
      </FormSearch>

      <div className="flex justify-center gap-2 mt-5">
        <Button type="primary" htmlType="submit" className="btn-with-icon">
          <Search />
          조회
        </Button>
        <Button htmlType="submit" className="btn-with-icon" onClick={() => form.resetFields()}>
          초기화
        </Button>
      </div>
    </DefaultForm>
  );
};

export default React.memo(UserSearch);
