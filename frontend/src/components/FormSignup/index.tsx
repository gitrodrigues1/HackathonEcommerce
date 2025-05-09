import { FaUser, FaLock } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

import * as T from "./style"

interface SignupFormProps {
  toggleForm: () => void
}

const SingUpForm: React.FC<SignupFormProps> = ({ toggleForm }) => {
    return (
        <T.Countainer>
            <T.Wrapper>
                <form action="POST">
                    <h1>Cadastre-se</h1>
                    <T.InputBox>
                        <input type="text" placeholder="Usuário" required/>
                        <FaUser className="icon" />
                    </T.InputBox>
                    <T.InputBox>
                        <input type="text" placeholder="Email" required/>
                        <MdEmail className="icon" />
                    </T.InputBox>
                    <T.InputBox>
                        <input type="password" placeholder="Senha" required/>
                        <FaLock className="icon" />
                    </T.InputBox>
                    <T.InputBox>
                        <input type="password" placeholder="Confirme a senha" required/>
                        <FaLock className="icon" />
                    </T.InputBox>
                    <T.StyledBnt type="submit">Cadastre-se</T.StyledBnt>
                    <T.Login>
                        <p>Você já tem uma conta? <a href="#" onClick={(e) => { e.preventDefault(); toggleForm(); }}>Login</a></p>
                    </T.Login>
                </form>
            </T.Wrapper>
        </T.Countainer>
    )
}

export default SingUpForm;
