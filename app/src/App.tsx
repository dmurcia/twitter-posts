import React from 'react'
import './index.css'
import Home from './pages/home'
import Login from './pages/login'
import PrivateRoute from './routes/PrivateRoute'
import { AuthProvider } from './context/auth/authProvider'
import { Routes, Route } from 'react-router-dom'
import { routes } from './config'

const App: React.FC = () => (
  <AuthProvider>
    <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
      Twitter posts
    </h1>
    <Routes>
      <Route
        path={routes.home}
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route path={routes.login} element={<Login />} />
    </Routes>
  </AuthProvider>
)

export default App
