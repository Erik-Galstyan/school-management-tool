import { FC, ReactElement, useEffect } from 'react'
import { useUser } from 'Hooks/useUser'
import { useNavigate } from 'react-router-dom'

interface NoAuthGuardProps {
  render: () => ReactElement
}

export const NoAuthGuard: FC<NoAuthGuardProps> = (props) => {
  const { render } = props
  const { user, loading } = useUser()
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [user, navigate])

  if (!user && !loading) {
    return render()
  }

  return null
}
