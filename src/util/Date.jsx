import '../index.css'

var day, month, year, hour, secondsPast

const Datetime = ({ timestamp }) => {
  var now = new Date()

  secondsPast = (now.getTime() - timestamp.getTime()) / 1000

  if (secondsPast < 60) {
    return parseInt(secondsPast) + 's'
  }
  if (secondsPast < 3600) {
    return parseInt(secondsPast / 60) + 'm'
  }
  if (secondsPast <= 86400) {
    return parseInt(secondsPast / 3600) + 'h'
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

// var day = 0
// var month = 0
// var year = 0
// var secondsPast

// const datetime = ({ timeStamp }) => {
//   var now = new Date()
//   secondsPast = (now.getTime() - timeStamp.getTime()) / 1000
//   if (secondsPast < 60) {
//     return parseInt(secondsPast) + 's'
//   }
//   if (secondsPast < 3600) {
//     return parseInt(secondsPast / 60) + 'm'
//   }
//   if (secondsPast <= 86400) {
//     return parseInt(secondsPast / 3600) + 'h'
//   }
//   if (secondsPast > 86400) {
//     day = timeStamp.getDate()
//     month = timeStamp
//       .toDateString()
//       .match(/ [a-zA-Z]*/)[0]
//       .replace(' ', '')
//     year = timeStamp.getFullYear() === now.getFullYear() ? '' : ' ' + timeStamp.getFullYear()
//     return day + ' ' + month + year
//   }
// }

export default Datetime
