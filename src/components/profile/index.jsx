import React from "react";
import useGithub from "../../hooks/github-hooks";

import * as S from "./styled";

const Profile = () => {
  const { githubState } = useGithub();

  return (
    <S.Wrapper>
      <S.WrapperImage
        src={githubState.user.avatarUrl}
        alt={`Avatar ${githubState.user.name}`}
      />
      <S.WrapperInfoUser>
        <div>
          <h1>{githubState.user.name}</h1>
          <S.WrapperUserName>
            <h3>Location: </h3>
            <span>
              {githubState.user.location}
            </span>
          </S.WrapperUserName>
          <S.WrapperUserName>
            <h3>Username: </h3>
            <a href={githubState.user.htmlUrl} target="_blank" rel="noreferrer">
              {githubState.user.login}
            </a>
          </S.WrapperUserName>
          <S.WrapperUserName>
            <h3>Company: </h3>
            <span>
              {githubState.user.company}
            </span>
          </S.WrapperUserName>
          <S.WrapperUserName>
            <h3>Site: </h3>
            <a href={githubState.user.blog} target="_blank" rel="noreferrer">
              {githubState.user.blog}
            </a>
          </S.WrapperUserName>
        </div>

        <S.WrapperStatusCount>
          <div>
            <h4>Followers</h4>
            <span>{githubState.user.followers}</span>
          </div>
          <div>
            <h4>Following</h4>
            <span>{githubState.user.following}</span>
          </div>
          <div>
            <h4>Gists</h4>
            <span>{githubState.user.publicGists}</span>
          </div>
          <div>
            <h4>Repos</h4>
            <span>{githubState.user.publicRepos}</span>
          </div>
        </S.WrapperStatusCount>
      </S.WrapperInfoUser>
    </S.Wrapper>
  );
};

export default Profile;
