import React, { createContext, useCallback, useState } from 'react'
import api from '../services/api';

export const GithubContext = createContext({
  loading: false,
  user: {},
  repositories: [],
  starred: [],
})

const GithubProvider = ({ children }) => {
  const [githubState, setGithubState] = useState({
    loading: false,
    user: {
      login: 'claudimards',
      name: 'Claudimar Bezerra',
      htmlUrl: 'https://www.teste.com',
      blog: 'https://www.teste.com',
      company: 'Nairuz',
      location: 'Campinas',
      followers: 0,
      following: 0,
      publicGists: 0,
      publicRepos: 0,
    },
    repositories: [],
    starred: [],
  });

  const getUser = (userName) => {
    api.get(`users/${userName}`).then(({ data: {user} }) => {
      setGithubState((prevState) => ({
        ...prevState,
        user: {
          login: user.login,
          name: user.name,
          htmlUrl: user.html_url,
          blog: user.blog,
          company: user.company,
          location: user.location,
          followers: user.followers,
          following: user.following,
          publicGists: user.public_gists,
          publicRepos: user.public_repos,
        },
      }))
    })
  }

  const contextValue = {
    githubState,
    getUser: useCallback((userName) => getUser(userName), [])
  }

  return (
    <GithubContext.Provider value={contextValue}>
      {children}
    </GithubContext.Provider>
  )
}

export default GithubProvider
