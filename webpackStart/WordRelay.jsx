const React = require('react');

class WordRelay extends React.Component {
    state = {
        text: 'Hello World~!',
    };

    render() {
        return (
            <div>
                <h1>{this.state.text}</h1>
            </div>
        )
    };
}

// 다른 컴포넌트에서 사용하기 위해 컴포넌트를 내보냄
module.exports = WordRelay;
