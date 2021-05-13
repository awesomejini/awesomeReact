import React, { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "하나" },
    { id: 2, text: "둘" },
    { id: 3, text: "셋" },
    { id: 4, text: "넷" },
  ]);

  const [inputText, setInputText] = useState("");

  const [nextId, setNextId] = useState(5);

  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = [...names, { id: nextId, text: inputText }];
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };

  const namesList = names.map((name) => <li key={name.id}>{name.text}</li>);

  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{namesList}</ul>
    </>
  );
};
export default IterationSample;
