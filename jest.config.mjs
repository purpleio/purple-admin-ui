import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  rootDir: ".",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^@/lib/(.*)$": "<rootDir>/src/lib/$1",
    "^@/pages/(.*)$": "<rootDir>/src/pages/$1",
    "^@/components/(.*)$": "<rootDir>/src/components/$1",
    "^@/client/(.*)$": "<rootDir>/src/client/$1",
  },
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: 'jest-environment-jsdom',
}

export default async () => ({
  ...(await createJestConfig(config)()),
  // ESM 모듈을 Jest에서 사용하기 위한 설정 추가
  transformIgnorePatterns: ["node_modules/(?!(ky-universal|ky)/)"],
});