import React, { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "하나" },
    { id: 2, text: "둘" },
    { id: 3, text: "셋" },
    { id: 4, text: "넷" },
  ]);

  const [inputText, setInputText] = useState("");

  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = [...names, { id: names.length + 1, text: inputText }];
    setNames(nextNames);
    setInputText("");
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const namesList = names.map((name) => (
    <li key={name.id}>
      {name.text}
      <button onClick={() => onRemove(name.id)}>삭제</button>
    </li>
  ));

  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{namesList}</ul>
    </>
  );
};
export default IterationSample;
