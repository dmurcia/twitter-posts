import React from 'react';
import './index.css';
import Avatar from './components/Avatar';
import Text from './components/TextImage';
import Icon from './components/Buttonfollow'

function App() {
  return( 
    <>
      <Avatar name={'Unblast'} nametag={'@unblast'}/>
      <Text  text={'hola'}/>
      <Icon selecticon = 'retweet'/>
      <Icon selecticon = 'heart'/>
      <Icon selecticon />
    </>

  )
}

export default App
