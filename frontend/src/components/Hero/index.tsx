import * as S from './styles'
import { Link } from 'react-router-dom'
import banner from '../../assets/images/banner3.png'

const Hero = () => {
  return (
    <S.Container>
        <S.LeftSide className='side'>
          <S.SideContainer>
            <S.Content>
              <S.Title>Seja bem-vindo, Fulano</S.Title>
              <Link to={"/menu"}>
                <S.Link $variant='orange'>Menu<i className='bx bxs-right-arrow'></i></S.Link>
              </Link>
              <S.Link $variant='black'>Fale conosco<i className='bx bxl-whatsapp'></i></S.Link>
              <S.Phrase>
                Desfrute de uma experiência única com pratos feitos com ingredientes frescos, sabores autênticos e técnicas tradicionais que celebram a riqueza da culinária japonesa em cada mordida.
              </S.Phrase>
              <S.Link $variant='orange'>Link<i className='bx bxs-right-arrow'></i></S.Link>
            </S.Content>
          </S.SideContainer>
        </S.LeftSide>
        <S.RightSide className='side'>
          <S.SideContainer className='right'>
            <S.Image src={banner} />
          </S.SideContainer>
        </S.RightSide>
        <S.GridOverlay />
    </S.Container>
  )
}

export default Hero
