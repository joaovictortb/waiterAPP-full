import { useState } from 'react'
import { Order } from '../../types/Order'
import { OrderModal } from '../OrderModal'
import { Board, OrdersContainer } from './styles'

interface OrderBoardProps {
  icon: string
  title: string
  orders: Order[]
}

export function OrdersBoard({ icon, title, orders }: OrderBoardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedOrder, setSelectedOrder] = useState<null | Order>(null)

  function handleOpenOrder(order: Order) {
    setIsModalVisible(true)
    setSelectedOrder(order)
  }
  function handleCloseModal() {
    setIsModalVisible(false)
    setSelectedOrder(null)
  }

  return (
    <Board>
      <OrderModal
        visible={isModalVisible}
        order={selectedOrder}
        onClose={handleCloseModal}
      />
      <header>
        <span>{icon}</span>
        <h3>{title}</h3>
        <h3>({orders.length})</h3>
      </header>

      {orders.length > 0 && (
        <OrdersContainer>
          {orders.map((order) => (
            <button
              type="button"
              key={order._id}
              onClick={() => handleOpenOrder(order)}
            >
              <p>Mesa {order.table}</p>
              <span>{order.products.length} itens</span>
            </button>
          ))}
        </OrdersContainer>
      )}
    </Board>
  )
}
