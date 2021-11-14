module.exports = {
  roots: [
    "<rootDir>/src"
  ],
  testEnvironment: "jsdom",
  testMatch: [
    "**/row/__tests__/**/*.[jt]s?(x)",
    // "**/__tests__/**/*.[jt]s?(x)",
    // "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
  "moduleFileExtensions": [
    "ts",
    "js",
    "json",
    // 告诉 Jest 处理 `*.vue` 文件
    "vue"
  ],
  "transform": {
    // 用 `vue-jest` 处理 `*.vue` 文件
    ".*\\.(vue)$": "vue-jest",
    '\\.(js|jsx|ts|tsx)$': [
      'babel-jest', {
        presets: [
          [
            '@babel/preset-env',
            {
              targets: {
                node: true,
              },
            },
          ],
          '@babel/preset-typescript',
        ],
        plugins: [
          '@vue/babel-plugin-jsx',
          // '@babel/plugin-proposal-class-properties',
        ]
      }
    ]
  }
};
