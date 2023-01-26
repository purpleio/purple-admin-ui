import DefaultForm from "@/components/shared/form/default-form";
import FormSearch from "@/components/shared/form/form-search";
import { Button, Form, Input } from "antd";
import { useForm } from "antd/lib/form/Form";
import { Search } from "lucide-react";
import { useRouter } from "next/router";
import React from "react";

const ListSearch = () => {
  const router = useRouter();
  const [form] = useForm();

  const handleFinish = (formValue: Record<string, unknown>) => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, text: String(formValue.text || "") },
    });
  };

  return (
    <DefaultForm form={form} initialValues={{ text: router.query.text }} onFinish={handleFinish}>
      <FormSearch>
        <Form.Item label="패키지명" name="text">
          <Input placeholder="패키지명" />
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

export default React.memo(ListSearch);
