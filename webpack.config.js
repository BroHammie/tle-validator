var path = require('path');

module.exports = {
    entry: {
        'bundle.js': [
            path.resolve(__dirname, './src/CommonValidator.js'),
            path.resolve(__dirname, './src/LineOneValidator.js'),
            path.resolve(__dirname, './src/LineTwoValidator.js'),
            path.resolve(__dirname, './src/TLEValidator.js')
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'tle-validator.js',
        library: 'tleValidator',
        libraryTarget: 'umd'
    },
    mode: "production"
};