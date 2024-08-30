import { FaUser, FaLock } from "react-icons/fa";
import './FormLogin.css';

interface LoginFormProps {
    toggleForm: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ toggleForm }) => {
    return(
        <div className="wrapper">
            <form action="POST">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Usuário" required/>
                    <FaUser className="icon" />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Senha" required/>
                    <FaLock className="icon" />
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox"/> Me lembre</label>
                    <a href="#">Esqueceu a senha?</a>
                </div>
                <button type="submit">Login</button>
                <div className="register-link">
                    <p>Não tem uma conta? <a href="#" onClick={(e) => { e.preventDefault(); toggleForm(); }}>Cadastre-se</a></p>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;