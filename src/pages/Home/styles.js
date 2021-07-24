import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	background-color: ${(props) => props.theme.colors.background};

`;

export const Logo = styled.img`
margin-bottom: 15px;
position: relative;

`;

export const LabelField = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 4px;

  input {
	display:inline-block;

    border: 1px solid #ccc;
    border-radius: 8px;
    width: 100%;
    height: 22px;
    padding: 8px;
    font-family: ${(props) => props.theme.font}
  }

  button {
	border: none;
	background: transparent;
	margin-left: 5px;
  }
`;
export const ContainerProfile = styled.div`
	display: flex;
	flex-direction: column;
	width: 360px;
	height: 100vh;
	background-color: ${(props) => props.theme.colors.primary};
	margin: 8px;
`;

export const SearchProfile = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: #ffffff;
	padding: 16px;
`;

export const ContainerReps = styled.div`
	display: flex;
	flex-direction: wow;
	width: 100%;
	height: 100vh;
	flex-wrap: nowrap | wrap 
	background-color: ${(props) => props.theme.colors.primary};	
`;

