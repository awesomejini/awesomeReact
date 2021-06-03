
# awesomebank

---
- 구현 내역
- ---

<img width="30%" aligh="left" src="https://user-images.githubusercontent.com/75153322/120579475-86a91880-c462-11eb-841a-b7d0bec7e1a9.gif" />

---
- 20210603 기록
- ---

* [x] 컴포넌트 추가 (단순 구현 / 데이터 바인딩 없음)

<img width="30%" src="https://user-images.githubusercontent.com/75153322/120579475-86a91880-c462-11eb-841a-b7d0bec7e1a9.gif" />

  성공 소스
  
  ```javascript
  export default function Top() {
  const [active, setActive] = useState(false);
  return (
    <>
      <div className="mt4rem"></div>
      <div className="top-wrap bg-purple">
        <ul className="top">
          <a className="logo" href="/">
            AwesomeBank
          </a>
          <a
            className={active ? `menu-trigger active` : `menu-trigger`}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setActive(!active);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </a>
        </ul>
      </div>
    </>
  );
}
  ```
