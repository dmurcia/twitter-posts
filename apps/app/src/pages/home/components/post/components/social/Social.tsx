import React from 'react'
import { IconButton, Typography } from '@material-tailwind/react'
import { FaRetweet, FaRegComment } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { HiOutlineHeart } from 'react-icons/hi2'

const Social: React.FC = () => {
  return (
    <>
      <div className="flex flex-row gap-4 items-center">
        <IconButton variant="text" size="lg" color="white">
          <FaRegComment className="text-3xl text-gray-600" />
        </IconButton>
        <Typography>1</Typography>
      </div>
      <div className="flex flex-row gap-4 items-center">
        <IconButton variant="text" size="lg" color="white">
          <FaRetweet className="text-3xl text-gray-600" />
        </IconButton>
        <Typography>1</Typography>
      </div>
      <div className="flex flex-row gap-4 items-center">
        <IconButton variant="text" size="lg" color="white">
          <HiOutlineHeart className="text-3xl text-gray-600" />
        </IconButton>
        <Typography>11</Typography>
      </div>
      <div className="flex flex-row gap-4 items-center">
        <IconButton variant="text" size="lg" color="white">
          <HiOutlineMail className="text-3xl text-gray-600" />
        </IconButton>
      </div>
    </>
  )
}

export default Social
