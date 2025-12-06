import path from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";

console.log(
  "Build will be stored in:",
  path.resolve(path.dirname(fileURLToPath(import.meta.url)), "dist"),
);

export default {
  entry: {
    index: "./src/pages/index/index.jsx",
    404: "./src/pages/404/404.jsx",
    projects: "./src/pages/projects/projects.jsx",
  },
  output: {
    path: path.resolve(path.dirname(fileURLToPath(import.meta.url)), "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(svg|png)$/,
        loader: "url-loader",
        options: {
          outputPath: "assets/",
          esModule: false,
        },
      },
      {
        test: /\.(css)$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[name]_[local]_[hash:base64:5]",
                exportLocalsConvention: "camel-case-only",
              },
              importLoaders: 1,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ["index"],
      template: "./src/pages/index/index.html",
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      chunks: ["404"],
      template: "./src/pages/404/404.html",
      filename: "404.html",
    }),
    new HtmlWebpackPlugin({
      chunks: ["projects"],
      template: "./src/pages/projects/projects.html",
      filename: "projects/index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [{
        from: "static",
        to: "",
      }]
    }),
  ],
  devServer: {
    static: path.resolve(path.dirname(fileURLToPath(import.meta.url)), "dist"),
    compress: true,
    port: 9000,
  },
};