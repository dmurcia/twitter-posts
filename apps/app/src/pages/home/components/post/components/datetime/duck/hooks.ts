import { useRef } from 'react'
import { monthList, TIMES } from './constanst'

export const useTransfromTimestamp = ({ createdAt }: { createdAt: string }) => {
  const now = new Date()
  const timestamp = new Date(+createdAt)
  console.log('timestamp', timestamp)

  const day = useRef<number>()
  const month = useRef<string>()
  const year = useRef<number>()
  const hour = useRef<string>()
  const secondsPast = useRef<number>()
  const currentMonth: number = now.getMonth()
  const currentTime = now.getTime()

  if (!timestamp) {
    return ''
  }

  secondsPast.current = (currentTime - timestamp.getTime()) / 1000
  if (secondsPast.current < TIMES.Minute) {
    return `${secondsPast.current}s`
  }
  if (secondsPast.current < TIMES.Hour) {
    return `${secondsPast.current / TIMES.Minute}m`
  }
  if (secondsPast.current <= 86400) {
    return `${secondsPast.current / TIMES.Hour}h`
  }
  if (secondsPast.current > 86400) {
    hour.current = now
      .toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      })
      .toUpperCase()

    day.current = now.getDay()
    month.current = monthList[currentMonth]
    year.current = now.getFullYear()

    return `${hour.current} ${day.current} ${month.current} ${year.current}`
  }
}
