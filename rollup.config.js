import babel from "rollup-plugin-babel";

export default [
  {
    input: "src/Text/text.js",
    output: {
      name: "react-editable-text",
      file: "dist/index.js",
      format: "es"
    },
    external: ["react", "@material-core", "clsx"],
    plugins: [
      babel({
        exclude: "node_modules/.**"
      })
    ]
  }
];
