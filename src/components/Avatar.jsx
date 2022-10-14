import React from "react";
import '../index.css';
import i from '../img/avatar.png';

class Nametag extends React.Component{
  constructor(props){
    super(props)
    
    this.name = this.props.name
    this.nametag = this.props.nametag


  }
  

  render(){
    return (
      <div className="flex items-center">
        <img src={i} className="w-24 h-24"></img>
        <div>
          <strong id="name">{this.name}</strong><br/>
          <span id="nameid">{this.nametag}</span>
        </div>
      </div>
    );
  }
}

export default Nametag;