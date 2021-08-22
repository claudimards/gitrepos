import React from 'react'
import * as S from './styled'

const RepositoryItem = ({ name, linkToRepo, fullname }) => {
  return (
    <S.Wrapper>
      <S.WrapperTitle>{name}</S.WrapperTitle>
      <S.WrapperFullName>Full name:</S.WrapperFullName>
      <S.WrapperLink href={linkToRepo} rel="noreferrer" target="_blank">{fullname}</S.WrapperLink>
    </S.Wrapper>
  )
}

export default RepositoryItem
