import { AppRoutes } from './routes'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import theme from './styles/theme'
import GlobalStyle from './GlobalStyle'
import Header from './components/header'
import { store } from './store'

function App () {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
            <Header />
            <AppRoutes />
          </ThemeProvider>
      </BrowserRouter>
    </Provider>
  )
}

export default App
