import DefaultModal from "@/components/shared/ui/default-modal";
import { Alert, Button, Form, Input } from "antd";
import { useForm } from "antd/lib/form/Form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";

interface ILoginFormValue {
  username: string;
  password: string;
}

const LoginForm = () => {
  const router = useRouter();
  const [form] = useForm<ILoginFormValue>();
  const [isLoading, setIsLoading] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  const handleFinish = useCallback(async (value: ILoginFormValue) => {
    setIsLoading(true);

    try {
      console.log(value);
      await signIn("login-credentials", { username: value.username, password: value.password });
    } catch (error) {
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      {router?.query.error && router?.query.error !== "CredentialsSignin" ? (
        <div className="mb-3">
          <Alert message={`로그인 중 오류가 발생했습니다. ${router?.query.error}`} type="warning" />
        </div>
      ) : null}
      <div className="grid grid-cols-2 gap-4">
        <a className="flex items-center justify-center h-20 grow btn" onClick={() => signIn("google")}>
          <svg width="29" height="29" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M30 16.0745c0-.9239-.0756-1.8534-.2352-2.7644H16.9335v5.2394h7.348a6.2977 6.2977 0 0 1-.9369 2.3457c-.4675.7106-1.0742 1.3191-1.7833 1.7888v3.3989h4.384C28.5201 23.7134 30 20.2147 30 16.0745Z"
              fill="#4285F4"
            ></path>
            <path
              d="M16.9306 29.3661c3.6683 0 6.7635-1.2047 9.0176-3.2848l-4.3841-3.4003c-1.2204.8312-2.7943 1.3003-4.6292 1.3003-3.55 0-6.5582-2.3952-7.6389-5.613H4.77368v3.5029c1.13278 2.2532 2.86944 4.1472 5.01613 5.4706 2.14669 1.3235 4.61899 2.0243 7.14079 2.0243Z"
              fill="#34A853"
            ></path>
            <path
              d="M9.29314 18.3684c-.56999-1.6897-.56999-3.5198 0-5.2095V9.65454H4.77367c-.95182 1.89576-1.4475 3.98776-1.4475 6.10916 0 2.1213.49568 4.2133 1.4475 6.1091l4.51947-3.5044Z"
              fill="#FBBC04"
            ></path>
            <path
              d="M16.9308 7.54168c1.9395-.03135 3.8136.70088 5.2181 2.03875l3.885-3.88361c-2.4631-2.3116-5.7253-3.5802-9.1031-3.54001-2.5227-.00052-4.9958.70057-7.14293 2.0249-2.14713 1.32433-3.88363 3.21971-5.01541 5.47428l4.51947 3.50441c1.07497-3.22497 4.08887-5.61872 7.63887-5.61872Z"
              fill="#EA4335"
            ></path>
          </svg>
        </a>
        <a className="flex items-center justify-center h-20 grow btn" onClick={() => signIn("github")}>
          <svg width="28" height="28" viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
              fill="#24292f"
            />
          </svg>
        </a>
      </div>
      <div className="my-5 text-lg text-center text-gray-400">or</div>
      <Form<ILoginFormValue>
        form={form}
        layout="vertical"
        initialValues={{ username: "admin", password: "admin" }}
        onFinish={handleFinish}
      >
        <div className="mb-3">
          {router?.query.error === "CredentialsSignin" ? (
            <>
              <Alert message="로그인을 실패했습니다. 아이디 또는 비밀번호를 다시 확인해주세요." type="error" />
            </>
          ) : (
            <></>
          )}
        </div>
        <Form.Item name="username" rules={[{ required: true, message: "아이디를 입력해주세요" }]}>
          <Input size="large" placeholder="아이디" />
        </Form.Item>

        <Form.Item name="password" rules={[{ required: true, message: "비밀번호를 입력해주세요" }]}>
          <Input placeholder="비밀번호" type="password" size="large" />
        </Form.Item>

        <Button size="large" type="primary" htmlType="submit" className="w-full" loading={isLoading}>
          로그인
        </Button>

        <a className="inline-block mt-2 text-gray-400" onClick={() => setShowPasswordModal(true)}>
          비밀번호 찾기
        </a>
      </Form>

      <DefaultModal title="비밀번호 찾기" open={showPasswordModal} handleHide={() => setShowPasswordModal(false)}>
        🔑 임시 로그인 정보는 admin / admin 입니다.
      </DefaultModal>
    </>
  );
};

export default React.memo(LoginForm);
