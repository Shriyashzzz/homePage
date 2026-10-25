// webpack.config.js
import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";

export default (env, argv) => {
  const isProduction = argv.mode === "production";

  return {
    mode: argv.mode || "development",
    entry: "./src/index.js",
    output: {
      filename: "main.js",
      path: path.resolve(import.meta.dirname, "dist"),
      clean: true,
    },
    // inline eval source maps are for local dev only; they made the
    // production bundle ~7x bigger
    devtool: isProduction ? false : "eval-source-map",
    devServer: {
      watchFiles: ["./src/template.html"],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/template.html",
      }),
      new ESLintPlugin({
        extensions: ["js", "jsx", "ts", "tsx", ".png"],
        fix: true,
        failOnError: true,
      }),
    ],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.html$/i,
          use: ["html-loader"],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          exclude: /[\\/]src[\\/]assets[\\/]/,
          type: "asset/resource",
        },
        {
          // files that need a stable URL: the resume download and the
          // link-preview image referenced by absolute URL in <head>
          test: /[\\/]src[\\/]assets[\\/].+\.(pdf|jpg)$/i,
          type: "asset/resource",
          generator: {
            filename: "[name][ext]",
          },
        },
        {
          test: /\.(?:js|mjs|cjs)$/,
          exclude: /node_modules/, // Do not transpile libraries in node_modules
          use: {
            loader: "babel-loader",
            options: {
              presets: [["@babel/preset-env", { targets: "defaults" }]],
            },
          },
        },
      ],
    },
  };
};
