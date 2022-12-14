import styled from 'styled-components'

export const Container = styled.header`
  background: #d73035;
  display: flex;
  justify-content: center;
  height: 198px;
  align-items: center;
  img {
    width: 300px;
    transform: scale(0.8);
    animation: scale 25s infinite cubic-bezier(0.5, 0, 0.89, 1);
    @keyframes scale {
      100% {
        transform: scale(1.2);
      }
      50% {
        transform: scale(1.1);
      }
      0% {
        transform: scale(1.2);
      }
    }
  }
`

export const Content = styled.div`
  width: 100%;
  max-width: 1216px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .page-details {
    h1 {
      font-size: 38px;
      color: white;
    }

    h2 {
      color: white;
      font-weight: 400;
      font-size: 18px;
      opacity: 0.9;
      margin-top: 6px;
    }
  }
`
