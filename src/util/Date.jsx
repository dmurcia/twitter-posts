import '../index.css'

let day, month, year, hour, secondsPast

export const Datetime = ({ timestamp }) => {
  const now = new Date()

  secondsPast = (now.getTime() - timestamp.getTime()) / 1000

  if (secondsPast < 60) {
    return secondsPast + 's'
  }
  if (secondsPast < 3600) {
    return secondsPast / 60 + 'm'
  }
  if (secondsPast <= 86400) {
    return secondsPast / 3600 + 'h'
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
    month = now
      .toDateString()
      .match(/ [a-zA-Z]*/)[0]
      .replace(' ', '')
    year = now.getFullYear()

    return <div>{hour + '' + day + ' ' + month + ' ' + year}</div>
  }
}
