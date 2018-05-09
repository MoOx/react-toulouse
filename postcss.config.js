module.exports = {
  plugins: {
    "postcss-cssnext": {
      browsers: "last 2 versions",
      features: {
        customProperties: {
          variables: {
            maxWidth: "60rem",
            mainColor: "#A63A8E",
            mainColorLight: "#FF0099",
            mainColorDark: "#260c21",
            mainColorContrasted: "#eee"
          }
        }
      }
    }
  }
};
