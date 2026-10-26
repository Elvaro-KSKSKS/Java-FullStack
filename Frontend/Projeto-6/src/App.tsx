import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import { GlobalStyle } from './styles'

import routes from './routes'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <RouterProvider router={routes} />
    </Provider>
  )
}

export default App
