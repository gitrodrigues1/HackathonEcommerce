import { FaUser, FaLock } from "react-icons/fa";
import { Wrapper, InputBox, Remember, StyledBnt, Register } from "./FormLogin.style";
import { useState } from "react";

interface LoginFormProps {
    toggleForm: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ toggleForm }) => {
    interface Data {
        username: string;
        password: any;
    }
    const [dataForm, setDataForm] = useState<Data>({
        username: "",
        password: ""
    });

    const handleChange = (event: any) => {
        setDataForm((dataForm) => ({...dataForm, [event.target.name]: event.target.value}));
    }

    const handleSubmit = (event: any) => {
        event.preventDefault()
        // Validar dados e enviar formulário
    }

    return(
        <Wrapper>
            <form action="POST" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <InputBox>
                    <input type="text" placeholder="Usuário" required onChange={handleChange}/>
                    <FaUser className="icon" />
                </InputBox>
                <InputBox>
                    <input type="password" placeholder="Senha" required onChange={handleChange}/>
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