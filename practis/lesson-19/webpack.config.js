const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "my-bundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "common.css", // Створюємо файл для CSS
    }),
    new HtmlWebpackPlugin({
      template: "index.html", // HTML-шаблон
      inject: "body",
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, "dist"), // Де сервер шукатиме файли
    port: 8080, // Задайте потрібний порт
    open: true, // Відкривати браузер автоматично
    client: {
      logging: "error", // або 'warn', 'error' для різних рівнів виведення
    },
  },
};
