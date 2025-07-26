import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import unusedImports from "eslint-plugin-unused-imports";
import babelParser from "@babel/eslint-parser"; // ✅ use import instead of require

export default defineConfig([
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      parser: babelParser, // ✅ use imported babelParser
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ["@babel/preset-react"],
        },
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      js,
      react: reactPlugin,
      "unused-imports": unusedImports,
    },
    rules: {
      "no-undef": "warn",
      "no-unused-vars": "off",
      "unused-imports/no-unused-imports": "warn",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          argsIgnorePattern: "^_",
        },
      ],
      "react/react-in-jsx-scope": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
]);
