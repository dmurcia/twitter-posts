import React, { useState } from 'react'
import '../../../index.css'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import blueRetweet from '../../../assets/images/blue-retweet.png'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import retweet from '../../../assets/images/retweet.png'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import heart from '../../../assets/images/heart.png'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import likeHeart from '../../../assets/images/likeheart.png'

interface ButtonFollowPropTypes {
  selection?: string
}

const ButtonFollow: React.FC<ButtonFollowPropTypes> = ({ selection }) => {
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

export default ButtonFollow
