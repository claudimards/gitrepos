import React from 'react'

const RepositoryItem = ({ name, linkToRepo, fullname }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h4>Full name:</h4>
      <a href={linkToRepo} rel="noreferrer">{fullname}</a>
    </div>
  )
}

export default RepositoryItem
