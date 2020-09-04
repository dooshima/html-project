const path = require("path")

module.exports = {
    mode:"development",
    target:"web",
    entry:"./assests/js/main.js",
    output:{
        filename:"bundle.js",
        path:path.resolve(__dirname,"dist")
    },
    module:{
        rules: [
            {
                test:/\.css$/,
                use:["style-loader","css-loader"]
            },
            {
                test:/\.scss$/,
                use:["style-loader","css-loader","sass-loader"]
            }
        ]
    },
    devServer:{
        contentBase:'./',
        port:500
    }
}