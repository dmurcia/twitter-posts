import React from 'react'
import { Typography } from '@material-tailwind/react'
import { PropType, useTransfromTimestamp } from './duck'

export const DateTime: React.FC<PropType> = ({ createdAt }) => {
  const time = useTransfromTimestamp({ createdAt })
  return <Typography className="text-gray-600 text-sm">{time}</Typography>
}

export default DateTime
