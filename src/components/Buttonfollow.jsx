import React from "react";
import '../index.css';

class Follow extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isTrue: false
    };

    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(){
    this.setState(currentState => ({
      isTrue: !currentState.isTrue
    }));
  }

  render(){
    return(
      <div>
        <button onClick={this.onClickHandler} className={this.state.isTrue ? 'bg-blue-500 p-2 border-solid border-2 border-black rounded-full w-32' : 'p-2 border-solid border-2 border-black rounded-full w-32'}>
          Follow
        </button>
        <button>
          -
        </button>
      </div>
    )
  }
}

export default Follow;