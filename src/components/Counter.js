import React, {Component} from 'react';

const Problematic = () => {
    throw (new Error('Bug!'));
    return (
        <div>

        </div>
    );
}

class Counter extends Component {
    state = {
        number : 0
    }

    constructor(props) {
        super(props);
        console.log('constructor');
    }

    componentWillMount() {
        console.log('componentWillMount (deprecated)');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        // 5의 배수라면 리렌더링 하지않음
        if(nextState.number % 5 == 0) return false;
        return true;
    }

    componentWillUpdate() {
        console.log('componentWillUpdate');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log('componentDidUpdate [prevProps : ' + prevProps +  ', prevState : '+ prevState + ', snapshot : ' + snapshot + ']');
        console.log('componentDidUpdate');
    }

    // handleIncrese = () => {
    //     this.setState({
    //         number : this.state.number + 1
    //     });
    // }
    // 변형(객체 대신 함수 전달)
    handleIncrese = () => {
        this.setState(
            (state) => ({
                number : state.number + 1
            })
        );
    }

    // handleDecrease = () => {
    //     this.setState({
    //         number : this.state.number - 1;
    //     });
    // }
    // 변형(객체 대신 함수 전달)
    handleDecrease = () => {
        this.setState(
            ({ number }) => ({
                number : number - 1
            })
        );
    }

    componentDidCatch(error, info) {
        this.setState({
            error : true
        });
    }

    render() {
        console.log('render');
        if(this.state.error) return (<h1>Critical Error Occured!</h1>);
        return (
            <div>
                <h2>카운터(현재 값 : {this.state.number})</h2>
                { this.state.number === 4 && <Problematic />}
                <button onClick={this.handleIncrese}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        );
    }
}

export default Counter;