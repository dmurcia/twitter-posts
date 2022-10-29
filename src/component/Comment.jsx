import { useState } from 'react'
import '../index.css'

const Comment = () => {
  const [stateIcon, setIcon] = useState(false)
  const [showComment, setshowcomment] = useState(false)
  const [comment, setcomment] = useState('')

  const onOff = () => {
    setIcon(!stateIcon)
  }

  const handleClick = () => {
    setshowcomment(showComment)
  }

  return (
    <div>
      <img src='' alt='' />
      <form onSubmit={handleSubmit}>
        <label>Comment</label>
        <input type='text' placeholder='New comment' onChange={(e) => setMessage(e.target.value)} value={comment} />
        <button type='submit'>Sent</button>
      </form>
    </div>
  )
}

export default Comment
