import styled from 'styled-components'

import { colors } from '../../variables/colors'
import { typography } from '../../variables/typography'
import { breakpoints } from '../../variables/breakpoints'

import convertPxToRem from '../../utils/convertPxToRem'

import { HeroProps } from './interface'



export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 2fr;
  width: 100%;
  min-height: 85vh;
  overflow: hidden;
  .side {
    display: flex;
    align-items: center;
    @media (max-width: ${breakpoints.tablet}) {
      align-items: start;
    }
  }
  @media (min-width: ${breakpoints.tabletBigger}) and (max-width: ${breakpoints.desktop}) {
    grid-template-rows: ${convertPxToRem(400)} ${convertPxToRem(150)};
    min-height: 30vh;
  }
  @media (max-width: ${breakpoints.tabletBigger}) {
    grid-template-rows: ${convertPxToRem(300)} ${convertPxToRem(100)};
    min-height: 57vh;
  }
  ///////////////// VERIFICAR
  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: auto;
    grid-template-rows: 1fr ${convertPxToRem(300)};
    position: relative;
  }
`

export const LeftSide = styled.div`
  padding: ${convertPxToRem(48)} 0 ${convertPxToRem(0)};
  background-color: ${colors.white};
  justify-content: end;
  ///////////////// VERIFICAR
  @media (max-width: ${breakpoints.tablet}) {
    background-color: ${colors.black};
    padding: ${convertPxToRem(100)} 0 ${convertPxToRem(24)};
    justify-content: center;
    z-index: 1;
    background-color: transparent;
  }
`

export const RightSide = styled.div`
  background-color: ${colors.black};
  justify-content: start;
  ///////////////// VERIFICAR
  @media (max-width: ${breakpoints.tablet}) {
    padding: ${convertPxToRem(24)} 0;
    justify-content: center;
    z-index: 1;
    background-color: transparent;
  }
`

export const SideContainer = styled.div`
  max-width: ${convertPxToRem(560)};
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  height: ${convertPxToRem(495)};
  @media (max-width: ${breakpoints.desktop}) {
    width: 90%;
  }
  ///////////////// VERIFICAR
  @media (max-width: ${breakpoints.tablet}) {
    position: static;
    align-items: flex-start;
    justify-content: center;
    height: auto;
  }
`

export const Image = styled.img`
  height: ${convertPxToRem(656)};
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  transform: translate(1%, -3%);
  @media (min-width: ${breakpoints.tabletBigger}) and (max-width: ${breakpoints.desktop}) {
    height: ${convertPxToRem(500)};
    transform: translate(-2%, 15%);
  }
  @media (max-width: ${breakpoints.tabletBigger}) {
    height: ${convertPxToRem(415)};
    transform: translate(1%, 30%);
  }
  ///////////////// VERIFICAR
  @media (max-width: ${breakpoints.tablet}) {
    position: static;
    height: ${convertPxToRem(260)};
    display: block;
    margin: auto;
    transform: translate(0, 0);
  }
`

export const Content = styled.div`
  max-width: ${convertPxToRem(416)};
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  @media (max-width: ${breakpoints.desktop}) {
    transform: translate(0, 20%);
    max-width: ${convertPxToRem(300)};
  }
  @media (max-width: ${breakpoints.tabletBigger}) {
    transform: translate(0%, 45%);
    max-width: ${convertPxToRem(240)};
  }
  ///////////////// VERIFICAR
  @media (max-width: ${breakpoints.tablet}) {
    position: static;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translate(0, 0);
    max-width: 80%;
  }
`

export const Title = styled.h1`
  font-size: ${typography['title-XL']};
  font-weight: bold;
  font-family: 'New Amsterdam', sans-serif;
  span {
    color: ${colors.yellowOrange};
  }
  @media (max-width: ${breakpoints.desktop}) {
    font-size: ${typography['title-M']};
  }
  @media (max-width: ${breakpoints.tabletBigger}) {
    font-size: ${typography['title-S']};
  }
  ///////////////// VERIFICAR
  @media (max-width: ${breakpoints.tablet}) {
    color: ${colors.white};
    font-size: ${typography['title-M']};
    text-align: center;
  }
`

export const Link = styled.a<HeroProps>`
  display: block;
  padding: ${convertPxToRem(16)} 0;
  font-size: ${typography['link-M']};
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: bold;
  color: ${colors.white};
  text-align: center;
  text-transform: uppercase;
  border-radius: ${convertPxToRem(24)};
  max-width: ${convertPxToRem(248)};
  margin-top: ${convertPxToRem(32)};
  background-color: ${props => props.$variant === 'black' ? colors.black : colors.yellowOrange};
  cursor: pointer;
  transition: all .7s ease-in-out;
  i {
    margin-left: ${convertPxToRem(8)};
  }
  @media (max-width: ${breakpoints.desktop}) {
    max-width: ${convertPxToRem(210)};
    font-size: ${typography['link-S']};
    padding: ${convertPxToRem(12)} 0;
    margin-top: ${convertPxToRem(24)};
  }
  @media (max-width: ${breakpoints.tabletBigger}) {
    max-width: ${convertPxToRem(170)};
    margin-top: ${convertPxToRem(16)};
    font-size: ${typography['link-XS']};
    padding: ${convertPxToRem(8)} 0;
  }
  ///////////////// VERIFICAR
  @media (max-width: ${breakpoints.tablet}) {
    max-width: none;
    background-color: ${colors.yellowOrange};
    padding: ${convertPxToRem(4)} ${convertPxToRem(24)};
    font-size: ${typography['link-XS']};
    margin-top: ${convertPxToRem(24)};
  }
`

export const Phrase = styled.p`
  font-size: ${typography['text-L']};
  margin-top: ${convertPxToRem(32)};
  text-align: justify;
  @media (max-width: ${breakpoints.desktop}) {
    font-size: ${typography['text-M']};
    margin-top: ${convertPxToRem(24)};
  }
  @media (max-width: ${breakpoints.tabletBigger}) {
    font-size: ${typography['text-S']};
    margin-top: ${convertPxToRem(16)};
  }
  ///////////////// VERIFICAR
  @media (max-width: ${breakpoints.tablet}) {
    font-size: ${typography['text-S']};
    color: ${colors.white};
    text-align: center;
    font-family: 'Roboto Condensed', sans-serif;
    margin-top: ${convertPxToRem(24)};
  }
`


export const GridOverlay = styled.div`
  display: none;
  @media (max-width: ${breakpoints.tablet}) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 0;
    background: linear-gradient(to bottom, ${colors.darkGrey} 0%, ${colors.black} 80%);
    pointer-events: none;
    height: 100%;
    width: 100%;
  }
`