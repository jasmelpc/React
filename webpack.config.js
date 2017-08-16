var path = require('path');
var config = {
  devServer: {
      contentBase: __dirname + '/public',
      hot: true,
      historyApiFallback: true
  },
  entry: path.resolve(__dirname, 'src') + '/index.js',
  output:{
    path: path.resolve(__dirname, 'public'),
    filename:'driven.js',
  },
  devtool: 'source-map',
  module:{
    loaders: [
      {
     test: /\.jsx?$/,
     loader: 'babel-loader',
     exclude: /node_modules/,
     query: {
       presets: ['react', 'es2015', 'stage-1'],
       plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
     }
   },
   {
     test: /\.css$/,
     loaders: ['style-loader', 'css-loader'],
   },
   {
     test: /\.png$/,
     loader: "url-loader?limit=100000"
   },
   {
     test: /\.jpg$/,
     loader: "file-loader"
   },
   {
     test: /\.(woff|woff2)(\?.*$|$)/,
     loader: 'url?limit=10000&mimetype=application/font-woff'
   },
   {
     test: /\.ttf(\?.*$|$)/,
     loader: 'url?limit=10000&mimetype=application/octet-stream'
   },
   {
     test: /\.eot(\?.*$|$)/,
     loader: 'file'
   },
   {
     test: /\.otf(\?.*$|$)/,
     loader: 'file'
   },
   {
     test: /\.svg(\?.*$|$)/,
     loader: 'url?limit=10000&mimetype=image/svg+xml'
   },
   {
     test: /\.gif$/i,
     loaders: [
       'file?hash=sha512&digest=hex&name=[hash].[ext]',
       'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
     ]
   },
   {
     test: /\.json?$/,
     loader: 'json'
   }
 ],
 resolve: {
    extensions: ['', '.js', '.jsx', '.css']
}
    }
  }

module.exports = config;
