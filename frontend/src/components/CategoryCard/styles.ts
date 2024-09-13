import styled from 'styled-components'

import { CategoryCardProps } from './interface'


export const Container = styled.div<CategoryCardProps>`
  background-image: ${props => props.backgroundImage ? `url(${props.backgroundImage})` : 'none'};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`
