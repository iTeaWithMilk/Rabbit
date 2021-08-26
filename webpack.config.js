const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: "dist",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|jpeg|jpg|svg|gif|ico)$/,
        type: "asset/resource",
        generator: {
          filename: "img/[name].[hash][ext][query]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)/,
        type: "asset/resource",
      },
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: "Rabbit",
      template: "public/index.html",
      favicon: path.resolve(__dirname, "public/favicon.ico"),
    }),
  ],
};
