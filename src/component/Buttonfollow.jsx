import { useState } from 'react'
import '../index.css'
import blueretweet from '../img/blue-retweet.png'
import retweet from '../img/retweet.png'
import heart from '../img/heart.png'
import likeheart from '../img/likeheart.png'

const Follow = ({ selecticon }) => {
  const [stateIcon, setIcon] = useState(false)

  const onOff = () => {
    setIcon(!stateIcon)
  }

  const parameter = 'w-8 h-8'

  const Icon = () => {
    switch (selecticon) {
      case 'heart':
        return <img className={parameter} src={stateIcon ? likeheart : heart} alt=''></img>
      case 'retweet':
        return <img className={parameter} src={stateIcon ? blueretweet : retweet} alt=''></img>

      default:
        return (
          <p
            className={
              stateIcon
                ? 'bg-blue-500 p-2 border-solid border-2 border-black rounded-full w-32'
                : 'p-2 border-solid border-2 border-black rounded-full w-32'
            }
          >
            Following
          </p>
        )
    }
  }

  return (
    <div>
      <button onClick={() => onOff()}>{Icon()}</button>
    </div>
  )
}

export default Follow
