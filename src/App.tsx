import React from 'react'
import { AppRoutes } from './routes'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import theme from './styles/theme'
import GlobalStyle from './GlobalStyle'

function App () {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
          <AppRoutes />
        </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
