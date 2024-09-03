import * as S from './styles'

const Body = () => {
  return (
    <S.Container>
      <S.LeftSide className='side'>
        <S.SideContainer className='left'>
          <S.ContentLeft>
            ADICIONAR CAROUSEL AQUI<br/>
            ADICIONAR CAROUSEL AQUI<br/>
            ADICIONAR CAROUSEL AQUI<br/>
          </S.ContentLeft>
        </S.SideContainer>
      </S.LeftSide>
      <S.RightSide className='side'>
        <S.SideContainer className='right'>
          <S.ContentRight>
            ADICIONAR CARDS DE CATEGORIAS AQUI<br/>
            ADICIONAR CARDS DE CATEGORIAS AQUI<br/>
            ADICIONAR CARDS DE CATEGORIAS AQUI<br/>
          </S.ContentRight>
        </S.SideContainer>
      </S.RightSide>
    </S.Container>

  )
}

export default Body