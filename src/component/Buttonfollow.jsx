import { useState } from 'react'
import '../index.css'
import blueretweet from '../img/blue-retweet.png'
import retweet from '../img/retweet.png'
import heart from '../img/heart.png'
import likeheart from '../img/likeheart.png'

const Follow = ({ selecticon }) => {
  const [stateIcon, setIcon] = useState(false)
  const [contLikes, setcontLike] = useState(0)
  const [contRetweet, setcontRetweet] = useState(0)

  const onOff = () => {
    setIcon(!stateIcon)
    if (selecticon === 'heart' && stateIcon === false) {
      setcontLike(contLikes + 1)
    }
    if (selecticon === 'retweet' && stateIcon === false) {
      setcontRetweet(contRetweet + 1)
    }
  }

  const parameter = 'w-6 h-6'

  const Icon = () => {
    switch (selecticon) {
      case 'heart':
        return (
          <>
            <img className={parameter} src={stateIcon ? likeheart : heart} alt=''></img>
            <div>{contLikes} Likes </div>
          </>
        )
      case 'retweet':
        return (
          <>
            <img className={parameter} src={stateIcon ? blueretweet : retweet} alt=''></img>
            <div>{contRetweet} Retweets</div>
          </>
        )

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
