import styled from "styled-components";

export const Default = styled.button`
  width: ${props => props.size};
  padding: 0.5em;
  margin: 5px 10px;
  text-align: center;
  font-family: inherit;
  font-size: 14px;
  font-weight: bold;
  border-radius: 5px;
  color: white;
  background: #008EF9;
  border: none;
  transition: 0.5s;

  &:hover {
    background: #0071D7;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const Border = styled.button`
  width: ${props => props.size};
  padding: 0.5em;
  margin: 5px 10px;
  text-align: center;
  font-family: inherit;
  font-size: 14px;
  font-weight: bold;
  border-radius: 5px;
  color: #008EF9;
  background: white;
  border: 1px solid #008EF9;
  transition: 0.5s;

  &:hover {
    background: lightgray;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const Danger = styled.button`
  width: ${props => props.size};
  padding: 0.5em;
  margin: 5px 10px;
  text-align: center;
  font-family: inherit;
  font-size: 14px;
  font-weight: bold;
  border-radius: 5px;
  color: white;
  background: #FB4D39;
  border: none;
  transition: 0.5s;

  &:hover {
    background: #D5261E;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`