module.exports = {
    entry: './js/entry.jsx',
    output: {
        filename: './bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            //tell webpack to use jsx-loader for all *.jsx files
            { test: /\.jsx$/, loader: 'jsx-loader?insertPragma=React.DOM&harmony'},
            { test: /\.jsx$/, exclude: /node_modules/, loader: "babel", query: { presets: ['react'] } },
            { test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader", query: {presets: ['react', 'es2015']} },
        ]
    }
}
