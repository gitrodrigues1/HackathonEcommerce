import styled from 'styled-components'

export const Wrapper = styled.div `
    width: 420px;
    background: transparent;
    border: 2px solid rgba(255, 255, 255, .2);
    backdrop-filter: blur(30px);
    box-shadow: 0 0 10px rgba(0, 0, 0, .2);
    color: #fff;
    border-radius: 10px;
    padding: 30px 40px;
    & h1 {
        font-size: 2.25rem;
        text-align: center;
    } & .input-box {
        position: relative;
        width: 100%;
        height: 50px;
        margin: 30px 0;
    } & .input-box input {
        width: 100%;
        height: 100%;
        background: transparent;
        outline: none;
        border: 2px solid rgba(255, 255, 255, .2);
        border-radius: 40px;
        font-size: 1rem;
        color: #fff;
        padding: 20px 45px 20px 20px;
    } & .input-box input:focus {
        border: 2px solid #FA9813;
        color: #FA9813;
    } & .input-box input::placeholder {
        color: #fff;
    } & .input-box .icon {
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
        font-size: 1rem;
        color: #fff;
    } & .input-box input:focus ~ .icon {
        color: #FA9813;
    } & button {
        width: 100%;
        height: 45px;
        background: #fff;
        border: none;
        outline: none;
        border-radius: 40px;
        box-shadow: 0 0 10px rgba(0, 0, 0, .1);
        cursor: pointer;
        font-size: 1rem;
        color: #333;
        font-weight: 700;
    } & button:hover {
        background: #FA9813;
        color: #fff;
        transition: .3s ease-in;
    } & .register-link {
        font-size: 0.906;
        text-align: center;
        margin: 20px 0 15px;
    } & .register-link p a {
        color: #fff;
        text-decoration: none;
        font-weight: 600;
    } & .register-link p a:hover {
        text-decoration: underline;
        color: #FA9813;
        transition: .3s ease-in;
    }
`