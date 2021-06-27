// react와 react-dom을 불러옴 (node 모듈 시스템)
const React = require('react');
const ReactDom = require('react-dom');
// 필요한 컴포넌트를 불러옴
const WordRelay = require('./WordRelay');



// html에 렌더링 해줌
ReactDom.render(<WordRelay />, document.querySelector('#root'));
