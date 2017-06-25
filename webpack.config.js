const path = require('path');
const webpack = require('webpack');

const isProd = process.env.NODE_ENV === 'production';
const ROOT = path.resolve(__dirname, './');

webpackConfig = {
    entry: {
        explore: './src/js/explore.js',
        feed: './src/js/feed.js',
        order: './src/js/order.js',
        pickup: './src/js/pickup.js'
    },
    output: {
        path: path.resolve('./src/public/js'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: path.join(__dirname, 'src'),
                loader: 'babel-loader',
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015', 'stage-0']
                }
            }
        ]
    }
};

if (isProd) {
    webpackConfig.output = {
        path: path.join(ROOT, './dist/public/js'),
        filename: '[name].js'
    }
    webpackConfig.plugins = [
        new webpack.DefinePlugin({
            'process.env': {
                HOST_URL: JSON.stringify('https://api-qd.zoostd.com'),
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),

        // this is needed in webpack 2 for minify CSS
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),

        // minify JS
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true
            },
            comments: false
        })
    ];
}

module.exports = webpackConfig;
