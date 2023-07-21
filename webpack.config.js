const path = require("path");

module.exports = {
  mode: "development", // tells Webpack that we are working in development, to be adjusted when you switch to production
  entry: "./logic/main.ts", // first file to check
  output: { //single file that will be generated in the end
    // where the final code should be stored
    filename: "bundle.js", // filename can be anything we like
    path: path.resolve(__dirname, "dist"), // path where the file should be stored
    publicPath: "dist",
  },
  devtool: "inline-source-map", // tool for easier debugging, it allows you to see the TS files in the browser
  module: {
    rules: [
      {
        test: /\.ts$/, // tells Webpack what files to look for, in this case TS files
        use: "ts-loader", // tells Webpack what to do with the found files, in this case to use the ts-loader
        exclude: /node_modules/, // tells Webpack which files to ignore
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"], // tells Webpack to look for both ts and js files
  },
  devServer: {
    static: [
      {
        directory: path.join(__dirname),
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
  },
};
