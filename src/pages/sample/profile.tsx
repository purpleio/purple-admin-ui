import { getDefaultLayout, IDefaultLayoutPage, IPageHeader } from "@/components/layout/default-layout";
import DefaultForm from "@/components/shared/form/default-form";
import FieldInline from "@/components/shared/form/field-inline";
import FormGroup from "@/components/shared/form/form-group";
import FormSection from "@/components/shared/form/form-section";
import { useAuth } from "@/lib/auth/auth-provider";
import { Button, Divider, Form, Input, Select, Switch } from "antd";
import { useForm } from "antd/es/form/Form";

const pageHeader: IPageHeader = {
  title: "내 프로필",
};

interface ISampleFormValue {
  name: string;
  email: string;
  phone1: string;
  phone2: string;
  phone3: string;
  phonePromotion: boolean;
  emailPromotion: boolean;
  addressName: string;
  addressReceiver: string;
  address1: string;
  address2: string;
  address3: string;
  addressPhone1: string;
  addressPhone2: string;
  addressPhone3: string;
}

const ProfilePage: IDefaultLayoutPage = () => {
  const [form] = useForm();
  const { session } = useAuth();

  const handleFinish = (formValue: ISampleFormValue) => {
    console.log(formValue);
    form.resetFields();
  };

  return (
    <>
      <DefaultForm<ISampleFormValue>
        form={form}
        initialValues={{
          name: session.user.name,
          email: session.user.email,
          phonePromotion: true,
          emailPromotion: false,
          address1: "option1",
        }}
        onFinish={handleFinish}
      >
        <FormSection title="기본정보" description="이름, 전화번호등 기본정보를 설정합니다">
          <FormGroup title="이름*">
            <Form.Item name="name" rules={[{ required: true, message: "필수값입니다" }]}>
              <Input placeholder="이름을 입력하세요" />
            </Form.Item>
          </FormGroup>

          <Divider />

          <FormGroup title="이메일*">
            <Form.Item name="email" rules={[{ required: true, message: "필수값입니다" }]}>
              <Input placeholder="이메일을 입력하세요" />
            </Form.Item>
          </FormGroup>

          <Divider />

          <FormGroup title="전화번호">
            <FieldInline>
              <Form.Item name="phone1">
                <Input className="w-20" />
              </Form.Item>
              <span className="mb-5">-</span>
              <Form.Item name="phone2">
                <Input className="w-20" />
              </Form.Item>
              <span className="mb-5">-</span>
              <Form.Item name="phone3">
                <Input className="w-20" />
              </Form.Item>
            </FieldInline>
          </FormGroup>
        </FormSection>

        <FormSection title="프로모션 정보수신 동의" description="맞춤형 정보, 이벤트, 혜택 정보를 보내 드려요">
          <FormGroup title="휴대전화">
            <Form.Item name="phonePromotion" valuePropName="checked">
              <Switch />
            </Form.Item>
          </FormGroup>

          <Divider />

          <FormGroup title="이메일">
            <Form.Item name="emailPromotion" valuePropName="checked">
              <Switch />
            </Form.Item>
          </FormGroup>
        </FormSection>

        <FormSection title="주소" description="배송지를 관리합니다">
          <FormGroup title="배송지명">
            <Form.Item name="addressName">
              <Input placeholder="배송지명을 입력하세요" />
            </Form.Item>
          </FormGroup>

          <Divider />

          <FormGroup title="수령인">
            <Form.Item name="addressReceiver">
              <Input placeholder="수령인을 입력하세요" />
            </Form.Item>
          </FormGroup>

          <Divider />

          <FormGroup title="주소">
            <Form.Item name="address1">
              <Select style={{ width: 200 }}>
                <Select.Option value="option1">서울</Select.Option>
                <Select.Option value="option2">경기도</Select.Option>
                <Select.Option value="option3">부산</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item name="address2">
              <Input placeholder="상세 주소 1" />
            </Form.Item>

            <Form.Item name="address3">
              <Input placeholder="상세 주소 2" />
            </Form.Item>
          </FormGroup>

          <Divider />

          <FormGroup title="연락처">
            <FieldInline>
              <Form.Item name="addressPhone1">
                <Input className="w-20" />
              </Form.Item>
              <span className="mb-5">-</span>
              <Form.Item name="addressPhone2">
                <Input className="w-20" />
              </Form.Item>
              <span className="mb-5">-</span>
              <Form.Item name="addressPhone3">
                <Input className="w-20" />
              </Form.Item>
            </FieldInline>
          </FormGroup>
        </FormSection>

        <div className="text-center">
          <Button htmlType="submit" type="primary">
            저장
          </Button>
        </div>
      </DefaultForm>
    </>
  );
};

ProfilePage.getLayout = getDefaultLayout;
ProfilePage.pageHeader = pageHeader;

export default ProfilePage;
