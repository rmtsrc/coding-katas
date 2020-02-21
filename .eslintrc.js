module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: [
    "airbnb",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "prettier/react",
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "jsx-a11y", "prettier"],
  settings: {
    react: {
      version: "detect"
    }
  },
  rules: {
    semi: 0,
    quotes: ["error", "single"],
    "global-require": 0,
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "prettier/prettier": [
      "error",
      {
        semi: true,
        singleQuote: true
      }
    ],
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        required: {
          some: ["nesting", "id"]
        }
      }
    ],
    "jsx-a11y/label-has-for": [
      "error",
      {
        required: {
          some: ["nesting", "id"]
        }
      }
    ]
  }
};
