import React from 'react'
import '../index.css'

let day, month, year, hour, secondsPast

interface PropType {
  timestamp: Date
}

export const Datetime: React.FC<PropType> = ({ timestamp }) => {
  const now = new Date()

  secondsPast = (now.getTime() - timestamp?.getTime()) / 1000

  if (secondsPast < 60) {
    return <div>{`${secondsPast}s`}</div>
  }
  if (secondsPast < 3600) {
    return <div>{`${secondsPast / 60}m`}</div>
  }
  if (secondsPast <= 86400) {
    return <div>{`${secondsPast / 3600}h`}</div>
  }
  if (secondsPast > 86400) {
    hour = now
      .toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      })
      .toUpperCase()

    day = now.getDay()
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    month = now?.toDateString()?.match(/[a-zA-Z]*/).replace(' ', '')
    year = now.getFullYear()

    return <div>{`${hour} ${day} ${month} ${year}`}</div>
  } else {
    return <div></div>
  }
}

export default Datetime;