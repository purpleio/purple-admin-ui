![Purple Admin UI](./public/og.png)

<h1 align="center">
  Purple Admin UI
</h1>

<p align="center">
  Next.js와 Tailwind를 이용한 모-던 어드민 템플릿
</p>

## 소개

누구나 손쉽고 빠르게 백오피스 페이지를 개발할 수 있도록 인기있는 라이브러리를 모아 만든 Next.js + Tailwind + Ant Design 기반 어드민 템플릿입니다. ~~어드민 개발만 10년째..~~

![Desktop Demo](./public/sample/desktop_3.png)

> **Warning**
> This is work in progress.

## 데모

https://admin-ui.purple.io/login

> OAuth(Google/GitHub) 또는 아이디/패스워드(admin/admin)으로 로그인하세요.

## 프로젝트 만들기

`Deploy` 버튼을 클릭하여 소스를 복제하고 [vercel](https://vercel.com)에 배포하여 테스트 할 수 있습니다.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fpurpleio%2Fpurple-admin-ui&project-name=purple-admin-ui&repository-name=purple-admin-ui&demo-title=purple-admin-ui&demo-description=Next.js%20%EA%B8%B0%EB%B0%98%20%EC%96%B4%EB%93%9C%EB%AF%BC%20UI&demo-url=https%3A%2F%2Fadmin-ui.purple.io&demo-image=https%3A%2F%2Fadmin-ui.purple.io%2Fog.png&env=NEXTAUTH_SECRET&envDescription=How%20to%20get%20these%20env%20variables%3A&envLink=https%3A%2F%2Fgithub.com%2Fpurpleio%2Fpurple-admin-ui%2Fblob%2Fmain%2F.env.example)

소스를 [다운로드](https://github.com/purpleio/purple-admin-ui/archive/refs/heads/main.zip)하거나 다음 명령어를 입력하여 프로젝트를 시작할 수 있습니다.

```bash
# npm
npx create-next-app --example "https://github.com/purpleio/purple-admin-ui"
# yarn
yarn create next-app --example "https://github.com/purpleio/purple-admin-ui"
# pnpm
pnpm create next-app --example "https://github.com/purpleio/purple-admin-ui"
```

### 기본 설정

`.env.example` 파일을 복사하여 `.env` 파일을 생성합니다.

```bash
cp .env.example .env
```

| 키                              | 설명                       | 예시                                                     |
| ------------------------------- | -------------------------- | -------------------------------------------------------- |
| NEXTAUTH_URL                    | 서비스 URL                 | http://localhost:3000                                    |
| NEXTAUTH_SECRET                 | 랜덤 비밀 키               | [랜덤생성기](https://generate-secret.vercel.app/32) 발급 |
| GITHUB_CLIENT_ID                | GitHub OAuth Client ID     |                                                          |
| GITHUB_CLIENT_SECRET            | GitHub OAuth Client Secret |                                                          |
| GOOGLE_CLIENT_ID                | Google OAuth Client ID     |                                                          |
| GOOGLE_CLIENT_SECRET            | Google OAuth Client Secret |                                                          |
| NEXT_PUBLIC_API_ENDPOINT        | API 서버 엔드포인트        | http://localhost:3000                                    |
| NEXT_PUBLIC_CODENBUTTER_SITE_ID | 팝업 플러그인              | [코드앤버터](https://codenbutter.com) 사이트 아이디      |

### 샘플

샘플 코드를 통해 기본적인 사용법을 확인할 수 있습니다.

**API 서버 (mock data)**

일반적으로 백엔드 서버를 분리하는 경우가 많지만 간단한 테스트를 위한 샘플 코드입니다.

- [src/pages/api/sample/dashboard.ts](src/pages/api/sample/dashboard.ts): 통계 조회
- [src/pages/api/sample/products/index.ts](src/pages/api/sample/products/index.ts): 상품 목록 조회 API
- [src/pages/api/sample/products/[id].ts](src/pages/api/sample/products/[id].ts): 상품 CRUD API

**API 클라이언트**

프론트엔드에서 API를 호출하기 위한 함수를 모아 놓은 샘플 코드입니다.  
API와 관련된 코드와 Type을 관리합니다.

- [src/client/sample/dashboard.ts](src/client/sample/dashboard.ts): 통계 조회 API
- [src/client/sample/product.ts](src/client/sample/product.ts): 상품 CRUD / Type

**페이지**

대시보드와 상품 CRUD 샘플 페이지입니다.  
세부사항은 `src/components/page/[동일한 페이지 경로]`에 컴포넌트로 분리합니다.

- [src/pages/index.tsx](src/pages/index.tsx): 대시보드
- [src/pages/sample/product/list.tsx](src/pages/sample/product/list.tsx): 상품 목록
- [src/pages/sample/product/new.tsx](src/pages/sample/product/new.tsx): 상품 등록
- [src/pages/sample/product/edit/[id].tsx](src/pages/sample/product/edit/[id].tsx): 상품 수정

**컴포넌트**

여러가지 라이브러리를 섞어 보기 좋게 만든 샘플 코드입니다.  
통계, 검색, 리스트, 입력폼등 기본 기능을 확인할 수 있습니다.

- [src/components/page/index/calendar-sample.tsx](src/components/page/index/calendar-sample.tsx): 캘린더 샘플 컴포넌트
- [src/components/page/index/statistic-sample.tsx](src/components/page/index/statistic-sample.tsx): 통계 샘플 컴포넌트
- [src/components/page/sample/product/product-form.tsx](src/components/page/sample/product/product-form.tsx): 상품 입력폼 (생성/수정 공통 사용) 컴포넌트
- [src/components/page/sample/product/product-list.tsx](src/components/page/sample/product/product-list.tsx): 상품 목록 컴포넌트
- [src/components/page/sample/product/product-search.tsx](src/components/page/sample/product/product-search.tsx): 상품 검색 컴포넌트

**샘플 이미지**

- [public/sample](public/sample): 샘플 이미지

## 기술스택 & 기능

### Framework

- [Next.js](https://nextjs.org/) – Vercel에서 만든 React.js 기반 프레임워크
- [Auth.js](https://authjs.dev/) – OAuth(구글/GitHub) 또는 아이디/패스워드 로그인을 지원하는 인증 라이브러리

### Platforms

- [Vercel](https://vercel.com/) – Next.js 애플리케이션 배포 서비스

### UI

- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework
- [Ant Design](https://www.radix-ui.com/) – 다양한 관리자 컴포넌트를 지원하는 UI 라이브러리
- [Lucide](https://lucide.dev/) – SVG 아이콘 모음
- [Framer Motion](https://framer.com/motion) – 애니메이션 라이브러리
- [React CountUp](https://github.com/glennreyes/react-countup) - 카운팅 애니메이션
- [@next/font](https://nextjs.org/docs/basic-features/font-optimization) – 웹폰트 최적화 라이브러리

### Form Control

- [quill](https://quilljs.com/) – 위지윅 텍스트 에디터
- [codemirror](https://codemirror.net/) – 코드 에디터

### Code Quality

- [TypeScript](https://www.typescriptlang.org/) – Strongly typed programming language that builds on JavaScript
- [Prettier](https://prettier.io/) – Opinionated Code Formatter
- [ESLint](https://eslint.org/) – The pluggable linting utility for JavaScript and JSX

### Miscellaneous

- [Pretendard](https://cactus.tistory.com/306) – 어느 플랫폼에서든 사용할 수 있는 system-ui 대체 글꼴
- [Day.js](https://day.js.org/) – 날짜/시간 라이브러리
- [swr](https://swr.vercel.app/) - 데이터 조회를 위한 Hooks
- [ky](https://github.com/sindresorhus/ky) - 작고 우아한 HTTP 클라이언트
- [numeral](http://numeraljs.com/) - 숫자 포멧팅 라이브러리
- [codenbutter](https://www.codenbutter.com/) - 공지 팝업

## 프로젝트 구성

### 아키텍처

- 인증을 제외한 모든 페이지를 정적 페이지로 제공합니다. (SSR 사용 X) ~~API가 죽어도 페이지는 뜹니다~~
- 비즈니스 로직은 백엔드 API로 제공하고 프론트엔드는 잘 표현하고 잘 전달하는 역할을 합니다.
- 폼과 관련된 부분은 Ant Design의 Form 컴포넌트를 적극적으로 사용합니다.

### 디렉토리

효율적인 관리를 위해 디렉토리 구조를 다음과 같이 정의합니다.

```
┌─ src
│  ├─ client # API 호출 코드
│  ├─ components
│  │  ├─ layout # 기본 레이아웃
│  │  ├─ page # 페이지별 세부 컴포넌트
│  │  └─ shared # 공통 컴포넌트
│  ├─ fonts # 웹폰트
│  ├─ lib
│  │  ├─ auth # 인증 관련 코드
│  │  └─ hooks # react hooks
│  ├─ pages # 페이지
│  ├─ styles # 기본 스타일
│  └─ types # 타입 정의
└─ public # 이미지등 정적 파일
```

**src/client**

- 각 컴포넌트에서 직접 fetch를 호출하지 않고 client 디렉토리에 정의한 함수를 사용
- 조회는 `SWR`을 사용하고 POST나 PUT은 `ky`를 사용

**src/components/layout**

- 레이아웃 정의

**src/components/page**

- 특정 페이지에서만 사용하는 컴포넌트 정의
- `pages/profile`에서 사용하는 컴포넌트는 `components/page/profile`에 정의
- component의 style은 같은 폴더에 module.css로 작성

**src/components/shared**

- 공통으로 사용하는 컴포넌트 정의

**src/fonts**

- 웹 폰트 저장

**lib/auth**

- 인증관련 코드 정의

**lib/hooks**

- 커스텀 훅 정의

## 커스텀 컴포넌트

- 폼 섹션 > 폼 그룹 > 필드 인라인
- 모달

## 스크린샷

![Desktop Screenshot 1](./public/sample/desktop_1.png)
![Desktop Screenshot 2](./public/sample/desktop_2.png)
![Desktop Screenshot 3](./public/sample/desktop_4.png)

<img src="./public/sample/mobile_1.png" width="250">
<img src="./public/sample/mobile_2.png" width="250">

## 제한

- IE 미지원

## Author

- subicura ([@subicura](https://twitter.com/subicura))
