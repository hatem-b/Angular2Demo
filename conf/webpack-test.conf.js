module.exports = {
  module: {
    preLoaders: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'tslint'
      }
    ],

    loaders: [
      {
        test: /.json$/,
        loaders: [
          'json'
        ]
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loaders: [
          'ts'
        ]
      },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader' },
      { test: /\.html$/,
        loader: 'raw-loader' },
    ]
  },
  plugins: [],
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  resolve: {
    extensions: [
      '',
      '.webpack.js',
      '.web.js',
      '.js',
      '.ts'
    ]
  },
  ts: {
    configFileName: 'conf/ts.conf.json'
  },
  tslint: {
    configuration: require('../tslint.json')
  }
};
