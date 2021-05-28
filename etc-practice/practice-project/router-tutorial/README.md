# Router tutorial 진행완료/

20210525
```javascript
import { withRouter } from "react-router-dom";
const WithRouterSample = ({ location, match, history }) => {
  return (
    <div>
      <h4>location</h4>
      <textarea
        value={JSON.stringify(location, null, 2)}
        rows={7}
        readOnly={true}
      />
      <h4>match</h4>
      <textarea
        value={JSON.stringify(match, null, 2)}
        rows={7}
        readOnly={true}
      />
      <button onClick={() => history.push("/")}>홈으로</button>
    </div>
  );
};

  export default withRouter(WithRouterSample);
```

```javascript
const activeStyle = {
    background: "coral",
    color: "black",
  };
  
  <NavLink activeStyle={activeStyle} to="/profiles/awesomejini"></NavLink>
  ```
  
-----------------

20210524
- route, Link
```javascript
<Route path={["/about", "/info"]} />
```
```javascript
const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];
  ```
  ```javascript
import qs from "qs";
  const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true, // 이 설정을 통해 문자열 맨 앞의 ? 생략
  });
  const showDetail = query.detail === "true";
  ```
  ```javascript
<Route
    path="/profiles"
    exact
    render={() => <div>사용자를 선택해주세요.</div>}
  />
  <Route path="/profiles/:username" component={Profile} />
  ```
  ```javascript
class HistorySample extends Component {
  handleGoBack = () => {
    this.props.history.goBack();
  };
  handleGoHome = () => {
    this.props.history.push("/");
  };
  ```
```javascript
  componentDidMount() {
    this.unblock = this.props.history.block("정말 떠나실 건가요?");
  }

  componentWillUnmount() {
    if (this.unblock) {
      this.unblock();
    }
  }
  ```

### 부분 미숙한 상태입니다.
