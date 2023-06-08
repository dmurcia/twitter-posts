import '../../../index.css'
import React from 'react'

interface AvatarPropTypes {
  name: string
  photoUrl: string
  nameTag: string
}

const Avatar: React.FC<AvatarPropTypes> = ({ name, photoUrl, nameTag }) => {
  return (
    <div className='flex items-center'>
      <img src={photoUrl} className='w-24 h-24'></img>
      <div>
        <strong>{name}</strong>
        <br />
        <span>{nameTag}</span>
      </div>
    </div>
  )
}

export default Avatar
