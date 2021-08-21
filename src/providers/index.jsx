import React, { createContext, useState } from 'react'

export const GithubContext = createContext({
  user: {},
  repositories: [],
  starred: [],
})

const GithubProvider = ({ children }) => {
  const [githubState, setGithubState] = useState({
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

  const contextValue = {
    githubState,
  }

  return (
    <GithubContext.Provider value={contextValue}>
      {children}
    </GithubContext.Provider>
  )
}

export default GithubProvider
