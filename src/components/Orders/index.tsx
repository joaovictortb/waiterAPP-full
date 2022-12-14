import { Order } from '../../types/Order'
import { OrdersBoard } from '../OrdersBoard'
import { Container, Title } from './styles'

const orders: Order[] = [
  {
    _id: '638601432c2bff9e994a37d7',
    table: '123',
    status: 'IN_PRODUCTION',
    products: [
      {
        product: {
          name: 'Pizza quatro quijos',
          imagePath: '1669639014137-quatro-queijos.png',
          price: 40,
        },
        quantity: 3,
        _id: '638601432c2bff9e994a37d8',
      },
      {
        product: {
          name: 'Coca Cola',
          imagePath: '1669642620296-coca-cola.png',
          price: 7,
        },
        quantity: 2,
        _id: '638601432c2bff9e994a37d9',
      },
    ],
  },
]

export function Orders() {
  return (
    <>
      <Title>
        <h1 className="initial-title">Linha de Produção</h1>
      </Title>

      <Container>
        <OrdersBoard icon="⏱️" title="Fila de Espera" orders={orders} />
        <OrdersBoard icon="👨‍🍳" title="Em preparação" orders={[]} />
        <OrdersBoard icon="✅" title="Finalizado!" orders={[]} />
      </Container>
    </>
  )
}
