import React from 'react'
import RepositoryItem from '../repositoryItem';

import * as S from './styled';

const Repositories = () => {
  return (
    <S.WrapperTabs
      selectedTabClassName="is-selected"
      selectedTabPanelClassName="is-selected"
    >
      <S.WrapperTabList>
        <S.WrapperTab>Repositories</S.WrapperTab>
        <S.WrapperTab>Starred</S.WrapperTab>
      </S.WrapperTabList>
      <S.WrapperTabPanel>
        <RepositoryItem name="repo1" linkToRepo="https://www.google.com.br" fullname="Fullname" />
      </S.WrapperTabPanel>
      <S.WrapperTabPanel>
        <RepositoryItem name="repo2" linkToRepo="https://www.google.com.br" fullname="Fullname" />
      </S.WrapperTabPanel>
    </S.WrapperTabs>
  )
}

export default Repositories
