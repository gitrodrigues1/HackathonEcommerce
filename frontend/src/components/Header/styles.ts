import styled from 'styled-components'

import { colors } from '../../variables/colors'
import { typography } from '../../variables/typography'
import { breakpoints } from '../../variables/breakpoints'

import convertPxToRem from '../../utils/convertPxToRem'

export const Container = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;

  .side {
    display: flex;
    align-items: center;
    padding: ${convertPxToRem(24)} 0;

    @media (max-width: ${breakpoints.desktop}) {
      padding: ${convertPxToRem(12)} 0;
    }

      ///////////////// VERIFICAR
    @media (max-width: ${breakpoints.tablet}) {
      padding: ${convertPxToRem(8)} 0;
    }
  }
`

export const LeftSide = styled.div`
  background-color: ${colors.white};
  justify-content: end;

  ///////////////// VERIFICAR
  @media (max-width: ${breakpoints.tablet}) {
    background-color: ${colors.darkGrey};
  }
`

export const RightSide = styled.div`
  background-color: ${colors.black};
  justify-content: start;
  z-index: 2;

  @media (max-width: ${breakpoints.tablet}) {
    background-color: ${colors.darkGrey};
  }
`

export const SideContainer = styled.div`
  max-width: ${convertPxToRem(560)};
  width: 100%;
  display: flex;

  .left {
    justify-content: start;
  }

  .right {
    justify-content: center;
  }

  @media (max-width: ${breakpoints.desktop}) {
    width: 90%;
  }
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    height: ${convertPxToRem(64)};

    ///////////////// VERIFICAR
    @media (max-width: ${breakpoints.tablet}) {
      height: ${convertPxToRem(44)};
    }
  }

  h1 {
    font-size: ${typography['button-M']};
    font-family: 'Onari', sans-serif;
    margin-left: ${convertPxToRem(8)};

    ///////////////// VERIFICAR
    @media (max-width: ${breakpoints.tablet}) {
      font-size: ${typography['button-S']};
      margin-left: ${convertPxToRem(4)};
    }
  }

  span {
    color: ${colors.yellowOrange};
    font-family: 'Onari', sans-serif;
  }

  ///////////////// VERIFICAR
  @media (max-width: ${breakpoints.tablet}) {
    background-color: ${colors.white};
    padding: ${convertPxToRem(12)} ${convertPxToRem(8)};
    border-radius: 50%;
  }
`

export const NavItem = styled.li`
  cursor: pointer;
  color: ${colors.white};
  font-size: ${typography['link-M']};

  a {
    position: relative;
    padding: 0 ${convertPxToRem(10)};
    font-family: 'New Amsterdam', sans-serif;

    &::after {
      content: "";
      position: absolute;
      background-color: ${colors.yellowOrange};
      height: ${convertPxToRem(3)};
      width: 0;
      left: 0;
      bottom: ${convertPxToRem(-8)};
      transition: 0.7s ease-out;
      border-radius: ${convertPxToRem(6)};
    }

    &:hover {
        color: ${colors.yellowOrange};
    }

    &:hover:after {
      width: 100%;
    }
  }

  @media (max-width: ${breakpoints.tabletBigger}) {
    font-size: ${typography['link-S']};
  }
`

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-left: ${convertPxToRem(16)};

  @media (max-width: ${breakpoints.tabletBigger}) {
    display: none;
  }
`

export const Button = styled.button`
  background: transparent;
  border: none;
  color: ${colors.white};
  font-size: ${typography['button-M']};
  font-family: 'New Amsterdam', sans-serif;
  border-radius: ${convertPxToRem(16)};
  padding: ${convertPxToRem(8)} ${convertPxToRem(16)};
  position: relative;
  overflow: hidden;
  transition: all 2s;
  backface-visibility: hidden;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${colors.black};
    border: ${convertPxToRem(2)} solid ${colors.white};
    border-radius: ${convertPxToRem(16)};
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
      z-index: 5;
    }
  }

  &:hover {
    span::before {
      transform: translate(-50%, -50%) rotate(-90deg);
      width: 100%;
      background: ${colors.yellowOrange};
    }
  }

  @media (min-width: ${breakpoints.tabletBigger}) {
    font-size: ${typography['button-S']};
  }
`

export const MobileContent = styled.div`
  display: none;
  pointer-events: none;
  position: relative;

  @media (max-width: ${breakpoints.tabletBigger}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    width: 100%;
    pointer-events: auto;
  }
`

export const MobileIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const MobileCart = styled.i`
  font-size: ${typography['button-M']};
  margin-right: ${convertPxToRem(32)};
  padding: ${convertPxToRem(4)} ${convertPxToRem(8)} ${convertPxToRem(4)} ${convertPxToRem(6)};
  background-color: ${colors.white};
  color: ${colors.black};
  border-radius: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: ${typography['button-S']};
  }
`

export const Hamburguer = styled.i`
  color: ${colors.white};
  font-size: ${typography['button-XL']};

  &.is-invisible {
    display: none;
  }

    ///////////////// VERIFICAR
  @media (max-width: ${breakpoints.tablet}) {
    font-size: ${typography['button-M']};
  }
`

export const NavMobile = styled.nav`
  font-size: ${typography['link-S']};
  max-height: 0;
  transition: max-height 0.8s ease-in-out;
  pointer-events: none;
  text-align: center;
  position: absolute;
  top: 100%;
  right: 0;

  a {
    display: block;
    color: ${colors.white};
    padding: ${convertPxToRem(4)} 0;
    opacity: 0;
    transition: all 0.3s ease;
    transform: translateY(${convertPxToRem(-30)});
  }

  &.is-open {
    max-height: ${convertPxToRem(200)};

    a {
      opacity: 1;
      transform: translateY(0);
      transition-delay: calc(0.15s * var(--i));
    }
  }

  ///////////////// VERIFICAR
  @media (max-width: ${breakpoints.tablet}) {
    padding-top: ${convertPxToRem(16)};
  }
`
