import React from 'react'
import PropTypes from 'prop-types'
import { BodyProfile, Header, ImageProfile, InfoProfile, InfoSecondaryProfile, Wrapper } from './styles';
import { convertDate } from '../../utils';
import logo from '../../assets/searching.gif'

const Profile = (props) => {
    const { name, email, login, avatar_url, type, followers, following,
        location, twitter_username, created_at, public_repos } = props;
    return (
        <Wrapper>
            <ImageProfile src={avatar_url === 'Não informado' ? logo : avatar_url} alt='Profile Picture' />

            <Header>
                <InfoProfile>
                    <h1>{login}</h1>
                    <h2>{email === null ? 'Não informado' : email}</h2>
                    <p>Tipo: {type}</p>
                    <p>Localização: {location === null ? 'Não informado' : location}</p>
                    <p>Seguidores: {followers}</p>
                    <p>Seguindo: {following}</p>
                </InfoProfile>
            </Header>
            <BodyProfile>
                <InfoSecondaryProfile>
                    <p>Criado em: {convertDate(created_at)}</p>
                    <p>Nome: {name === null ? 'Não informado' : name}</p>
                    <p>Respositorios: {public_repos}</p>
                    <p>Twitter: {twitter_username === null ? 'Não informado' : twitter_username}</p>

                </InfoSecondaryProfile>
            </BodyProfile>
        </Wrapper>
    )
}

Profile.defaultProps = {
    name: 'Não informado',
    email: 'Não informado',
    login: 'Não informado',
    avatar_url: 'Não informado',
    type: 'Não informado',
    followers: 'Não informado',
    following: 'Não informado',
    location: 'Não informado',
    twitter_username: 'Não informado',
    created_at: 'Não informado',
    public_repos: 'Não informado'
}

Profile.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    login: PropTypes.string,
    avatar_url: PropTypes.string,
    type: PropTypes.string,
    followers: PropTypes.number,
    following: PropTypes.number,
    location: PropTypes.string,
    twitter_username: PropTypes.string,
    created_at: PropTypes.string,
    public_repos: PropTypes.number
}

export default Profile
