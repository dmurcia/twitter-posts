import React from 'react'
import './index.css'
import { MainRouter } from './routes'

const App: React.FC = () => (
  <>
    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
      Twitter posts
    </h1>
    <main className="w-full max-w-4xl m-auto flex flex-col">
      <MainRouter />
    </main>
  </>
)

export default App
