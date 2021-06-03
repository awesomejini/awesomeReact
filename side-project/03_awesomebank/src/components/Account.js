import React from "react";
import "./Account.css";
export default function Account() {
  return (
    <>
      <div className="account-wrap bg-purple">
        <div className="userImage"></div>
        <h3>안녕하세요, 이유진님</h3>
        <ul className="account-list">
          <li>
            <h5>예금</h5>
            <p>
              계좌번호 : 3333-0232-09781 <span>주계좌</span>
            </p>
            <p className="balance">
              1,204,012,000 <span>원</span>
            </p>
          </li>
          <li>
            <h5>예금</h5>
            <p>
              계좌번호 : 3333-0232-09781 <span>주계좌</span>
            </p>
            <p className="balance">
              1,204,012,000 <span>원</span>
            </p>
          </li>
          <li>
            <h5>예금</h5>
            <p>
              계좌번호 : 3333-0232-09781 <span>주계좌</span>
            </p>
            <p className="balance">
              1,204,012,000 <span>원</span>
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}
