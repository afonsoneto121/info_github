export const getProfile = (login) =>
    fetch(`${process.env.REACT_APP_API}/users/${login}`)
        .then((response) => response.json());
