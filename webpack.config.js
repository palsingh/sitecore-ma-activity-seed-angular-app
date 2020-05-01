var path = require('path');

module.exports = {
    entry: './src/sample.plugin.ts',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: path.resolve(__dirname, "node_modules")
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'sample.plugin.js',
        library: "samplePlugin",
        libraryTarget: "umd"
    },
    externals: [
        "@sitecore/ma-core",
        "@angular/core",
        "@angular/common",
        "@angular/forms",
        "@angular/http",
        "@ngx-translate/core"
    ]
};