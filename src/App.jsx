import React from 'react'
import './index.css'
import Avatar from './components/Avatar'
import Text from './components/TextImage'
import Icon from './components/Buttonfollow'
import Login from './components/Login'
import { signOutGithub } from './firebase/client'

function App() {
  if (!localStorage.getItem('@token')) {
    return <Login />
  } else {
    return (
      <>
        <Avatar name={'Unblast'} nametag={'@unblast'} />
        <Text text={'hola'} />
        <Icon selecticon="retweet" />
        <Icon selecticon="heart" />
        <Icon selecticon />
        <button onClick={signOutGithub}>Sign Out</button>
      </>
    )
  }
}

export default App
