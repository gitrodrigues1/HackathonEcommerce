import styled from 'styled-components'

export const Wrapper = styled.div `
    width: 450px;
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
    }
    @media screen and (max-width: 425px) {
        & {
            width: 100%;
        }
    }
`
export const InputBox = styled.div `
    position: relative;
    width: 100%;
    height: 50px;
    margin: 30px 0;
    & input {
        width: 100%;
        height: 100%;
        background: transparent;
        outline: none;
        border: 2px solid rgba(255, 255, 255, .2);
        border-radius: 40px;
        font-size: 1rem;
        color: #fff;
        padding: 20px 45px 20px 20px;
    } & input:focus {
        border: 2px solid #FA9813;
        color: #FA9813;
    } & input::placeholder {
        color: #fff;
    } & .icon {
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
        font-size: 1rem;
        color: #fff;
    } & input:focus ~ .icon {
        color: #FA9813;
    } 
`
export const StyledBnt = styled.button `
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
    &:hover {
        background: #FA9813;
        color: #fff;
        transition: .3s ease-in;
    } 
`
export const Login = styled.div `
    font-size: 0.906;
    text-align: center;
    margin: 20px 0 15px;
    & p a {
        color: #fff;
        text-decoration: none;
        font-weight: 600;
    } & p a:hover {
        text-decoration: underline;
        color: #FA9813;
        transition: .3s ease-in;
    }
`