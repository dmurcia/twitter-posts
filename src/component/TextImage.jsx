import '../index.css'
import Datetime from '../util/Date'

const Text = ({ alt, text, img, temp }) => {
  const d = new Date(temp)

  return (
    <div className=''>
      <p className='p-4 '>{text}</p>
      <div className='flex justify-center items-center'>
        <img className='w-96' src={img} alt={alt} />
      </div>
      <div className='px-8 py-4 text-gray-500'>
        <Datetime timestamp={d} />
      </div>
    </div>
  )
}

export default Text
