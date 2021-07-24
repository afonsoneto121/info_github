import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import logo from '../../assets/logo.png'
import { getProfile } from '../../services'
import { Container, ContainerProfile, Logo, SearchProfile, LabelField } from './styles'

import { Button, InputField, Profile } from '../../components'

const Home = props => {
	const [profile, setProfile] = useState({});
	const [inputSearch, setInputSearch] = useState('');

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

		</Container>
	)
}



export default Home
