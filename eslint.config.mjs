import { defineConfig, globalIgnores } from "eslint/config";
import coreWebVitals from "eslint-config-next/core-web-vitals";
import typescriptConfig from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...coreWebVitals,
  ...typescriptConfig,
  globalIgnores([".next/**", "node_modules/**", "next-env.d.ts"]),
]);

export default eslintConfig;
