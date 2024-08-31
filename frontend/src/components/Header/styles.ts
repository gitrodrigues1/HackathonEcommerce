import styled from 'styled-components'

import { colors } from '../../styles'

export const Container = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  font-size: 18px;

  .side {
    padding: 24px 122px;
  }
`

export const LeftSide = styled.div`
  background-color: ${colors.white};
`

export const RightSide = styled.div`
  background-color: ${colors.black};
  position: relative;
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    height: 64px;
  }

  h1 {
    font-size: 32px;
    font-family: 'Onari', sans-serif;
    margin-left: 8px;
  }

  span {
    color: ${colors.yellowOrange};
    font-family: 'Onari', sans-serif;
  }
`

export const NavItem = styled.li`
  cursor: pointer;
  color: ${colors.white};

  a {
    position: relative;
    padding: 0 10px;
    font-family: 'New Amsterdam', sans-serif;

    &::after {
      content: "";
      position: absolute;
      background-color: ${colors.yellowOrange};
      height: 3px;
      width: 0;
      left: 0;
      bottom: -8px;
      transition: 0.7s ease-out;
      border-radius: 6px;
    }

    &:hover {
        color: ${colors.yellowOrange};
    }

    &:hover:after {
      width: 100%;
    }
  }

  &:first-child a {
    color: ${colors.black};

    &:hover {
        color: ${colors.yellowOrange};
    }
  }
`

export const NavBar = styled.ul`
  width: 720px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 28px;
  position: absolute;
  top: 50%;
  transform: translate(-15%, -50%);
  left: 0;

  button {
    background: transparent;
    border: none;
    color: ${colors.white};
    font-size: 28px;
    font-family: 'New Amsterdam', sans-serif;
    border-radius: 16px;
    padding: 8px 16px;
    position: relative;
    overflow: hidden;
    transition: all 2s;
    backface-visibility: hidden;
    cursor: pointer;

    span {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: ${colors.black};
      border: 2px solid ${colors.white};
      border-radius: 16px;
      z-index: -1;
      will-change: transform;

      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 8%;
        height: 500%;
        background: ${colors.black};
        transform: translate(-50%, -50%) rotate(-60deg);
        transition: all .7s ease-in;
        z-index: 1;
      }
    }

    &:hover {
      span::before {
        transform: translate(-50%, -50%) rotate(-90deg);
        width: 100%;
        background: ${colors.yellowOrange};
      }
    }
  }
`


