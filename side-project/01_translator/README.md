# translator

번역기를 구현하고 싶었으나 링크 연결까지 밖에 구현하지 못하였습니다.

- 20210528 기록

```javascript
// https://react-icons.github.io/react-icons

import { FaSearch } from "react-icons/fa";

// Fa가 안붙은 아이콘은 못쓰는 것 같음, 부분 헤맸음
```


```javascript
function App() {
  const [inputValue, setInputValue] = useState("");
  const inputValueChange = (e) => {
    setInputValue(e);
  };
  return (
    <>
      <Top inputValueChange={inputValueChange} />
      <Result inputValue={inputValue} />
    </>
  );
}

// 검색값을 저장하기 위해 작성
// Result 컴포넌트로 전달하여 오픈 api와 연동하고자 하였음 (api를 쓰는데 능숙하지 못함)
```

```javascript
const Result = ({ inputValue }) => {
  return (
    <div>
      {inputValue && (
        <div className="myValue">
          입력값 : <b>{inputValue}</b>
        </div>
      )}
      <a
        className="resultBtn"
        href={`https://translate.google.co.kr/?hl=ko&sl=en&tl=ko&text=${inputValue}&op=translate`}
      >
        결과 확인하기
      </a>
    </div>
  );
};

// 구상하다가 결국 key 발급 등 방법을 찾지 못하여 링크 대체
```

- 필요지식 : api 활용 능력  
[참고할 블로그 1 : https://code-reading.tistory.com/66](https://code-reading.tistory.com/66)  
[참고할 블로그 2 : https://coding-hwije.tistory.com/42](https://coding-hwije.tistory.com/42)
