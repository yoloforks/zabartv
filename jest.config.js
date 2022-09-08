module.exports = {
    collectCoverageFrom: [
      "**/*.{js,jsx,ts,tsx}",
      "!**/*.d.ts",
      "!**/node_modules/**",
    ],
    moduleNameMapper: {
      "^@/components(.*)$": "<rootDir>/src/components/$1",

      "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    },
    testPathIgnorePatterns: [
      "<rootDir>/node_modules/",
      "<rootDir>/.next/",
      "<rootDir>/e2e/",
    ],
    testEnvironment: "jsdom",
    transform: {
      "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
    },
    transformIgnorePatterns: [
      "/node_modules/",
      "^.+\\.module\\.(css|sass|scss)$",
    ],
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  };