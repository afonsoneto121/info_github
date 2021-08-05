export const getProfile = (login) =>
  fetch(`${process.env.REACT_APP_API}/users/${login}`)
    .then((response) => response.json());


export const getRepos = (user) =>
  fetch(`${process.env.REACT_APP_API}/users/${user}/repos`)
    .then((response) => response.json());

