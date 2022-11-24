import { useState } from 'react'
import '../index.css'

const Comment = () => {
  const [stateIcon, setIcon] = useState(false)
  const [comment, setcomment] = useState([])
  const [showComment, setshowComment] = useState(false)
  // const [showallComment, setallcomment] = useState(false)

  const onOff = () => {
    setIcon(!stateIcon)
  }

  const handleClick = () => {
    setshowComment(!showComment)
  }

  const handleSubmit = () => {}

  return (
    <div>
      <img src='' alt='comment' onClick={onOff(handleClick)} />
      <form onSubmit={handleSubmit}>
        <label className='px-2 text-lg'>Comment</label>
        <input
          className='my-2 w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
          type='text'
          placeholder='New comment'
          onChange={(e) => setcomment(e.target.value)}
          value={comment}
        />
        <button className='m-2 border border-black rounded-md px-8 bg-slate-600 text-white ' type='submit'>
          Sent
        </button>
      </form>
    </div>
  )
}

export default Comment
