import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 80px;
  border: 1px solid black;
  border-radius: 5px;
  margin: 10px;
  padding: 5px;
  h2 {
    font-family: ${(props) => props.theme.font};
    font-size: 14px;
  }
  p {
    font-family: ${(props) => props.theme.font};
    font-size: 14px;
  }
  a {
    font-family: ${(props) => props.theme.font};
    font-size: 14px;
  }
`;
