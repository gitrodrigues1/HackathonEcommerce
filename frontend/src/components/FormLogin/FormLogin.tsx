import { FaUser, FaLock } from "react-icons/fa";
import { Wrapper, InputBox, Remember, StyledBnt, Register } from "./FormLogin.style";

interface LoginFormProps {
    toggleForm: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ toggleForm }) => {
    return(
        <Wrapper>
            <form action="POST">
                <h1>Login</h1>
                <InputBox>
                    <input type="text" placeholder="Usuário" required/>
                    <FaUser className="icon" />
                </InputBox>
                <InputBox>
                    <input type="password" placeholder="Senha" required/>
                    <FaLock className="icon" />
                </InputBox>
                <Remember>
                    <a href="#">Esqueceu a senha?</a>
                </Remember>
                <StyledBnt type="submit">Login</StyledBnt>
                <Register>
                    <p>Não tem uma conta? <a href="#" onClick={(e) => { e.preventDefault(); toggleForm(); }}>Cadastre-se</a></p>
                </Register>
            </form>
        </Wrapper>
    );
};

export default LoginForm;