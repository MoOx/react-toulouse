import path from "path";
import ExtractTextPlugin from "extract-text-webpack-plugin";

import defaultWebpackConfig from "@phenomic/plugin-bundler-webpack/lib/webpack.config.js";

module.exports = (config: PhenomicConfig) => {
  const webpackConfig = defaultWebpackConfig(config);
  return Object.assign({}, webpackConfig, {
    module: {
      rules: [
        {
          test: /\.css$/,
          exclude: /\.global\.css$/,
          // include: path.resolve(__dirname, "src"),
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              {
                loader: "css-loader",
                options: {
                  modules: true,
                  localIdentName:
                    process.env.PHENOMIC_ENV !== "static"
                      ? "[path][name]--[local]--[hash:base64:5]"
                      : "[hash:base64:5]"
                }
              },
              "postcss-loader"
            ]
          })
        },
        {
          test: /\.global\.css$/,
          // include: path.resolve(__dirname, "src"),
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: ["css-loader", "postcss-loader"]
          })
        },
        // svg as raw string to be inlined
        {
          test: /\.svg$/,
          use: "raw-loader"
        }
      ].concat(
        webpackConfig.module.rules.filter(rule => rule.test != "/\\.css$/")
      )
    },
    plugins: [
      new ExtractTextPlugin({
        filename: "phenomic/[name].[contenthash:8].css",
        disable: process.env.PHENOMIC_ENV !== "static"
      })
    ].concat(
      webpackConfig.plugins.filter(
        plugin => !(plugin instanceof ExtractTextPlugin)
      )
    )
  });
};
