import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Wrapper, InputBox, StyledBnt, Login } from "./FormSignUp.style"; 

interface SignupFormProps {
    toggleForm: () => void;
}

const SingUpForm: React.FC<SignupFormProps> = ({ toggleForm }) => {
    return(
        <Wrapper>
            <form action="POST">
                <h1>Cadastre-se</h1>
                <InputBox className="input-box">
                    <input type="text" placeholder="Usuário" required/>
                    <FaUser className="icon" />
                </InputBox>
                <InputBox className="input-box">
                    <input type="text" placeholder="Email" required/>
                    <MdEmail className="icon" />
                </InputBox>
                <InputBox className="input-box">
                    <input type="password" placeholder="Senha" required/>
                    <FaLock className="icon" />
                </InputBox>
                <InputBox className="input-box">
                    <input type="password" placeholder="Confirme a senha" required/>
                    <FaLock className="icon" />
                </InputBox>
                <StyledBnt type="submit">Cadastre-se</StyledBnt>
                <Login>
                    <p>Você já tem uma conta? <a href="#" onClick={(e) => { e.preventDefault(); toggleForm(); }}>Login</a></p>
                </Login>
            </form>
        </Wrapper>
    );
};

export default SingUpForm;