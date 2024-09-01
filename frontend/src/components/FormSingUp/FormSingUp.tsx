import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Wrapper } from "./FormSingUp.style"; 

interface SignupFormProps {
    toggleForm: () => void;
}

const SingUpForm: React.FC<SignupFormProps> = ({ toggleForm }) => {
    return(
        <Wrapper>
            <form action="POST">
                <h1>Cadastre-se</h1>
                <div className="input-box">
                    <input type="text" placeholder="Usuário" required/>
                    <FaUser className="icon" />
                </div>
                <div className="input-box">
                    <input type="text" placeholder="Email" required/>
                    <MdEmail className="icon" />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Senha" required/>
                    <FaLock className="icon" />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Confirme a senha" required/>
                    <FaLock className="icon" />
                </div>
                <button type="submit">Cadastre-se</button>
                <div className="register-link">
                    <p>Você já tem uma conta? <a href="#" onClick={(e) => { e.preventDefault(); toggleForm(); }}>Login</a></p>
                </div>
            </form>
        </Wrapper>
    );
};

export default SingUpForm;