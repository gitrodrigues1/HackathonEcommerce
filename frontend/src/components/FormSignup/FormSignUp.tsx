import { useState } from "react"

import { FaUser, FaLock } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

import { Wrapper, InputBox, StyledBnt, Login } from "./FormSignUp.style"

interface SignupFormProps {
  toggleForm: () => void
}

const SingUpForm: React.FC<SignupFormProps> = ({ toggleForm }) => {
  interface Data {
      username: string;
      email: string;
      password: any;
      confirmPassword: any;
  }
  const [dataForm, setDataForm] = useState<Data>({
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
  })

  const handleChange = (event: any) => {
      setDataForm((dataForm) => ({...dataForm, [event.target.name]: event.target.value}));
  }

  const handleSubmit = (event: any) => {
      event.preventDefault()
      // Validar dados e enviar formulário
  }
    return (
        <Wrapper>
            <form action="POST" onSubmit={handleSubmit}>
                <h1>Cadastre-se</h1>
                <InputBox>
                    <input type="text" placeholder="Usuário" required onChange={handleChange}/>
                    <FaUser className="icon" />
                </InputBox>
                <InputBox>
                    <input type="text" placeholder="Email" required onChange={handleChange}/>
                    <MdEmail className="icon" />
                </InputBox>
                <InputBox>
                    <input type="password" placeholder="Senha" required onChange={handleChange}/>
                    <FaLock className="icon" />
                </InputBox>
                <InputBox>
                    <input type="password" placeholder="Confirme a senha" required onChange={handleChange}/>
                    <FaLock className="icon" />
                </InputBox>
                <StyledBnt type="submit">Cadastre-se</StyledBnt>
                <Login>
                    <p>Você já tem uma conta? <a href="#" onClick={(e) => { e.preventDefault(); toggleForm(); }}>Login</a></p>
                </Login>
            </form>
        </Wrapper>
    )
}

export default SingUpForm;
