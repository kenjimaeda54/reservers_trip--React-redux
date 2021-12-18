import { AppRoutes } from './routes'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import theme from './styles/theme'
import GlobalStyle from './GlobalStyle'
import Header from './components/header'

function App () {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
          <Header />
          <AppRoutes />
        </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
