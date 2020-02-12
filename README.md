React ? 

 - JavaScript Library
 - SPA (Single Page Application)
 - 장점 
   1. 사용자 경험(UI/UX)
   2. 재사용 컴포넌트(중복을 줄일 수 있음)
   3. 데이터-화면 일치
   
브라우저의 동작 방식

1. DOM Tree 생성
브라우저가 HTML 을 전달받으면, 브라우저의 렌더 엔진이 이를 파싱하고 DOM 노드(Node) 로 이뤄진 트리를 생성
(각 노드는 각 HTML 엘리먼트들과 연관)

2. Render Tree 생성
외부 CSS 파일과 각 엘리먼트의 inline 스타일을 파싱
(스타일 정보를 사용하여 DOM 트리에 따라 새로운 트리, 렌더트리 생성)

3. Render Tree 생성 – 그 뒤에선 무슨일이 일어나고 있는가..?
노드의 스타일을 처리하는 과정 : ‘attachment’
DOM 트리의 모든 노드들은 ‘attach’ 라는 메소드가 존재(스타일 정보를 계산해서 객체형태로 반환 : 이 과정은 동기적(synchronous) 작업)
DOM 트리에 새로운 노드가 추가되면 그 노드의 attach 메소드가 실행

4. Layout (reflow 라고도 불립니다)
렌더 트리가 다 만들어지고 나면, 레이아웃 과정 수행
(각 노드들은 스크린의 좌표가 주어지고, 정확히 어디에 나타나야 할 지 위치가 주어집니다)

5. Painting
렌더링 된 요소들에 색을 입히는 과정
트리의 각 노드들을 거쳐가면서 paint() 메소드를 호출 => 스크린에 원하는 정보 표출

정리하자면!
DOM에 변화생기면, 렌더트리를 재생성하고(모든 요소들의 스타일이 다시 계산) 레이아웃을 만들고 페인팅을 하는 과정이 다시 반복.
복잡한 SPA(싱글 페이지 어플리케이션)에서는 DOM 조작이 많이 발생 => 변화를 적용하기 위해 브라우저가 많이 연산을 해야한단 소리고, 전체적인 프로세스를 비효율적으로 만듭니다.


**Virtual DOM을 사용한다면??!!
만약에 뷰에 변화가 있다면, 그 변화는 실제 DOM 에 적용되기전에 가상의 DOM 에 먼저 적용시키고 그 최종적인 결과를 실제 DOM 으로 전달
=> 브라우저 내에서 발생하는 연산의 양을 줄이면서 성능이 개선

JSX

JSX 문법

1. 두개 이상의 엘리먼트는 무조건 하나의 엘리먼트로 감싸져있어야 합니다.
(가장 간단하게 해결하는 방법은 이렇게 div 로 감싸주는 것 입니다.)
(단순히 감싸기 위해서 새로운 div 를 사용하는게 맘에들지 않을 수도 있습니다. => <Fragment></Fragment>)
import React, { Component, Fragment } from 'react';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div>
          Hello
        </div>
        <div>
          Bye
        </div>
      </Fragment>
    );
  }
}

export default App;


2. JSX 내부에서 조건부 렌더링을 할 때는 보통 삼항 연산자를 사용하거나, AND 연산자를 사용합니다.
반면에 if 문을 사용 할 수는 없어요 (사용하려면 IIFE(즉시 실행 함수 표현) 을 사용해아합니다.)
**IIFE : 즉시 실행 함수 표현(IIFE, Immediately Invoked Function Expression)은 정의되자마자 즉시 실행되는 Javascript Function 를 말한다.

(function () {
    statements
})();

import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        {
          1 + 1 === 2 
            ? (<div>맞아요!</div>)
            : (<div>틀려요!</div>)
        }
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

class App extends Component {
  render() {
    const value = 1;
    return (
      <div>
        {
          (function() {
            if (value === 1) return (<div>하나</div>);
            if (value === 2) return (<div>둘</div>);
            if (value === 3) return (<div>셋</div>);
          })()
        }
      </div>
    );
  }
}

export default App;

3. Style 지정

import React, { Component } from 'react';

class App extends Component {
  render() {
    const style = {
      backgroundColor: 'black',
      padding: '16px',
      color: 'white',
      fontSize: '12px'
    };

    return (
      <div style={style}>
        hi there
      </div>
    );
  }
}

export default App;


4. class명 지정(className 사용)

import React, { Component } from 'react';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        리액트
      </div>
    );
  }
}

export default App;