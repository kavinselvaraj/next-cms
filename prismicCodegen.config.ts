import type { Config } from "prismic-ts-codegen";

const config: Config = {
  output: "./prismicio-types.d.ts",
  models: {
    files: ["./prismic/*.json", "./slices/**/model.json"],
  },
};

export default config;
