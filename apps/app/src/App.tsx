import React, { useEffect } from 'react'
import './index.css'
import { MainRouter } from './routes'
import { routes } from './config'
import { useAuth } from './hooks'
import { useNavigate } from 'react-router-dom'
import { Typography } from '@material-tailwind/react'

const App: React.FC = () => {
  const { session } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (session) {
      navigate(routes.home)
    } else {
      navigate(routes.login)
    }
  }, [session])
  return (
    <>
      <main className="bg-gray-100 h-full">
        <section className="w-full h-full max-w-4xl m-auto flex flex-col ">
          <Typography variant="h1" className="flex items-center text-center my-10">
            Twitter posts
          </Typography>
          <MainRouter />
        </section>
      </main>
    </>
  )
}

export default App
