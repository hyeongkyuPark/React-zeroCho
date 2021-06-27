// node에서 경로 조작하는 객체
const path = require('path');

module.exports = {
    name: 'wordrelay',
    mode: 'development', // 실서비스 : production
    devtool: 'eval',
    resolve: {
        /* 확장자를 웹팩이 탐색하게 함 entry에 파일명만 입력하면,
        resolve.extensions에 선언한 확장자를 사용하는 파일이 있는지를 웹팩에서 탐색함 */
        extensions: ['.js', '.jsx']
    },
    entry: {
        // client가 내부에서 WordRelay를 불러오기 때문에 웹팩이 알아서 탐색하여 합쳐줌
        app: ['./client', /*'./WordRelay.jsx'*/],
    }, // 입력 (모든 번들링할 파일)
    module: {
        rules: [
            {
                // rule 적용 대상
                test: /\.jsx?/,
                // 적용할 rule
                loader: 'babel-loader',
                options: {
                    // rule의 preset
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            },
        ]
    },
    output: {
        // 경로 합쳐줌 __dirname : 현재 폴더('C:\users\...\webpackStart' 대체)
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
    }, // 출력 (app.js 하나로 합쳐서 출력)

}