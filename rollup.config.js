import { babel } from "@rollup/plugin-babel";

export default {
  input: "./src/index.js", // 入口文件
  output: [
    {
      format: "es",
      file: "lib/bundle.esm.js",
    },
    {
      format: "umd",
      file: "lib/bundle.umd.js",
      name: "bundle",
    },
  ],
  plugins: [babel({ babelHelpers: "bundled" })],
};
