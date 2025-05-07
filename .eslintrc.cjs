// .eslintrc.cjs (CommonJS module format)
module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime", // For new JSX transform
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended", // Accessibility
    "plugin:import/recommended",
    // 'plugin:@typescript-eslint/recommended', // If using TypeScript
    "prettier", // Turns off rules that conflict with Prettier
  ],
  ignorePatterns: [
    "dist",
    ".eslintrc.cjs",
    "vite.config.js",
    "tailwind.config.js",
    "postcss.config.js",
  ], // Added tailwind & postcss config
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  // parser: '@typescript-eslint/parser', // If using TypeScript
  settings: {
    react: { version: "detect" },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx" /* '.ts', '.tsx' */],
      },
    },
  },
  plugins: ["react-refresh"], // Vite specific plugin
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/prop-types": "off", // Recommended to turn off if using TypeScript or for simpler JS projects
    // Add other custom rules here
  },
};
