![Purple Admin UI](./public/og.png)

<h1 align="center">
  Purple Admin UI
</h1>

<p align="center">
  Next.js 기반 어드민 UI
</p>

## 소개

누구나 손쉽고 빠르게 백오피스 페이지를 개발할 수 있도록 인기있는 라이브러리를 모아 만든 Next.js 기반 어드민 UI입니다.

## 데모

https://admin-ui.purple.io/

- GitHub 로그인 또는 아이디/패스워드 입력 (admin/admin)

## One-click 배포

하단 버튼을 클릭하여 배포하고 테스트 할 수 있습니다.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fpurpleio%2Fpurple-admin-ui&project-name=purple-admin-ui&repository-name=purple-admin-ui&demo-title=purple-admin-ui&demo-description=Next.js%20%EA%B8%B0%EB%B0%98%20%EC%96%B4%EB%93%9C%EB%AF%BC%20UI&demo-url=https%3A%2F%2Fadmin-ui.purple.io&demo-image=https%3A%2F%2Fadmin-ui.purple.io%2Fog.png&env=NEXTAUTH_SECRET&envDescription=How%20to%20get%20these%20env%20variables%3A&envLink=https%3A%2F%2Fgithub.com%2Fpurpleio%2Fpurple-admin-ui%2Fblob%2Fmain%2F.env.example)

다음 명령어를 입력하여 프로젝트를 설정하세요.

```bash
# npm
npx create-next-app purple-admin-ui --example "https://github.com/purpleio/purple-admin-ui"
# yarn
yarn create next-app purple-admin-ui --example "https://github.com/purpleio/purple-admin-ui"
# pnpm
pnpm create next-app purple-admin-ui --example "https://github.com/purpleio/purple-admin-ui"
```

## 기본 설정

1. `.env.example` 파일을 복사하여 `.env` 파일을 생성합니다.

- `NEXTAUTH_SECRET` 수정

## 기술스택 & 기능

### Framework

- [Next.js](https://nextjs.org/) – React.js 기반 프레임워크
- [Auth.js](https://authjs.dev/) – 아이디/패스워드 또는 구글/GitHub 로그인을 지원하는 인증 라이브러리

### Platforms

- [Vercel](https://vercel.com/) – Next.js 배포 서비스

### UI

- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework
- [Ant Design](https://www.radix-ui.com/) – 다양한 관리자 컴포넌트를 지원하는 UI 라이브러리
- [Framer Motion](https://framer.com/motion) – React.js 기반 애니메이션 라이브러리
- [Lucide](https://lucide.dev/) – SVG 아이콘 라이브러리
- [`@next/font`](https://nextjs.org/docs/basic-features/font-optimization) – 웹폰트 최적화 라이브러리

### Code Quality

- [TypeScript](https://www.typescriptlang.org/) – Strongly typed programming language that builds on JavaScript
- [Prettier](https://prettier.io/) – Opinionated Code Formatter
- [ESLint](https://eslint.org/) – The pluggable linting utility for JavaScript and JSX

### Miscellaneous

- [Pretendard](https://cactus.tistory.com/306) – 한글에 최적화 된 웹폰트
- [Day.js](https://day.js.org/) – 날짜/시간 라이브러리
- [swr](https://swr.vercel.app/) - 데이터 가져오기를 위한 React Hooks

## 컴포넌트

작성중

## 제한

- IE 미지원

## Author

- subicura ([@subicura](https://twitter.com/subicura))
