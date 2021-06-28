const React = require('react');

class WordRelay extends React.Component {
    state =  {
        text: '리액트',
        value: '',
        result: '',
    }

    onChange = (e) => {
        this.setState(prevState => {
            return {
                value: e.target.value,
            }
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const lastText = this.state.text[this.state.text.length - 1];
        const firstValue = this.state.value[0];

        if(lastText === firstValue) {
            this.setState(prevState => {
                return {
                    text: prevState.value,
                    value: '',
                    result: '통과',
                }
            });
        } else {
            this.setState(prevState => {
                return {
                    value: '',
                    result: '땡',
                }
            });
        }

        this.inputRef.focus();
    }

    inputRef;

    onRefInput = (c) => {this.inputRef = c};

    render() {
        return (
            <div>
                <h1>{this.state.text}</h1>
                <form onSubmit={this.onSubmit}>
                    <input ref={this.onRefInput} type="text" value={this.state.value} onChange={this.onChange} />
                    <button type="submit">제출!</button>
                </form>
                <p>{this.state.result}</p>
            </div>
        )
    }
}

module.exports = WordRelay;
