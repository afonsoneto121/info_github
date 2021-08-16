import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
width: 375px;
`;

export const Header = styled.section`
display: flex;
padding 8px;
width: 100%;
height: 200px;
`;

export const ImageProfile = styled.img`
width: 175px;
height: 200px;
border-radius: 50%;
object-fit: cover;
align-self: center;
margin-bottom: 21px;
`;

export const InfoProfile = styled.div`
margin-left: 10px;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;


h1 {
    font-family: ${(props) => props.theme.font};
    font-size: 18px;
    font-weight: bold;
    line-height: 22px;
    margin-bottom: 10px;
}

h2 {
    font-family: ${(props) => props.theme.font};
    font-size: 14px;
}
p {
    font-family: ${(props) => props.theme.font};
    font-size: 14px;
}

`;

export const BodyProfile = styled.div`
display: flex;
flex-direction: column;

padding 8px;
width: 100%;
`;

export const InfoSecondaryProfile = styled.div`
margin-left: 10px;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
height: 120px;

p {
    font-family: ${(props) => props.theme.font};
    font-size: 15px;
}
`;