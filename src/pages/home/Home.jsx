import { Avatar, ButtonFollow, TextImage } from './components'
import { useAuth } from 'src/hooks/useAuth'
import { Navigate } from 'react-router'
import { routes } from 'src/config'

export default function Home() {
  const { session, signOut } = useAuth()

  if (!session) {
    return <Navigate to={routes.login} />
  }

  const { displayName, photoURL } = session

  console.log('session', session)

  return (
    <>
      <Avatar name={displayName} photoUrl={photoURL} nametag='@unblast' />
      <TextImage text='hola' alt='' img='' />
      <ButtonFollow selecticon='retweet' />
      <ButtonFollow selecticon='heart' />
      <ButtonFollow selecticon />
      <button onClick={() => signOut()}>Sign Out</button>
    </>
  )
}
