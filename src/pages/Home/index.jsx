import React from 'react'
import PropTypes from 'prop-types'
import logo from '../../assets/logo.png'

import { Container, ContainerProfile, Logo, SearchProfile, LabelField } from './styles'

import { Button, InputField, Profile } from '../../components'
const Home = props => {
	return (
		<Container>
			<ContainerProfile>
				<SearchProfile>
					<Logo src={logo} alt='Logo do Aplicativo' />
					<LabelField>
						<InputField placeholder='Pesquise' />
						<Button>
							<i className="fas fa-search fa-lg"></i>
						</Button>
					</LabelField>
				</SearchProfile>
				<Profile
					login='afonsoneto121'
					email='afonsoneto@gmail.com'
					followers={10}
					following={10}
					type='User'
					location='Brasil'
					name='Afonso'
				/>
			</ContainerProfile>

		</Container>
	)
}

Home.propTypes = {

}

export default Home
