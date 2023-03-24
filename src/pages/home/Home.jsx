import { Avatar, ButtonFollow, TextImage } from './components'
import { useAuth } from 'src/hooks/useAuth'

export default function Home() {
  const auth = useAuth()
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
