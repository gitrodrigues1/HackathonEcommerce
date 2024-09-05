import styled from 'styled-components'

import { colors } from '../../variables/colors'
import { breakpoints } from '../../variables/breakpoints'
import { typography } from '../../variables/typography'

import convertPxToRem from '../../utils/convertPxToRem'


export const Footer = styled.footer`
  width: 100%;
  height: 100%;
  background-color: ${colors.white};
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.white};
  padding: ${convertPxToRem(64)} 0 0;
  text-align: center;
  max-width: ${convertPxToRem(1120)};
  width: 100%;
  margin: 0 auto;

  @media (max-width: ${breakpoints.desktop}) {
    width: 90%;
    padding: ${convertPxToRem(32)} 0 0;
  }
`

export const ScrollUpButton = styled.button`
  font-family: 'Roboto Condensed', sans-serif;
  width: 100%;
  padding: 12px;
  border: 1px solid ${colors.black};
  border-left: none;
  border-right: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${convertPxToRem(32)};
  font-size: ${typography['button-XS']};
  font-weight: 300;
  transition: all .3s ease-in-out;
  cursor: pointer;

  &:hover {
    color: ${colors.yellowOrange};
    border-color: ${colors.yellowOrange};
  }

  i {
    font-size: ${typography['button-XS']};
    font-weight: lighter;
    vertical-align: middle;
  }

  span {
    margin-right: ${convertPxToRem(4)};
  }

  @media (max-width: ${breakpoints.desktop}) {
    margin-top: ${convertPxToRem(24)};
  }
`


export const InfosContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: ${breakpoints.desktop}) {
    flex-direction: column;
    justify-content: center;
  }
`

export const InfoWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  font-size: ${typography['text-S']};
  font-weight: 300;

  li {
    transition: transform .7s ease-in-out;
    margin-bottom: ${convertPxToRem(8)};
    font-family: 'Roboto Condensed', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;

    &:last-child {
      margin-bottom: 0;
    }

    h3 {
      font-family: 'Roboto Condensed', sans-serif;
      font-size: ${typography['text-M']};
      color: ${colors.yellowOrange};
      text-transform: uppercase;
    }

    span {
      margin-right: ${convertPxToRem(6)};
    }

    i {
      font-weight: 300;
      font-size: ${typography['text-L']};
      vertical-align: middle;
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    margin-bottom: 24px;
    width: 100%;
    align-items: center;

    &:last-child {
      margin-bottom: 0;
    }

    li {
      margin-bottom: ${convertPxToRem(4)};
    }
  }
`

export const SocialMedia = styled.ul`
  display: flex;
  justify-content: center;
  font-size: ${typography['text-XL']};
  color: ${colors.black};
  font-weight: 300;
  margin: ${convertPxToRem(32)};

  li {
    margin-right: ${convertPxToRem(24)};
    transition: transform .7s ease-in-out;

    &:hover {
      transform: scale(1.15);
      color: ${colors.yellowOrange};
    }

    &:last-child {
      margin-right: 0;
    }
  }

  a {
    cursor: pointer;
  }

  i {
    vertical-align: middle;
  }

  @media (max-width: ${breakpoints.desktop}) {
    font-size: ${typography['text-L']};
    margin: ${convertPxToRem(24)};
  }
`


export const Copyright = styled.p`
  display: flex;
  justify-content: center;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: ${typography['text-XS']};
  font-weight: 300;
  color: ${colors.white};
  background-color: ${colors.black};
  padding: ${convertPxToRem(16)};
  width: 100%;

  @media (max-width: ${breakpoints.desktop}) {
    flex-direction: column;
    align-items: center;

    .d-block {
      display: block;
    }
  }
`
