import React, { useState } from 'react'
import useGithub from '../../hooks/github-hooks';
import * as S from './styled'

const Header = () => {
  const [userNameForSearch, setUserNameForSearch] = useState();
  const { getUser } = useGithub();

  const submitGetUser = () => {
    if (!userNameForSearch) return
    return getUser( userNameForSearch )
  }

  return (
    <header>
      <S.Wrapper>
        <input
          type="text"
          placeholder="Digite o username para pesquisar"
          onChange={(event) => setUserNameForSearch(event.target.value)}
        />
        <button type="submit" onClick={submitGetUser}>Buscar</button>
      </S.Wrapper>
    </header>
  )
}

export default Header
