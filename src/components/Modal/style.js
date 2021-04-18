import styled from "styled-components";

export const ModalCard = styled.div`
  padding: 1.5em;
  box-shadow: 0px 5px 10px rgba(34, 35, 58, 0.2);
  border-radius: 5px;
  width: 30%;
  background: white;

  .buttons {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  h2 {
    margin: 0 0 0.5em 0;
  }

  @media screen and (max-width: 768px) {
    width: 60%;
  }
`

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, .5);
  z-index: 0;
`