import styled from 'styled-components'

import { colors } from '../../variables/colors'
import { typography } from '../../variables/typography'
import { breakpoints } from '../../variables/breakpoints'

export const Countainer = styled.body`
    font-family: "Roboto Condensed", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #000;
`
export const Wrapper = styled.div `
    width: 450px;
    background: transparent;
    border: 2px solid ${colors.darkGrey};
    backdrop-filter: blur(30px);
    box-shadow: 0 0 10px rgba(0, 0, 0, .2);
    color: ${colors.white};
    border-radius: 10px;
    padding: 30px 40px;
    h1 {
        font-size: ${typography['title-M']};
        text-align: center;
    }
    @media screen and (max-width: ${breakpoints.mobile}) {
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
    input {
        width: 100%;
        height: 100%;
        background: transparent;
        outline: none;
        border: 2px solid ${colors.darkGrey};
        border-radius: 40px;
        font-size: ${typography['text-M']};
        color: ${colors.white};
        padding: 20px 45px 20px 20px;
    } input:focus {
        border: 2px solid ${colors.yellowOrange};
        color: ${colors.yellowOrange};
    } input::placeholder {
        color: ${colors.white};
    } .icon {
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
        font-size: ${typography['text-S']};
        color: ${colors.white};
    } input:focus ~ .icon {
        color: ${colors.yellowOrange};
    }
`
export const StyledBnt = styled.button `
    width: 100%;
    height: 45px;
    background: ${colors.white};
    border: none;
    outline: none;
    border-radius: 40px;
    box-shadow: 0 0 10px ${colors.black};
    cursor: pointer;
    font-size: ${typography['text-L']};
    color: ${colors.darkGrey};
    font-weight: 700;
    &:hover {
        background: ${colors.yellowOrange};
        color: ${colors.white};
        transition: .3s ease-in;
    }
`
export const Login = styled.div `
    font-size: ${typography['link-S']};
    text-align: center;
    margin: 20px 0 15px;
    p a {
        color: ${colors.white};
        text-decoration: none;
        font-weight: 600;
    } p a:hover {
        text-decoration: underline;
        color: ${colors.yellowOrange};
        transition: .3s ease-in;
    }
`
