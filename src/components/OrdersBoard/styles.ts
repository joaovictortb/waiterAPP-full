import styled from 'styled-components'

export const Board = styled.div`
  padding: 16px;
  background-color: #d73035;
  box-shadow: 6px 4px;

  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  > strong {
    color: white;
    font-size: 20px;
  }
  h3 {
    color: white;
  }

  header {
    padding: 8px;
    font-size: 18px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`
export const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 24px;

  button {
    background: #fff;
    border: 1px solid #d73035;
    height: 128px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;

    p {
      color: black;
      font-size: 28px;
      font-weight: 600;
    }

    strong {
      font-size: 18px;
      font-weight: 600;
    }

    span {
      font-size: 16px;
      color: #666;
    }
    & + button {
      margin-top: 15px;
    }
  }
`
