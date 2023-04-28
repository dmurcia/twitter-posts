import React from 'react'
import 'app/src/index.css'
import { Datetime } from 'src/util'

interface TextImagePropTypes {
  alt: string
  text: string
  img: string
}

const TextImage: React.FC<TextImagePropTypes> = ({ alt, text, img }) => {
  const d = new Date(100000000)
  return (
    <div className=''>
      <p className='p-4 '>{text}</p>
      <img src={img} alt={alt} />
      <Datetime timestamp={d} />
    </div>
  )
}

export default TextImage
