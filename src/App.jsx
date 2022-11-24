import './index.css'
import Name from './component/Avatar'
import Text from './component/TextImage'
import Follow from './component/Buttonfollow'
// import Login from './component/Login'
import { signOutGithub } from './firebase/client'
// import Comment from './component/Comment'
import image from './img/image-example.jpg'

const App = () => {
  // if (!localStorage.getItem('@token')) {
  //   return <Login />
  // } else {
  return (
    <>
      <button
        className='absolute right-0 m-4 bg-cyan-600 w-32 h-12 border rounded-lg text-white'
        onClick={signOutGithub}
      >
        Sign Out
      </button>
      <div className='w-screen h-screen flex justify-center items-center'>
        <div className='w-3/5 h-4/5'>
          <div className='absolute px-96 mx-56 my-7'>
            <Follow className='absolute px-96 mx-56 my-7' selecticon />
          </div>
          <Name name='Unblast' nametag='@unblast' />
          <div className='flex justify-center items-center'>
            <div className='w-4/5 text-lg'>
              <Text text='hola' alt='' img={image} temp={1667596677584} />
            </div>
          </div>
          <div className='flex px-4 py-4 gap-6'>
            <Follow className='' selecticon='retweet' />
            <Follow selecticon='heart' />
          </div>
          {/* <Comment /> */}
        </div>
      </div>
    </>
  )
}
// }

export default App
