import { useState } from 'react'

import LoginForm from '../components/FormLogin/index.tsx'
import SignUpForm from '../components/FormSignup/index.tsx'

const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true)

  const toggleForm = () => {
      setIsLogin(!isLogin);
  }

  return (
      <>
          {isLogin ? (
              <LoginForm toggleForm={toggleForm} />
          ) : (
              <SignUpForm toggleForm={toggleForm} />
          )}
      </>
  )
}

export default Auth
