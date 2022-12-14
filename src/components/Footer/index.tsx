import { ContainerT } from './styles'
import { BsInstagram, BsLinkedin, BsTwitter, BsGithub } from 'react-icons/bs'

export function Footer() {
  return (
    <ContainerT>
      <footer className="icon-footer">
        <a href="https://www.instagram.com/waiter_app/?hl=pt-br">
          <BsInstagram size={25} />
        </a>
        <a href="https://twitter.com/waiterapp?lang=en-gb">
          <BsTwitter size={25} />
        </a>
        <a href="https://www.linkedin.com/in/joao-victor-full-stack/">
          <BsLinkedin size={25} />
        </a>
        <a href="https://github.com/joaovictortb">
          <BsGithub size={25} />
        </a>

        <h1>Terms of Use • Privacy Policy</h1>
        <h2>© Todos os Direitos Reservados </h2>
      </footer>
    </ContainerT>
  )
}
