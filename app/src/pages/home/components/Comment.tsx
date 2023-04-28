import React, { useState } from 'react'
import 'app/src/index.css'

const Comment: React.FC = () => {
  const [comment, setComment] = useState<string>('')

  return (
    <div>
      <img src='app/src/component' alt='' />
      <form>
        <label>Comment</label>
        <input
          type='text'
          placeholder='New comment'
          onChange={(e) => setComment(e.target.value ?? '')}
          value={comment}
        />
        <button type='submit'>Sent</button>
      </form>
    </div>
  )
}

export default Comment
