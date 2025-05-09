import React from 'react'
import ReactDOM from 'react-dom/client'
import { apolloClient } from 'Api/apolloClient'
import { ApolloProvider } from '@apollo/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ApolloProvider client={apolloClient}>
        <RouterProvider router={router} />
      </ApolloProvider>
    </ThemeProvider>
  </React.StrictMode>
)
