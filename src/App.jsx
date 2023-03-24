import './index.css'
import Home from './pages/home'
import { AuthProvider } from './context/auth/authProvider'
import { Routes, Route } from 'react-router-dom'
import { PrivateRoute } from './routes/PrivateRoute'
import Login from './pages/login'

function App() {
  return (
    <AuthProvider>
      <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
        Twitter posts
      </h1>
      <Routes>
        <Route
          path='/home'
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path='/login' element={<Login />} />
      </Routes>
    </AuthProvider>
  )
}

export default App
