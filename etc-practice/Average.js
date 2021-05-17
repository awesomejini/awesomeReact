import React, { useState, useMemo, useCallback, useRef } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산 중..");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};
const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputEI = useRef(null);

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  const onInsert = useCallback(() => {
    const nextList = [...list, parseInt(number)];
    setList(nextList);
    setNumber("");
    inputEI.current.focus();
  }, [number, list]);

  // list배열의 내용이 바뀔때만 getAverage함수 호출
  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEI} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, i) => {
          return <li key={i}>{value}</li>;
        })}
      </ul>
      <div>
        {/* <b>평균값:</b> {getAverage(list)} */}
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
};

export default Average;
