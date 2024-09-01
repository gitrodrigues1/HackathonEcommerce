import React, { useState } from 'react';
import LoginForm from '../FormLogin/FormLogin.tsx';
import SignUpForm from '../FormSignUp/FormSignUp.tsx';

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