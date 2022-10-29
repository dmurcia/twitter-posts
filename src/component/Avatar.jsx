import '../index.css'
import i from '../img/avatar.png'

const Name = ({ name, nametag }) => {
  return (
    <div className='flex items-center'>
      <img src={i} className='w-24 h-24'></img>
      <div>
        <strong>{name}</strong>
        <br />
        <span>{nametag}</span>
      </div>
    </div>
  )
}

export default Name
