import Logo from '../../assets/images/logo.svg'
import { Container, Content } from './styles'

export function Header() {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="WAITERAPP" />

        <div className="page-details">
          <h1>Pedidos</h1>
          <h2>Acompanhe os pedidos dos clientes!</h2>
        </div>
      </Content>
    </Container>
  )
}
