import styled from "styled-components";

export const NavApp = styled.nav`
	width: 100vw;
	background-color: #676767;
	display: flex;
	flex-direction: row;
	align-items: center;
  padding: 5px 5px;
`;
export const Container = styled.div`
	display: flex;
	background-color: ${(props) => props.theme.colors.background};
`;

export const Logo = styled.img`
	width: 45px;
	height: 45px;
`;

export const LabelField = styled.div`
  display: flex;
  width: 350px;
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

export const ContainerRepos = styled.div`
  display: flex;
  flex-direction: row;
  align-content: flex-start;
	flex-wrap: wrap ;
	background-color: ${(props) => props.theme.colors.primary};

`;

export const Quote = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	h1 {
		font-family: ${(props) => props.theme.font};
		font-size: 35px;
		font-weight: bold;
		line-height: 22px;
		margin-bottom: 10px;
	}
`;
