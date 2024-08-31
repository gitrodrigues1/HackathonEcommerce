import styled from 'styled-components'

import { colors } from '../../styles'
import { HeroProps } from './interface'

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  width: 100%;
  font-size: 18px;
  height: calc(100vh - 112px);
  overflow: hidden;

  .side {
    padding: 48px 122px;
    height: 460px;
  }
`

export const LeftSide = styled.div`
  background-color: ${colors.white};
`

export const RightSide = styled.div`
  background-color: ${colors.black};
  position: relative;
`

export const Image = styled.img`
  height: 640px;
  position: absolute;
  transform: translate(-30%, -8%);
`

export const Content = styled.div`
  max-width: 520px;
`

export const Title = styled.h1`
  font-size: 60px;
  font-weight: bold;
  font-family: 'New Amsterdam', sans-serif;

  span {
    color: ${colors.yellowOrange};
  }
`

export const Link = styled.a<HeroProps>`
  padding: 16px 32px;
  font-size: 24px;
  font-family: 'Roboto Condensed', sans-serif;
  display: block;
  border-radius: 24px;
  max-width: 248px;
  margin-top: 32px;
  text-align: center;
  color: ${colors.white};
  background-color: ${props => props.variant === 'black' ? colors.black : colors.yellowOrange};
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;

  i {
    margin-left: 8px;
  }
`

export const Phrase = styled.p`
  font-size: 22px;
  font-family: 'Roboto Condensed', sans-serif;
  margin-top: 32px;
  text-align: justify;
`
