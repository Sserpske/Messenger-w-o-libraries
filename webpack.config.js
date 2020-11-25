const path = require('path');

module.exports = {
  entry: {
    app: './src/js/index.ts',
    vendors: 'handlebars',
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      handlebars: 'handlebars/dist/handlebars.min.js',
    },
    extensions: ['.ts', '.js'],
  },
};
