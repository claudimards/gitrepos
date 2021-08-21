import React, { useState } from 'react'
import useGithub from '../../hooks/github-hooks';
import * as S from './styled'

const Header = () => {
  const [userNameForSearch, setUserNameForSearch] = useState();
  const { getUser } = useGithub();

  const submitGetUser = ( userNameForSearch ) => {
    if (!userNameForSearch) return
    return getUser( userNameForSearch )
  }

  return (
    <header>
      <S.Wrapper>
        <input
          type="text"
          placeholder="Digite o username para pesquisar"
          onChange={submitGetUser}
        />
        <button type="submit">Buscar</button>
      </S.Wrapper>
    </header>
  )
}

export default Header
