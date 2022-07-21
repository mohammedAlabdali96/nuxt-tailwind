rules: [
  {
    test: /\.vue$/,
    use: "vue-loader",
    options: {
      compilerOptions: {
        isCustomElement: (tag) => tag === "Switch"
      }
    }
  }
  // ...
];
