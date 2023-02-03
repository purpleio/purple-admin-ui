import { getDefaultLayout, IDefaultLayoutPage, IPageHeader } from "@/components/layout/default-layout";
import CodemirrorEditor from "@/components/shared/form/control/codemirror-editor";
import QuillEditor from "@/components/shared/form/control/quill-editor";
import DefaultForm from "@/components/shared/form/ui/default-form";
import FieldInline from "@/components/shared/form/ui/field-inline";
import FormGroup from "@/components/shared/form/ui/form-group";
import FormSection from "@/components/shared/form/ui/form-section";
import {
  Button,
  Checkbox,
  DatePicker,
  Divider,
  Form,
  Input,
  InputNumber,
  Radio,
  Rate,
  Select,
  Slider,
  Switch,
} from "antd";
import { useForm } from "antd/es/form/Form";
import { useState } from "react";

const pageHeader: IPageHeader = {
  title: "폼",
};

interface ISampleFormValue {}

const options = [
  { label: "Apple", value: "Apple" },
  { label: "Pear", value: "Pear" },
  { label: "Orange", value: "Orange" },
];

const FormPage: IDefaultLayoutPage = () => {
  const [form] = useForm();
  // formData는 아래에 전송데이터를 보여주기위한 state값. 실제 작업시 지우고 사용.
  const [formData, setFormData] = useState<ISampleFormValue>();
  const [visible, setVisible] = useState(false);

  const handleFinish = (formValue: ISampleFormValue) => {
    // 이곳에 실제 폼 전송 로직 작성.
    setFormData(formValue);
    form.resetFields();
  };

  return (
    <>
      <DefaultForm<ISampleFormValue>
        form={form}
        initialValues={{
          select: "option1",
          inputNumber: 0,
          switch: true,
          slider: 50,
          radioGroup: "a",
          radioButton: "b",
          checkbox: ["A"],
          rate: 3,
        }}
        onFinish={handleFinish}
      >
        <FormSection title="섹션 제목" description="섹션 설명">
          <FormGroup title="Select">
            <Form.Item name="select">
              <Select style={{ width: 200 }}>
                <Select.Option value="option1">서울</Select.Option>
                <Select.Option value="option2">경기도</Select.Option>
                <Select.Option value="option3">부산</Select.Option>
              </Select>
            </Form.Item>
          </FormGroup>

          <Divider />

          <FormGroup title="Select[multiple]">
            <Form.Item name="selectMultiple">
              <Select mode="multiple" placeholder="좋아하는 색을 고르세요">
                <Select.Option value="red">빨간색</Select.Option>
                <Select.Option value="green">녹색</Select.Option>
                <Select.Option value="blue">파란색</Select.Option>
              </Select>
            </Form.Item>
          </FormGroup>

          <Divider />

          <FormGroup title="Input Number">
            <FieldInline>
              <Form.Item name="inputNumber">
                <InputNumber min={1} max={10} />
              </Form.Item>
              <span className="mb-5">개</span>
            </FieldInline>
          </FormGroup>

          <Divider />

          <FormGroup title="Switch">
            <Form.Item name="switch" valuePropName="checked">
              <Switch />
            </Form.Item>
          </FormGroup>

          <Divider />

          <FormGroup title="Slider">
            <Form.Item name="slider">
              <Slider
                marks={{
                  0: "A",
                  20: "B",
                  40: "C",
                  60: "D",
                  80: "E",
                  100: "F",
                }}
              />
            </Form.Item>
          </FormGroup>

          <Divider />

          <FormGroup title="Radio Group">
            <Form.Item name="radioGroup">
              <Radio.Group>
                <Radio value="a">item 1</Radio>
                <Radio value="b">item 2</Radio>
                <Radio value="c">item 3</Radio>
              </Radio.Group>
            </Form.Item>
          </FormGroup>

          <Divider />

          <FormGroup title="Radio Button">
            <Form.Item name="radioButton">
              <Radio.Group>
                <Radio.Button value="a">item 1</Radio.Button>
                <Radio.Button value="b">item 2</Radio.Button>
                <Radio.Button value="c">item 3</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </FormGroup>

          <Divider />

          <FormGroup title="Checkbox">
            <Form.Item name="checkbox">
              <Checkbox.Group>
                <Checkbox value="A">A</Checkbox>
                <Checkbox value="B">B</Checkbox>
                <Checkbox value="C">C</Checkbox>
                <Checkbox value="D">D</Checkbox>
              </Checkbox.Group>
            </Form.Item>
          </FormGroup>

          <Divider />

          <FormGroup title="Rate">
            <Form.Item name="rate">
              <Rate />
            </Form.Item>
          </FormGroup>

          <Divider />

          <FormGroup title="Date">
            <Form.Item name="date">
              <DatePicker allowClear={false} showTime />
            </Form.Item>
          </FormGroup>

          <Divider />

          <FormGroup title="Textarea">
            <Form.Item name="textarea">
              <Input.TextArea placeholder="placeholder" rows={10} />
            </Form.Item>
          </FormGroup>

          <Divider />

          <FormGroup title="Wysiwyg Editor">
            <Form.Item name="wysiwyg">
              <QuillEditor />
            </Form.Item>
          </FormGroup>

          <Divider />

          <FormGroup title="Codemirror Editor">
            <Form.Item name="codemirror">
              <CodemirrorEditor />
            </Form.Item>
          </FormGroup>
        </FormSection>

        <FormSection title="응용" description="응용 예시">
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

          <Divider />

          <FormGroup title="주소">
            <Form.Item name="address1">
              <Select style={{ width: 200 }} defaultValue="서울">
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
        </FormSection>

        <div className="text-center">
          <Button htmlType="submit" type="primary">
            제출
          </Button>
        </div>
      </DefaultForm>

      <div className="mt-5">폼 데이터: {JSON.stringify(formData)}</div>
    </>
  );
};

FormPage.getLayout = getDefaultLayout;
FormPage.pageHeader = pageHeader;

export default FormPage;
