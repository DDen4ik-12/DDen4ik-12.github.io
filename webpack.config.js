import path from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";

const titleStart = "Den4ik-12's Site |";

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
        test: /\.jsx?$/,
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
        test: /\.ftl$/,
        loader: "raw-loader",
      },
      {
        test: /\.(post)?css$/,
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
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["postcss-import", "postcss-mixins"],
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{
        from: "static",
        to: "",
      }]
    }),
    new HtmlWebpackPlugin({
      chunks: ["index"],
      template: "./src/layout.ejs",
      filename: "index.html",
      title: `${titleStart} General`,
      themeColor: "#ffd900",
    }),
    new HtmlWebpackPlugin({
      chunks: ["404"],
      template: "./src/layout.ejs",
      filename: "404.html",
      title: `${titleStart} Error 404`,
      themeColor: "#ff3377",
    }),
    new HtmlWebpackPlugin({
      chunks: ["projects"],
      template: "./src/layout.ejs",
      filename: "projects/index.html",
      title: `${titleStart} Projects`,
      themeColor: "#00ff08",
    }),
  ],
  devServer: {
    static: path.resolve(path.dirname(fileURLToPath(import.meta.url)), "dist"),
    compress: true,
    port: 9000,
  },
};