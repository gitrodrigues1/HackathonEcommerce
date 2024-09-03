import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    justify-content: center;
    width: 350px;
    height: 300px;
    position: relative;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0 35px 80px rgba(0, 0, 0, 0.15);
    transition: .5s;
    font-family: "Roboto Condensed", system-ui;
    &:hover {
        height: 400px;
    } &:hover .img-box {
        top: -80px;
        scale: 0.75;
    } &:hover .content {
        top: 160px;
        height: 295px;
    } 
`
export const ImageBox = styled.div`
    position: absolute;
    width: 100%;
    height: auto;
    top: 0;
    transition: .5s;
    img {
        width: 100%;
        height: 250px;
        border-radius: 20px;
    }   
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
    position: absolute;
    top: 255px;
    width: 100%;
    padding: 0 30px;
    text-align: center;
    height: 30px;
    overflow: hidden;
    transition: .5s;
    h2 {
        font-size: 1.7rem;
        font-family: "New Amsterdam", system-ui;
    } p {
        font-size: 1.05rem;
        line-height: 1.2rem;
        text-align: justify;
        text-indent: 2rem;
    }    
`
export const Carrinho = styled.a`
    background: #FA9813;
    padding: 12px;
    color: #fff;
    text-decoration: none;
    position: relative;
    border-radius: 8px;
    transition: .5s all ease-in-out;
    cursor: pointer;
    font-size: 1.1rem;
    .icon {
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
        font-size: 1.2rem;
        color: #fff;
    }&:hover {
        transform: scale(1.15);
        background: #F5EE9E;
        color: #191919;
    } &:hover .icon {
        color: #191919;
    }
`