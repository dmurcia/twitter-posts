import React from 'react';
import './index.css';
import Avatar from './components/Avatar';
import Text from './components/TextImage';
import Follow from './components/Buttonfollow'

function App() {
  return( 
    <>
      <Avatar name={'Unblast'} nametag={'@unblast'}/>
      <Text  text={'hola'}/>
      <Follow/>
    </>

  )
}

export default App
