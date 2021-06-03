import React, { useState } from "react";
import "./Top.css";

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
