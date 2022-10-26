import React from 'react'
import '../index.css'

class Text extends React.Component {
  constructor(props) {
    super(props)
    this.text = this.props.text
    this.alt = this.props.alt
  }

  render() {
    return (
      <div className='flex items-center'>
        <p className='p-4 '>hola</p>
        <img src={''} alt={this.alt} />
      </div>
    )
  }
}

export default Text
