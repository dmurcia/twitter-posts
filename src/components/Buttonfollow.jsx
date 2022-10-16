import React from "react";
import '../index.css';
import blueretweet from '../img/blue-retweet.png';
import retweet from '../img/retweet.png';
import heart from '../img/heart.png';
import likeheart from '../img/likeheart.png';

class Follow extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isTrue: false
    };
    
    this.parameter = 'w-10 h-10'
    this.icon
    this.selecticon = this.props.selecticon;
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(){
    this.setState(currentState => ({
      isTrue: !currentState.isTrue
    }));
  }

  icon() {
    switch(this.selecticon){
      case 'heart':
        return(<img className={this.parameter} src={this.state.isTrue ? likeheart : heart} alt=""></img>)
      case 'retweet':
        return(<img className={this.parameter} src={this.state.isTrue ? blueretweet : retweet} alt=""></img>)
      
      default:
        return(<p className={this.state.isTrue ? 'bg-blue-500 p-2 border-solid border-2 border-black rounded-full w-32' : 'p-2 border-solid border-2 border-black rounded-full w-32'}>
                Following
              </p>)
      }
  }

  render(){
    return(
      <div>
        <button onClick={this.onClickHandler}>
          {this.icon()}
        </button>
      </div>
    )
  }
}

export default Follow;