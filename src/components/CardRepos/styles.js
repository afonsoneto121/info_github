import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 110px;

  border-radius: 4px;
  margin: 10px;
  padding: 5px;
  color: rgba(0, 0, 0, 0.87);

  justify-content: space-around;
  overflow: hidden;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  :hover {
    background-color: ${(props) => props.theme.colors.background};

    border-left: 5px solid #676767;
  }

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
    text-decoration: none;
    font-weight: 700;
    line-height: 18px;
    color: #1976d2;

  }
`;
