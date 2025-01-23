var path = require('path');

module.exports = {
    entry: './src/TLEValidator.js',
    output: {
        globalObject: "this",
        path: path.resolve(__dirname, 'dist'),
        filename: 'tle-validator.js',
        library: 'TLEValidator',
        libraryTarget: 'umd'
    },
    devtool: 'source-map'
};
