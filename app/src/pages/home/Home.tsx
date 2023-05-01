import { Avatar, ButtonFollow, TextImage } from './components'
import React from 'react'
import { useAuth } from '../../hooks'
import { Navigate } from 'react-router'
import { routes } from '../../config'

const Home: React.FC = () => {
  const { session, signOut } = useAuth()

  if (!session) {
    return <Navigate to={routes.login} />
  }

  const { displayName, photoURL } = session

  console.log('session', session)

  return (
    <>
      <Avatar name={displayName} photoUrl={photoURL} nameTag='@unblast' />
      <TextImage text='hola' alt='' img='' />
      <ButtonFollow selection='retweet' />
      <ButtonFollow selection='heart' />
      <ButtonFollow />
      <button onClick={() => signOut()}>Sign Out</button>
    </>
  )
}

export default Home
