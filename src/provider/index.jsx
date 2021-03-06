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
    hasUser: false,
    loading: false,
    user: {
      id: undefined,
      login: undefined,
      name: undefined,
      htmlUrl: undefined,
      avatarUrl: undefined,
      blog: undefined,
      company: undefined,
      location: undefined,
      followers: 0,
      following: 0,
      publicGists: 0,
      publicRepos: 0,
    },
    repositories: [],
    starred: [],
  });

  const getUser = (userName) => {
    setGithubState((prevState) => ({
        ...prevState,
        loading: !prevState.loading
      }))

    api.get(`users/${userName}`).then(({ data }) => {
      setGithubState((prevState) => ({
        ...prevState,
        hasUser: true,
        user: {
          id: data.id,
          login: data.login,
          name: data.name,
          htmlUrl: data.html_url,
          avatarUrl: data.avatar_url,
          blog: data.blog,
          company: data.company,
          location: data.location,
          followers: data.followers,
          following: data.following,
          publicGists: data.public_gists,
          publicRepos: data.public_repos,
        },
      }))
    }).finally(() => {
      setGithubState((prevState) => ({
        ...prevState,
        loading: !prevState.loading
      }))
    })
  }

  const getUserRepos = ( userName ) => {
    api.get(`users/${userName}/repos`).then(({ data }) => {
      console.log(data);
      setGithubState((prevState) => ({
        ...prevState,
        repositories: data,
      }))
    })
  }

  const getUserStarred = ( userName ) => {
    api.get(`users/${userName}/starred`).then(({ data }) => {
      setGithubState((prevState) => ({
        ...prevState,
        starred: data,
      }))
    })
  }

  const contextValue = {
    githubState,
    getUser: useCallback((userName) => getUser(userName), []),
    getUserRepos: useCallback((userName) => getUserRepos(userName), []),
    getUserStarred: useCallback((userName) => getUserStarred(userName), []),
  }

  return (
    <GithubContext.Provider value={contextValue}>
      {children}
    </GithubContext.Provider>
  )
}

export default GithubProvider
