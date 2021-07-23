import React from 'react'
import PropTypes from 'prop-types'
import { BodyProfile, Header, ImageProfile, InfoProfile, InfoSecondaryProfile, Wrapper } from './styles';

const Profile = (props) => {
    const { name, email, login, avatar_url, type, followers, following,
        location, twitter_username, created_at, public_repos } = props;
    return (
        <Wrapper>
            <Header>
                <ImageProfile src='https://avatars.githubusercontent.com/u/18586265?v=4' alt='Profile Picture' />
                <InfoProfile>
                    <h1>{login}</h1>
                    <h2>{email}</h2>
                    <p>Tipo: {type}</p>
                    <p>Localização: {location}</p>
                    <p>Seguidores: {followers}</p>
                    <p>Seguindo: {following}</p>
                </InfoProfile>
            </Header>
            <BodyProfile>
                <InfoSecondaryProfile>
                    <p>Criado em: {created_at}</p>
                    <p>Nome: {name}</p>
                    <p>Respositorios: {public_repos}</p>
                    <p>Twitter: {twitter_username}</p>

                </InfoSecondaryProfile>
            </BodyProfile>
        </Wrapper>
    )
}

Profile.default = {

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
