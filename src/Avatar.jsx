import React from "react";
import './index.css';
import i from './img/avatar.png';

class Nametag extends React.Component{

  render(){
    return (
      <div className="flex items-center place-content-center">
        <img src={i} className="w-24 h-24"></img>
        <div>
          <strong id="name">Unblast</strong><br/>
          <span id="nameid">@unblast</span>
        </div>
      </div>
    );
  }
}

export default Nametag;