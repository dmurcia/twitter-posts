import 'app/src/index.css'
import { Datetime } from 'app/src/util/Date'

const Text = ({ alt, text, img }) => {
  const d = new Date(100000000)
  return (
    <div className=''>
      <p className='p-4 '>{text}</p>
      <img src={img} alt={alt} />
      <Datetime timestamp={d} />
    </div>
  )
}

export default Text
