import styled from 'styled-components'

import { colors } from '../../variables/colors'
import { typography } from '../../variables/typography'

import { CarouselProps } from './interface'

import convertPxToRem from '../../utils/convertPxToRem'


export const Container = styled.section`
  width: 100%;
  height: ${convertPxToRem(360)};
  position: relative;
`

export const Image = styled.img<CarouselProps>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: ${props => props.$isActive ? 'inline' : 'none'};
`

export const Arrow = styled.a<CarouselProps>`
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: ${props => props.$variant === 'prev' ? convertPxToRem(8) : 'auto'};
  right: ${props => props.$variant === 'next' ? convertPxToRem(8) : 'auto'};
  padding: ${convertPxToRem(8)} ${convertPxToRem(8)} ${convertPxToRem(6)};
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.7);
  transform: translateY(-50%);
  z-index: 1;
  transition: all .6s ease;

  i {
    color: ${colors.white};
    font-size: ${typography['text-L']};
    line-height: 1;
    transition: all .6s ease;
  }

  &:hover {
    transform: scale(1.03) translateY(-50%);

    i {
      color: ${colors.yellowOrange};
    }
  }
`

export const DotContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: transparent;
`

export const Dot = styled.span<CarouselProps>`
  cursor: pointer;
  height: ${convertPxToRem(16)};
  width: ${convertPxToRem(16)};
  margin: 0 ${convertPxToRem(6)} ${convertPxToRem(8)};
  background-color: ${(props) => (props.$isActive ? colors.yellowOrange : colors.white)};
  border-radius: 50%;
  display: inline-block;
  transition: transform .3s ease;

  &:hover {
    transform: scale(1.1);
  }
`
