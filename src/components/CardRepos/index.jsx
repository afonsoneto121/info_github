import React from 'react'
import PropTypes from 'prop-types'
import { Card } from './styles'
import { convertDate } from '../../utils';

const CardRepos = props => {
  const { name, language, updated_at, html_url } = props;
  return (
    <Card >
      <h2> {name} </h2>
      <p> Linguagem: {language} </p>
      <p> Última atualização: {convertDate(updated_at)} </p>
      <a href={html_url}> link  </a>
    </Card>
  )
}
CardRepos.defaultProps = {

}

CardRepos.propTypes = {
  name: PropTypes.string,
  language: PropTypes.string,
  updated_at: PropTypes.string,
  html_url: PropTypes.string
}

export default CardRepos
