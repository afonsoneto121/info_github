import React, { useState, useEffect } from 'react'
import logo from '../../assets/logo.png'
import { getProfile, getRepos } from '../../services'
import { Container, ContainerProfile, Logo, LabelField, ContainerRepos, NavApp, Quote } from './styles'

import { Button, CardRepos, InputField, Profile } from '../../components'

const Home = props => {
  const [profile, setProfile] = useState({});
  const [inputSearch, setInputSearch] = useState('');
  const [repos, setRepos] = useState([]);
  const [textFindRepo,setTextFindRepo] = useState('Buscar Repositórios')

  useEffect( () => {
    const find = async () => {
      const result = await getRepos(profile.login);
      setRepos(result);
    }
    find();

  }, [profile])

  const handlekeyPress = async (e) => {
    if (e.key === 'Enter') {
      const profileResult = await getProfile(inputSearch);
      if(profileResult.hasOwnProperty('message'))
        setTextFindRepo('Não encontrado')
      else
        setProfile(profileResult);
    }
  }

  const handeOnChangeInput = (e) => {
    setInputSearch(e.target.value);
  }

  const handleOnClick = async () => {
    const profileResult = await getProfile(inputSearch);
    if(profileResult.hasOwnProperty('message'))
        setTextFindRepo('Não encontrado')
      else
        setProfile(profileResult);
  }

  return (
    <>
      <NavApp>
      <Logo src={logo} alt='Logo do Aplicativo' />
          <LabelField>
            <InputField placeholder='Pesquise'
              onChange={handeOnChangeInput}
              onKeyPress={handlekeyPress} />
            <Button onClick={handleOnClick}>
              <i className="fas fa-search fa-lg"></i>
            </Button>
          </LabelField>
      </NavApp>

      <Container>
        <ContainerProfile>

          <Profile {...profile} />
        </ContainerProfile>
        <ContainerRepos>
          {repos.length > 0 && repos.map((repo) =>
            <CardRepos key={repo.id}
              name={repo.name}
              language={repo.language}
              updated_at={repo.updated_at}
              html_url={repo.html_url}
            />
          )}
        </ContainerRepos>
        {repos.length <= 0 && <Quote>
              <h1>{textFindRepo}</h1>
            </Quote>
          }
      </Container>

    </>
  )
}



export default Home
