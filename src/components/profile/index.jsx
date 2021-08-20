import React from "react";

import * as S from "./styled";

const Profile = () => {
  return (
    <S.Wrapper>
      <S.WrapperImage
        src="https://avatars.githubusercontent.com/u/39865182?v=4"
        alt="Avatar claudimards"
      />
      <S.WrapperInfoUser>
        <div>
          <h1>Claudimar Bezerra</h1>
          <S.WrapperUserName>
            <h3>Username: </h3>
            <a href="https://api.github.com/users/claudimards" target="_blank" rel="noreferrer">claudimards</a>
          </S.WrapperUserName>
        </div>

        <S.WrapperStatusCount>
          <div>
            <h4>Followers</h4>
            <span>5000000</span>
          </div>
          <div>
            <h4>Starred</h4>
            <span>5000000</span>
          </div>
          <div>
            <h4>Following</h4>
            <span>5000000</span>
          </div>
        </S.WrapperStatusCount>
      </S.WrapperInfoUser>
    </S.Wrapper>
  );
};

export default Profile;
