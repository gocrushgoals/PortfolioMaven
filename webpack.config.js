const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Replace with your entry point
  output: {
    path: path.resolve(__dirname, 'dist'), // Replace with your output directory
    filename: 'bundle.js' // Replace with your output bundle filename
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader' // Make sure you have babel-loader configured for JSX and ES6
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'] // Use style-loader and css-loader for CSS files
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html' // Specify your HTML template
    })
  ]
};
