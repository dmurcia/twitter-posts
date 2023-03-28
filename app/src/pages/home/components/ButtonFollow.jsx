import { useState } from 'react'
import 'app/src/index.css'
import blueRetweet from 'app/src/img/blue-retweet.png'
import retweet from 'app/src/img/retweet.png'
import heart from 'app/src/img/heart.png'
import likeHeart from 'app/src/img/likeheart.png'

const Follow = ({ selection }) => {
  const [stateIcon, setIcon] = useState(false)

  const onOff = () => {
    setIcon(!stateIcon)
  }

  const parameter = 'w-8 h-8'

  const Icon = () => {
    switch (selection) {
      case 'heart':
        return <img className={parameter} src={stateIcon ? likeHeart : heart} alt=''></img>
      case 'retweet':
        return <img className={parameter} src={stateIcon ? blueRetweet : retweet} alt=''></img>

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
