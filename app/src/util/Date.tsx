import React from 'react'
import '../index.css'
import { month } from './duck'

let _day, _month, _year, _hour, _secondsPast

interface PropType {
  timestamp: Date
}

export const Datetime: React.FC<PropType> = ({ timestamp }) => {
  const now = new Date()

  _secondsPast = (now.getTime() - timestamp?.getTime()) / 1000

  if (_secondsPast < 60) {
    return <div>{`${_secondsPast}s`}</div>
  }
  if (_secondsPast < 3600) {
    return <div>{`${_secondsPast / 60}m`}</div>
  }
  if (_secondsPast <= 86400) {
    return <div>{`${_secondsPast / 3600}h`}</div>
  }
  if (_secondsPast > 86400) {
    _hour = now
      .toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      })
      .toUpperCase()

    _day = now.getDay()
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    _month = month[now.getMonth()]
    _year = now.getFullYear()

    return <div>{`${_hour} ${_day} ${_month} ${_year}`}</div>
  } else {
    return <div></div>
  }
}

export default Datetime
