import { useState } from 'react'
import '../../../index.css'

const Comment = () => {
  // const [stateIcon, setIcon] = useState(false)
  // const [showComment, setShowComment] = useState(false)
  const [comment] = useState('')
  const [setMessage] = useState(null)

  return (
    <div>
      <img src='app/src/component' alt='' />
      <form /* onSubmit={handleSubmit}> */>
        <label>Comment</label>
        <input type='text' placeholder='New comment' onChange={(e) => setMessage(e.target.value)} value={comment} />
        <button type='submit'>Sent</button>
      </form>
    </div>
  )
}

export default Comment
