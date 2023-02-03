import { Form, FormProps } from "antd";
import React, { PropsWithChildren, useCallback } from "react";
import style from "./form.module.css";

interface IDefaultSearchFormProps extends FormProps {}

const DefaultSearchForm = <T,>({ children, ...formProps }: PropsWithChildren<IDefaultSearchFormProps>) => {
  const handleFormFailed = useCallback(
    ({ errorFields }: any) => {
      formProps.form?.scrollToField(errorFields[0].name);
    },
    [formProps.form]
  );

  return (
    <Form<T>
      className={style["default-form"]}
      layout="horizontal"
      requiredMark={false}
      onFinishFailed={handleFormFailed}
      labelAlign="left"
      labelWrap
      {...formProps}
    >
      {children}
    </Form>
  );
};

export default React.memo(DefaultSearchForm) as typeof DefaultSearchForm;
