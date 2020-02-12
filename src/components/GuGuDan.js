import React from 'react';

class GuGuDan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first : Math.ceil(Math.random() * 9),
            second : Math.ceil(Math.random() * 9),
            value : '',
            result : '',
            count : 0,
            correctCnt : 0,
            incorrectCnt : 0
        };
    }

    onSubmit = (e) => {
        let correctAnswer = this.state.first * this.state.second;

        e.preventDefault();
        if(this.state.count < 10) {
            if(parseInt(this.state.value) === this.state.first * this.state.second) {
                this.setState({
                    result: this.state.value + ' 정답',
                    first: Math.ceil(Math.random() * 9),
                    second: Math.ceil(Math.random() * 9),
                    value: ''
                });
                
                this.state.correctCnt++
            } else {
                this.setState({
                    result: this.state.value + ' 오답입니다. 정답은 ' + correctAnswer,
                    value: '',
                    first: Math.ceil(Math.random() * 9),
                    second: Math.ceil(Math.random() * 9)
                });

                this.state.incorrectCnt++
            }

            this.state.count++;    
        } else {
            alert('정답 : ' + this.state.correctCnt + '개\n 오답 : ' + this.state.incorrectCnt);
            this.setState({
                result: '',
                first: Math.ceil(Math.random() * 9),
                second: Math.ceil(Math.random() * 9),
                value: '',
                correctCnt: 0,
                incorrectCnt: 0,
                count: 0
            });
        }
    };

    onChange = (e) => {
        this.setState({value: e.target.value});
    };

    render() {
        return (
            <>
                <div><h2>GuGuDan Quiz</h2></div>
                <div>{this.state.first} X {this.state.second} = ?</div>
                <form onSubmit={this.onSubmit}>
                    <input type='number' value={this.state.value} onChange={this.onChange} />
                    <button>입력</button>
                </form>
                <div>{this.state.result}</div>
            </>
        );
    }
}

export default GuGuDan;