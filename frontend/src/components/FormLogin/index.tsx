import { FaUser, FaLock } from "react-icons/fa";
import * as T from "./style";

interface LoginFormProps {
    toggleForm: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ toggleForm }) => {
    return(
        <T.Countainer>
            <T.Wrapper>
                <form action="POST">
                    <h1>Login</h1>
                    <T.InputBox>
                        <input type="text" placeholder="Usuário" required />
                        <FaUser className="icon" />
                    </T.InputBox>
                    <T.InputBox>
                        <input type="password" placeholder="Senha" required />
                        <FaLock className="icon" />
                    </T.InputBox>
                    <T.Remember>
                        <a href="#">Esqueceu a senha?</a>
                    </T.Remember>
                    <T.StyledBnt type="submit">Login</T.StyledBnt>
                    <T.Register>
                        <p>Não tem uma conta? <a href="#" onClick={(e) => { e.preventDefault(); toggleForm(); }}>Cadastre-se</a></p>
                    </T.Register>
                </form>
            </T.Wrapper>
        </T.Countainer>
    );
};

export default LoginForm;