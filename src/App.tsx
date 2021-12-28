import { AppRoutes } from './routes'
import { ThemeProvider } from 'styled-components'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import theme from './styles/theme'
import GlobalStyle from './GlobalStyle'
import Header from './components/header'
import { store } from './store'
import { history } from './services/history'

function App () {
  return (
    <Provider store={store}>
      <Router history={history} >
        <ThemeProvider theme={theme}>
          <GlobalStyle />
            <Header />
            <AppRoutes />
          </ThemeProvider>
      </Router>
    </Provider>
  )
}

export default App
