import React from 'react'
import { MenuAvatar, Social, DateTime } from './components'
import { Card, CardHeader, CardBody, CardFooter, Button, Typography } from '@material-tailwind/react'
import { useAuth } from '../../../../hooks'

export const Post: React.FC = () => {
  const { session } = useAuth()
  const { displayName } = session
  return (
    <Card>
      <CardHeader shadow={false} color="transparent" className="flex flex-row justify-between m-0 p-6">
        <section className="flex flex-row items-center gap-4">
          <MenuAvatar />
          <div className="flex flex-col">
            <Typography variant="h4" className="text-gray-800">
              {displayName}
            </Typography>
          </div>
        </section>
        <Button variant="outlined" className="border-gray-800 text-gray-800 rounded-full">
          Follow
        </Button>
      </CardHeader>
      <CardBody className="w-full border-b border-b-solid border-b-gray-200 pb-4 mb-4">
        <article>
          <div className="py-3">
            <Typography variant="paragraph" className="text-xl">
              Hola
            </Typography>
            {/* {img ?? <img className="w-max h-1/2" src={img} alt={alt} />} */}
            <DateTime createdAt={session.createdAt} />
          </div>
        </article>
      </CardBody>
      <CardFooter>
        <section className="flex flex-row gap-6 border-b border-b-solid border-b-gray-200 pb-4 mb-4">
          <Typography className="text-gray-800">1 Retweet</Typography>
          <Typography className="text-gray-800">11 likes</Typography>
        </section>
        <section className="flex flex-row gap-10">
          <Social />
        </section>
      </CardFooter>
    </Card>
  )
}

export default Post
