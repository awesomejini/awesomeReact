import React from "react";
import useInputs from "./useInputs";

//커스텀 Hooks / 이해한대로 주석 작성 _ 복습필요
const Info = () => {
  // useInputs의 return값 구조분해 할당으로 반영
  const [state, onChange] = useInputs({
    name: "",
    nickname: "", //초기값
  });

  const { name, nickname } = state; // 가져온 state에서 구조분해 할당

  return (
    <div>
      <div>
        {/* useInputs 의 onChange 가져옴 */}
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름: </b> {name}
        </div>
        <div>
          <b>닉네임: </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
