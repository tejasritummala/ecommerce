const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Load CSS files
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        type: 'src/images',
        use: [
          {
            loader: 'file-loader', // Load image files
            options: {
              name: '[name].[ext]',
              outputPath: 'images/', // Output path for images
              publicPath: 'images/',
            },
          },
        ],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js',
  },
  mode: 'development',
  devServer: {
    hot: true,
  },
  plugins: [
    //inject bundle.js file into index.html file and place that html file in the build folder.
    //we dont have to specify script tag in index.html file
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
    new ReactRefreshWebpackPlugin(),
  ],
}
