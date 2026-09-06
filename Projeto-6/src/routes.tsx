import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/profile/:id',
    element: <Profile />
  }
])

export default routes
