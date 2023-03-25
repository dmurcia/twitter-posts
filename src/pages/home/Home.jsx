import { Avatar, ButtonFollow, TextImage } from './components'
import { useAuth } from 'src/hooks/useAuth'
import { Navigate } from 'react-router'
import { routes } from 'src/config'
import browserStorage from 'store'

export default function Home() {
  const auth = useAuth()

  if (!browserStorage.get('userData')) {
    return <Navigate to={routes.login} />
  }

  return (
    <>
      <Avatar name='Unblast' nametag='@unblast' />
      <TextImage text='hola' alt='' img='' />
      <ButtonFollow selecticon='retweet' />
      <ButtonFollow selecticon='heart' />
      <ButtonFollow selecticon />
      <button onClick={() => auth.signOut()}>Sign Out</button>
    </>
  )
}
