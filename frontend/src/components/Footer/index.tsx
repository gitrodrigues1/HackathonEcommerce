import * as S from './styles'

const Footer = () => {

  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      <S.Footer>
        <S.Container>
          <S.InfosContainer>
            <S.InfoWrapper>
              <li><h3>Contato:</h3></li>
              <li><i className='bx bx-phone'/><span />+55 (11) 91234-5678</li>
              <li><i className='bx bx-home' /><span />Beco do Wasabi, Nº 7, ZenVille, São Paulo/SP</li>
              <li><i className='bx bx-envelope'/><span />atendimento@sushihub.com.br</li>
            </S.InfoWrapper>
            <S.InfoWrapper>
              <li><h3>Horário de Funcionamento:</h3></li>
              <li><i className='bx bx-time'/><span />Segunda a Sexta: 11:00 às 23:00</li>
              <li><i className='bx bx-time' /><span />Sábado, Domingo e Feriados: 12:00 às 24:00</li>
              <li><i className='bx bx-moon'/><span />Fechamos durante a Lua Cheia para meditação zen</li>
            </S.InfoWrapper>
          </S.InfosContainer>
          <S.ScrollUpButton onClick={ScrollToTop}><i className='bx bxs-up-arrow' /><span />Voltar ao início</S.ScrollUpButton>
          <S.SocialMedia>
            <li><a><i className='bx bxl-facebook-circle' /></a></li>
            <li><a><i className='bx bxl-instagram' /></a></li>
            <li><a><i className='bx bxl-linkedin-square' /></a></li>
            <li><a><i className='bx bxl-whatsapp' /></a></li>
            <li><a><i className='bx bxl-twitter' /></a></li>
            <li><a><i className='bx bxl-youtube' /></a></li>
          </S.SocialMedia>
        </S.Container>
      </S.Footer>
      <S.Copyright>
        &copy;2024 SushiHub&nbsp;- Todos os direitos reservados.&nbsp;
        <span className='d-block'/>Desenvolvido pela equipe TechMaki.
      </S.Copyright>
    </>
  )
}

export default Footer
