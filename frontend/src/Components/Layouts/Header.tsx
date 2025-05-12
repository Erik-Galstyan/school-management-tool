import { FC } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { useUser } from 'Hooks/useUser'
import { Button } from '@mui/material'
import { useApolloClient } from '@apollo/client'
import { useNavigate } from 'react-router-dom'
import logo from 'Assets/logo.png'
import { Link } from 'react-router-dom'

export const Header: FC = () => {
  const { user } = useUser()
  const client = useApolloClient()
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('token')
    client.clearStore()
    navigate('/login')
  }

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: 'white',
      }}
    >
      <Toolbar>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: 2,

              textDecoration: 'none',
            }}
            component={Link}
            to="/"
          >
            <img src={logo} alt="logo" height={50} />
            <Typography
              variant="h6"
              sx={{
                color: 'black',
              }}
            >
              School Management Tool
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              gap: 2,
            }}
          >
            {user && user.email && (
              <Typography
                variant="h6"
                sx={{
                  color: 'black',
                }}
              >
                {user.email}
              </Typography>
            )}
            {user && (
              <Button sx={{ color: 'black' }} onClick={logout}>
                Logout
              </Button>
            )}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
