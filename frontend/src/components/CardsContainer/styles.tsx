import styled from 'styled-components'

import convertPxToRem from '../../utils/convertPxToRem'


export const Container = styled.section`
  width: 100%;
  height: ${convertPxToRem(360)};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
`
