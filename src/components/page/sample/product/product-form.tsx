import { IProductFormValue, createProduct, updateProduct } from "@/client/sample/product";
import CodemirrorEditor from "@/components/shared/form/control/codemirror-editor";
import QuillEditor from "@/components/shared/form/control/quill-editor";
import DefaultForm from "@/components/shared/form/ui/default-form";
import FormGroup from "@/components/shared/form/ui/form-group";
import FormSection from "@/components/shared/form/ui/form-section";
import { Button, Divider, Form, Input, Radio, Select, message } from "antd";
import { useForm } from "antd/lib/form/Form";
import React, { useState } from "react";

interface IProductFormProps {
  id?: string;
  initialValues?: Partial<IProductFormValue>;
}

const ProductForm = ({ id, initialValues }: IProductFormProps) => {
  const [form] = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const handleFinish = async (formValue: IProductFormValue) => {
    try {
      setIsLoading(true);

      if (id) {
        await updateProduct(id, formValue);
        messageApi.success("수정되었습니다");
      } else {
        await createProduct(formValue);
        messageApi.success("생성되었습니다");
      }
    } catch (e: unknown) {
      messageApi.error("에러가 발생했습니다");
    } finally {
      setTimeout(() => setIsLoading(false), 500);
    }
  };

  return (
    <>
      {contextHolder}
      <DefaultForm<IProductFormValue> form={form} initialValues={initialValues} onFinish={handleFinish}>
        <FormSection title="기본정보" description="상품 기본 정보를 입력해주세요">
          <FormGroup title="판매상태*">
            <Form.Item name="status" rules={[{ required: true, message: "필수값입니다" }]}>
              <Radio.Group>
                <Radio value="SALE">판매중</Radio>
                <Radio value="SOLDOUT">재고없음</Radio>
                <Radio value="NOTSALE">판매중지</Radio>
              </Radio.Group>
            </Form.Item>
          </FormGroup>

          <Divider />

          <FormGroup title="브랜드*">
            <Form.Item name="brand" rules={[{ required: true, message: "필수값입니다" }]}>
              <Select style={{ maxWidth: 200 }} placeholder="브랜드를 선택하세요">
                <Select.Option value="apple">apple</Select.Option>
                <Select.Option value="파타고니아">파타고니아</Select.Option>
                <Select.Option value="다이슨">다이슨</Select.Option>
                <Select.Option value="Aēsop">Aēsop</Select.Option>
                <Select.Option value="LUSH">LUSH</Select.Option>
                <Select.Option value="블루보틀">블루보틀</Select.Option>
              </Select>
            </Form.Item>
          </FormGroup>

          <Divider />

          <FormGroup title="상품명*">
            <Form.Item name="name" rules={[{ required: true, message: "필수값입니다" }]}>
              <Input placeholder="상품명을 입력하세요" />
            </Form.Item>
          </FormGroup>

          <Divider />

          <FormGroup title="상품코드*">
            <Form.Item name="code" rules={[{ required: true, message: "필수값입니다" }]}>
              <Input placeholder="상품코드를 입력하세요" />
            </Form.Item>
          </FormGroup>

          <Divider />

          <FormGroup title="금액*">
            <Form.Item name="price" rules={[{ required: true, message: "필수값입니다" }]}>
              <Input placeholder="금액을 입력하세요" />
            </Form.Item>
          </FormGroup>
        </FormSection>

        <FormSection title="상품상세" description="상품 상세 정보를 입력해주세요">
          <FormGroup title="상품상세">
            <Form.Item name="description">
              <QuillEditor />
            </Form.Item>
          </FormGroup>

          <Divider />

          <FormGroup title="CSS/JS">
            <Form.Item name="css">
              <CodemirrorEditor />
            </Form.Item>
            <Form.Item name="js">
              <CodemirrorEditor />
            </Form.Item>
          </FormGroup>
        </FormSection>

        <div className="text-center">
          <Button htmlType="submit" type="primary" loading={isLoading}>
            저장
          </Button>
        </div>
      </DefaultForm>
    </>
  );
};

export default React.memo(ProductForm);
