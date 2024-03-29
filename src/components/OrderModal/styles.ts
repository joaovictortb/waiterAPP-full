import styled from 'styled-components'

export const Overlay = styled.div`
  left: 0px;
  top: 0px;

  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);

  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalBody = styled.div`
  background: #fff;
  width: 480px;
  border-radius: 8px;
  padding: 32px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 28px;
      text-transform: uppercase;
      color: black;
      font-weight: 600;
    }

    button {
      line-height: 0;
      border: 0;
      background: transparent;
    }
  }

  .status-container {
    margin-top: 32px;

    small {
      font-size: 14px;
      opacity: 0.9;
    }
    span {
      color: black;
    }

    div {
      margin-top: 8px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
`

export const OrderDatails = styled.div`
  margin-top: 32px;

  > strong {
    color: black;
    font-weight: bolder;
    font-size: 16px;
    opacity: 0.9;
  }

  .order-itens {
    margin-top: 16px;
    .item {
      display: flex;

      & + .item {
        margin-top: 16px;
      }
      img {
        border-radius: 6px;
      }

      .quantity {
        font-size: 14px;
        color: #666;
        display: block;
        min-width: 20px;
        margin-left: 12px;
      }
      .product-details {
        margin-left: 10px;

        > strong {
          display: block;
          margin-bottom: 4px;
        }
        span {
          font-size: 17px;
          color: #666;
        }
      }
    }
  }

  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;

    span {
      font-weight: 500;
      font-size: 18px;
      color: #333;
    }
    strong {
      font-size: 23px;
    }
  }
`
export const Actions = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: 32px;

  .primary {
    background: #333333;
    border-radius: 15px;
    border: 0;
    color: #fff;
    padding: 12px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
  .secondary {
    margin-top: 7px;
    padding: 12px 24px;
    color: #fff;
    font-weight: bold;
    border: 0;
    background-color: #d73035;
    border-radius: 15px;
  }
`
