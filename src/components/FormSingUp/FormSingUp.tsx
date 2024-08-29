import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './FormSingUp.css';

interface SignupFormProps {
    toggleForm: () => void;
}

const SingUpForm: React.FC<SignupFormProps> = ({ toggleForm }) => {
    return(
        <div className="wrapper">
            <form action="POST">
                <h1>Sing up</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required/>
                    <FaUser className="icon" />
                </div>
                <div className="input-box">
                    <input type="text" placeholder="Email" required/>
                    <MdEmail className="icon" />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required/>
                    <FaLock className="icon" />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Confirm password" required/>
                    <FaLock className="icon" />
                </div>
                <button type="submit">Sing Up</button>
                <div className="register-link">
                    <p>Do you have an account? <a href="#" onClick={(e) => { e.preventDefault(); toggleForm(); }}>Login</a></p>
                </div>
            </form>
        </div>
    );
};

export default SingUpForm;