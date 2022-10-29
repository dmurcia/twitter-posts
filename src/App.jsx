import './index.css'
import Name from './component/Avatar'
import Text from './component/TextImage'
import Follow from './component/Buttonfollow'
// import Login from './component/Login'
import { signOutGithub } from './firebase/client'

const App = () => {
  // if (!localStorage.getItem('@token')) {
  //   return <Login />
  // } else {
  return (
    <>
      <Name name='Unblast' nametag='@unblast' />
      <Text text='hola' alt='' img='' />
      <Follow selecticon='retweet' />
      <Follow selecticon='heart' />
      <Follow selecticon />
      <button onClick={signOutGithub}>Sign Out</button>
    </>
  )
}
// }

export default App
