# Babel-Preset & plugins
## 01. Babel-Preset
- preset은 plugin들을 모아놓은 것
- 여러가지 합쳐졌기 때문에 설정할 것이 많음
- @babel/preset-env : 구형 브라우저를 지원해주는 기능의 프리셋
    - ['@babel/preset-env', { options }]의 형태로 각 프리셋의 기능을 설정해줄 수 있음
        - targets. browsers : 대상 브라우져를 직접 선택할 수 있음 (지원하고자 하는 브라우저만 선택할 수 있음)(last 1 version, >1%, not dead 등)

# 02. Plugin
- 여러 기능을 제공해주는 확장프로그램(추가적인 기능)
- 예시) webpack.LoaderOptionsPlugin({debug: true}) : webpack에서 설정해주는 loader들의 옵션에 관한 설정을 해줌 debug: true는 loade 속성인 debug값을 true변경하여 웹팩 가동시 loader를 디버깅하여 로그에 찍어줌