import * as S from './styles'

import Carousel from '../Carousel'
import CardsContainer from '../CardsContainer'

const Body = () => {
  return (
    <S.Container>
      <S.LeftSide className='side'>
        <S.SideContainer className='left'>
          <S.ContentLeft>
            <Carousel />
          </S.ContentLeft>
        </S.SideContainer>
      </S.LeftSide>
      <S.RightSide className='side'>
        <S.SideContainer className='right'>
          <S.ContentRight>
            <CardsContainer />
          </S.ContentRight>
        </S.SideContainer>
      </S.RightSide>
    </S.Container>

  )
}

export default Body
