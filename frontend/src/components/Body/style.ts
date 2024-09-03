import styled from 'styled-components'

import { colors } from '../../variables/colors'

import convertPxToRem from '../../utils/convertPxToRem'
import { breakpoints } from '../../variables/breakpoints'


export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  .side {
    display: flex;
    align-items: center;
    padding: ${convertPxToRem(24)} 0;
  }
  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`

export const LeftSide = styled.div`
  background-color: ${colors.black};
  color: ${colors.white};
  justify-content: end;
  @media (max-width: ${breakpoints.tablet}) {
    justify-content: center;
  }
`

export const RightSide = styled.div`
  background-color: ${colors.yellowOrange};
  color: ${colors.black};
  justify-content: start;
  @media (max-width: ${breakpoints.tablet}) {
    justify-content: center;
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
    justify-content: end;
  }
  @media (max-width: ${breakpoints.desktop}) {
    width: 90%;
  }
`

export const ContentLeft = styled.div`
  padding-right: ${convertPxToRem(24)};
  font-family: 'Roboto Condensed', sans-serif;
  @media (max-width: ${breakpoints.tablet}) {
    padding-right: 0;
    grid-template-rows: 1fr 1fr;
  }
`

export const ContentRight = styled.div`
  padding-left: ${convertPxToRem(24)};
  font-family: 'Roboto Condensed', sans-serif;
  @media (max-width: ${breakpoints.tablet}) {
    padding-left: 0;
  }
`