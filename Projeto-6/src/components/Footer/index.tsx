import { Link } from 'react-router-dom'

import logo from '../../assets/logo.svg'
import instagram from '../../assets/instagram.svg'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import { ContentContainer, Paragraph, SocialLinks } from './styles'

const Footer = () => (
  <div className="container">
    <ContentContainer>
      <Link to="/">
        <img src={logo} alt="EFOOD"></img>
      </Link>
      <SocialLinks>
        <li>
          <a href="#">
            <img src={instagram} alt="Instagram" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={facebook} alt="Facebook" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={twitter} alt="Twitter" />
          </a>
        </li>
      </SocialLinks>
      <Paragraph>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade
        <br /> dos produtos é toda do estabelecimento contratado.{' '}
      </Paragraph>
    </ContentContainer>
  </div>
)

export default Footer
