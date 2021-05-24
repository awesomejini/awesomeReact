import React from "react";

const data = {
  awesomejini: {
    name: "이유진",
    description: "리액트를 좋아하는 개발자 지망생",
  },
  geni: {
    name: "지니",
    description: "제 2의 자아",
  },
};

const Profile = ({ match }) => {
  // console.log(match.params);
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
