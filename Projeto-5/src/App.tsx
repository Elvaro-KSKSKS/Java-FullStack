import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import GlobalStyle, { Centralizer, Container } from './styles'

import store from './store'

import Home from './pages/Home'
import Register from './pages/Register'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/new',
    element: <Register />
  }
])

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Centralizer>
        <Container>
          <RouterProvider router={routes} />
        </Container>
      </Centralizer>
    </Provider>
  )
}

export default App
