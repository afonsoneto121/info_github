import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import logo from '../../assets/logo.png'
import { getProfile, getRepos } from '../../services'
import { Container, ContainerProfile, Logo, SearchProfile, LabelField, ContainerRepos } from './styles'

import { Button, CardRepos, InputField, Profile } from '../../components'

const Home = props => {
  const [profile, setProfile] = useState({});
  const [inputSearch, setInputSearch] = useState('');
  const [repos, setRepos] = useState([]);

  useEffect(async () => {
    const result = await getRepos(profile.login);
    setRepos(result);

    console.log(repos);
    console.log(profile);
  }, [profile])

  const handlekeyPress = async (e) => {
    if (e.key === 'Enter') {
      const profileResult = await getProfile(inputSearch);
      setProfile(profileResult);
    }
  }

  const handeOnChangeInput = (e) => {
    setInputSearch(e.target.value);
  }

  const handleOnClick = async () => {
    const profileResult = await getProfile(inputSearch);
    setProfile(profileResult);
  }

  return (
    <Container>
      <ContainerProfile>
        <SearchProfile>
          <Logo src={logo} alt='Logo do Aplicativo' />
          <LabelField>
            <InputField placeholder='Pesquise'
              onChange={handeOnChangeInput}
              onKeyPress={handlekeyPress} />
            <Button onClick={handleOnClick}>
              <i className="fas fa-search fa-lg"></i>
            </Button>
          </LabelField>
        </SearchProfile>
        <Profile {...profile} />
      </ContainerProfile>
      <ContainerRepos>
        {repos.length > 0 ? repos.map((repo) =>
          <CardRepos key={repo.id}
            name={repo.name}
            language={repo.language}
            updated_at={repo.updated_at}
            html_url={repo.html_url}
          />
        ) : 'Sem Texto'}

      </ContainerRepos>
    </Container>
  )
}



export default Home
