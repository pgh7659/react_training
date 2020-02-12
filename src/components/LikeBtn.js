import React from 'react';

// component 생성
class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            liked : false
        }
    }
  
    // render() {
    //     return e(
    //         'button',
    //         {onClick: () => {this.setState({liked: true})}, type: 'submit'},
    //         this.state.liked === true ? 'Liked' : 'Like'); // <button>Like</button>
    // }
  
    render() {
        return <button type='submit' onClick={() => { this.setState({liked: true})}}>{this.state.liked ? 'Liked' : 'Like'}</button>;
    }
  }

  export default LikeButton;