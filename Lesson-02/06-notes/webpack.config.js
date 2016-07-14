var webpack = require('webpack');

module.exports = {
    entry: "./src/main.js",
    output: {
        path: __dirname + '/public/build/',
        publicPath: 'build/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            // loader: "react-hot!babel?presets[]=react",
            loaders: ['react-hot', 'babel?presets[]=react'],
            exclude: [/node_modules/, /public/]
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader!autoprefixer-loader",
            exclude: [/node_modules/, /public/]
        }]
    }
};
