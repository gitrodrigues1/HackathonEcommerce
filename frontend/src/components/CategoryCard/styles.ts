import styled from 'styled-components'

import { CategoryCardProps } from './interface'

import { colors } from '../../variables/colors'
import convertPxToRem from '../../utils/convertPxToRem'


export const Container = styled.div<CategoryCardProps>`
  background-image: ${props => props.backgroundImage ? `url(${props.backgroundImage})` : 'none'};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 1px solid ${colors.white};
`

export const TitleContainer = styled.div<CategoryCardProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.9s ease;
  height: ${convertPxToRem(54)};
  width: ${convertPxToRem(148)};
  cursor: pointer;

  h1 {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 24px;
    color: ${colors.white};
    letter-spacing: ${convertPxToRem(2)};
    padding: ${convertPxToRem(8)} ${convertPxToRem(16)};
    padding: ${props => props.children ? `${convertPxToRem(8)} ${convertPxToRem(16)}` : 0};
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: ${convertPxToRem(8)};
    transition: all 0.5s ease;
  }

  &:hover {
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);

    h1 {
      background-color: transparent;
    }
  }
`

export const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
