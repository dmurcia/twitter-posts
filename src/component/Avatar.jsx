import '../index.css'
import i from '../img/avatar.png'

const Name = ({ name, nametag }) => {
  return (
    <div className='flex items-center my-4 mx-6'>
      <img src={i} className='w-16 h-16'></img>
      <div className='text-lg'>
        <strong>{name}</strong>
        <br />
        <span>{nametag}</span>
      </div>
    </div>
  )
}

export default Name
