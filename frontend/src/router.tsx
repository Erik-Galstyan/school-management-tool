import { createBrowserRouter } from 'react-router-dom'

import { DashboardPage } from 'Pages/DashboardPage'
import { LoginPage } from 'Pages/LoginPage'

import { AdminGuard } from 'Guards/AdminGuard'
import { NoAuthGuard } from 'Guards/NoAuthGuard'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AdminGuard render={() => <DashboardPage />} />,
  },
  {
    path: '/login',
    element: <NoAuthGuard render={() => <LoginPage />} />,
  },
])
