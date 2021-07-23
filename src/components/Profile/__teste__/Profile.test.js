import { render, screen, fireEvent } from "@testing-library/react";
import Profile from '../index';
import theme from '../../../theme'

const props = {
    name: 'Teste',
    email: 'teste@teste.com',
    login: 'tese_',
    avatar_url: 'http://',
    type: 'User',
    followers: 10,
    following: 10,
    location: 'Brasil',
    twitter_username: '@teste',
    created_at: '2020-07-22',
    public_repos: 10,

}

describe('Profile', () => {
    test('Should render with default props', () => {
        render(<Profile {...props} />);

        const nameT = screen.getByText('Nome: ' + props.name);
        const emailT = screen.getByText(props.email);
        const loginT = screen.getByText(props.login);
        const typeT = screen.getByText('Tipo: ' + props.type);
        const followerT = screen.getByText('Seguidores: ' + props.followers);
        const followinT = screen.getByText('Seguindo: ' + props.following);
        const locationT = screen.getByText('Localização: ' + props.location);
        const twitterT = screen.getByText('Twitter: ' + props.twitter_username);
        const createT = screen.getByText('Criado em: ' + props.created_at);
        const reposT = screen.getByText('Respositorios: ' + props.public_repos);

        const imageT = screen.getByAltText(/Profile Picture/i)

        expect(nameT).toBeInTheDocument();
        expect(emailT).toBeInTheDocument();
        expect(loginT).toBeInTheDocument();
        expect(imageT).toBeInTheDocument();
        expect(typeT).toBeInTheDocument();
        expect(followerT).toBeInTheDocument();
        expect(followinT).toBeInTheDocument();
        expect(locationT).toBeInTheDocument();
        expect(twitterT).toBeInTheDocument();
        expect(createT).toBeInTheDocument();
        expect(reposT).toBeInTheDocument();

    })
})

