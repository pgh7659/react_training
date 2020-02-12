import React, {Component} from 'react';
import LikeBtn from './components/LikeBtn';
import GuGuDan from './components/GuGuDan';
import MyName from './components/MyName';
import Counter from './components/Counter';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

class App extends GuGuDan {
  // render() {
  //   return (<GuGuDan/>);
  // }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <GuGuDan/>
          </p>
          {/* <p>
            {(function(){
              if(1 + 1 === 1) return <div>1입니다</div>
              else if(1 + 1 === 2) return <div>2입니다</div>
              else return <div>모르겠습니다</div>
            } ())}
            {(() => {
              if(1 === 1) return <div>정답</div>
              if(1 === 2) return <div>정답</div>
              if(1 === 3) return <div>정답</div>
            })()}
          </p> */}
          <MyName />
          <Counter />
        </header>
      </div>
    );
  }
}

export default App;