import { useState } from 'react'

import * as S from './styles'

import logo from '../../assets/images/logo.png'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <S.Container>
        <S.LeftSide className='side'>
          <S.SideContainer className='left'>
            <S.Logo>
              <img src={logo} alt="SushiHub Logo" />
              <h1>Sushi<span>Hub</span></h1>
            </S.Logo>
          </S.SideContainer>
        </S.LeftSide>
        <S.RightSide className='side'>
          <S.SideContainer>
            <S.NavBar>
              <S.NavItem><a>Home</a></S.NavItem>
              <S.NavItem><a>Cardápio</a></S.NavItem>
              <S.NavItem><a>Contato</a></S.NavItem>
              <S.NavItem>
                <S.Button>
                  Carrinho - <i className='bx bx-cart'></i>
                  <span />
                </S.Button>
              </S.NavItem>
            </S.NavBar>
            <S.MobileContent>
              <S.MobileIcons>
                <S.MobileCart className='bx bx-cart'></S.MobileCart>
                <S.Hamburguer className={`bx bx-menu ${isMenuOpen ? 'is-invisible' : ''}`} onClick={handleMenuToggle}></S.Hamburguer>
                <S.Hamburguer className={`bx bx-x ${isMenuOpen ? '' : 'is-invisible'}`} onClick={handleMenuToggle}></S.Hamburguer>
              </S.MobileIcons>
              <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
                    <a href='#' style={{ '--i': '1' } as React.CSSProperties}>Home</a>
                    <a href='#' style={{ '--i': '2' } as React.CSSProperties}>Cardápio</a>
                    <a href='#' style={{ '--i': '3' } as React.CSSProperties}>Contato</a>
                </S.NavMobile>
            </S.MobileContent>
          </S.SideContainer>
        </S.RightSide>
    </S.Container>
  )
}

export default Header
