import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 100%;
  margin-top: 1.5em;
  padding: 1em;
  box-shadow: 0px 5px 10px rgba(34, 35, 58, 0.2);
  border-radius: 5px;

  h3, p {
    margin: 0.5em 0;
  }

  .content {
    font-weight: 200;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`