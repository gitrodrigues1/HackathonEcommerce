import React, { useState } from 'react';
import LoginForm from '../components/FormLogin/FormLogin.tsx';
import SignUpForm from '../components/FormSignup/FormSignUp.tsx';

const Auth: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <>
            {isLogin ? (
                <LoginForm toggleForm={toggleForm} />
            ) : (
                <SignUpForm toggleForm={toggleForm} />
            )}
        </>
    );
};

export default Auth;