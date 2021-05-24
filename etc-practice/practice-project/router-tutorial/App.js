import React from "react";
import { Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Profile from "./Profile";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profile/awesomejini">awesomejini 프로필</Link>
        </li>
        <li>
          <Link to="/profile/geni">geni 프로필</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" component={Home} exact={true}></Route>
      <Route path={["/about", "/info"]} component={About}></Route>
      <Route path="/profile/:username" component={Profile}></Route>
    </div>
  );
}

export default App;
