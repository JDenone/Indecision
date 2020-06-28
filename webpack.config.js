const path = require('path');
//console.log(__dirname);
//console.log(path.join(__dirname, 'public'));

module.exports = {
    mode: 'none',
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename:'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader', //aqui utilizamos apenas um loader
            test: /\.js$/,
            exclude: /node_modules/
        },
        {
            test: /\.s?css$/,
            use: [ //para uma matriz de loaders utilizamos o array "[]"
                'style-loader', 
                'css-loader',
                'sass-loader'
            ]
        }
    ]
    },
    devtool: 'cheap-module-eval-source-map',//Este comando nos permite localizar de onde vem o erro.
    devServer: {
        contentBase: path.join(__dirname, 'public'),
    }
};