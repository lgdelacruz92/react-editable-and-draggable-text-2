import babel from "rollup-plugin-babel";
import json from "@rollup/plugin-json";

export default [
  {
    input: "src/Text/text.js",
    output: {
      name: "react-editable-text",
      file: "dist/index.js",
      format: "es"
    },
    external: ["react", "@material-ui/core", "clsx"],
    plugins: [
      babel({
        exclude: "node_modules/.**"
      }),
      json()
    ]
  }
];
