import * as S from './styles'

import logo from '../../assets/images/logo.png'

export const Header = () => {
  return (
    <S.Container>
        <S.LeftSide className='side'>
          <S.Logo>
            <img src={logo} alt="SushiHub Logo" />
            <h1>Sushi<span>Hub</span></h1>
          </S.Logo>
        </S.LeftSide>
        <S.RightSide className='side'>
          <S.NavBar>
            <S.NavItem><a>Home</a></S.NavItem>
            <S.NavItem><a>Menu</a></S.NavItem>
            <S.NavItem><a>Contato</a></S.NavItem>
            <S.NavItem>
              <button>
                Carrinho - <i className='bx bx-cart'></i>
                <span />
              </button>
            </S.NavItem>
          </S.NavBar>
        </S.RightSide>
    </S.Container>
  )
}

export default Header
