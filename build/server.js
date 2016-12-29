const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.local.config');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    inline: true,
    historyApiFallback: true
}).listen(3000, '0.0.0.0', (err) => {
    if (err) {
        console.error(err);
    }

    console.log('Listening at 0.0.0.0:3000');
});
