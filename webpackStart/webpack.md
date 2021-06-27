# webpack 사용이유
1. 컴포넌트가 많아지면서 js파일을 분리 해야할 필요성이 생김 (한 파일에 전부 작성할 경우 유지보수가 어려워짐, 개발시에 이름이 겹치는 경우도 발생)
1. 분리한 여러개의 자바스크립트 파일을 모아서 하나의 자바스크립트 파일로 만들어 주는 것이 웹팩임(중복을 배제해주고, 개발시 작성한 console.log 등을 제거 해주는 기능도 가짐)

# Webpack 실행환경
- node, npm 필요
- npm 사용법
    - 패키지 설치 : npm install react react-dom (react와 react-dom 패키지 설치)
    - package.json 파일에서 확인가능 (dependencies)
    - 개발환경에 설치 : npm install -D webpack webpack-cli (webpack과 webpack-cli를 개발환경에 설치)
    - package.json 파일에서 확인가능 (devDependencies : 개발시에만 사용)
    - package.json의 스크립트 항목에 실행 커맨드를 등록할 수 있음

# Webpack 설정
- name: 프로젝트명
- mode: 개발(development) || 실서비스(production)
- devtool: 개발을 용이하게 하기 위해 소스맵을 제공하는 옵션
- resolve.extensions: 웹팩 적용 파일의 확장자를 등록
    - 확장자를 웹팩이 탐색하게 함
    - entry에 파일명만 입력하면, resolve에 선언된 확장자를 사용하는 파일이 있는지를 웹팩이 탐색
- entry: 입력 파일 설정(모든 번들링할 파일이 대상)
    - app: 번들링 대상 파일명 배열
- output: 웹팩의 결과로 나올 파일의 설정(하나로 합쳐서 출력)
    - path: 내보낼 파일의 경로 설정

# Babel
- Webpack설정을 하고 번들링을 진행하기 위해서는 jsx문법의 사용을 위해 필요한 Babel을 불러와야함
- @babel/core : 바벨의 기본
- @babel/preset-env : 구형 브라우저에 대응하도록 새로운 문법을 바꿔줌
- babel-loader : 웹팩에서 바벨을 사용할 수 있게 이어주는 역할 (webpack에서 preset 설정 필요)

