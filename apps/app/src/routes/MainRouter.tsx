import Home from '../pages/home'
import Login from '../pages/login'
import PrivateRoute from '../routes/PrivateRoute'
import { Routes, Route } from 'react-router-dom'
import { routes } from '../config'

const MainRouter: React.FC = () => (
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
)

export default MainRouter
