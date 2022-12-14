import styled from 'styled-components'

export const ContainerT = styled.footer`
  margin-top: 272px;
  background: #d73035;
  justify-content: center;
  display: flex;
  height: 120px;
  align-items: center;

  .icon-footer {
    svg {
      cursor: pointer;
      position: relative;
      left: 15%;
      -webkit-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      transform: translateX(-50%);
      margin: 10px;
      color: white;
    }
  }

  h1 {
    align-items: center;
    text-align: center;
    font-weight: 500;
    color: white;
    font-size: 15px;
  }
  h2 {
    justify-content: center;
    align-items: center;
    font-weight: 500;
    color: white;
    font-size: 15px;
  }
`
