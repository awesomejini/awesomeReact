# Router tutorial 진행중입니다
20210524
- route, Link
- <Route path={["/about", "/info"]} />
- const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];
- import qs from "qs";
  const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true, // 이 설정을 통해 문자열 맨 앞의 ? 생략
  });
  const showDetail = query.detail === "true";
- <Route
    path="/profiles"
    exact
    render={() => <div>사용자를 선택해주세요.</div>}
  />
  <Route path="/profiles/:username" component={Profile} />
- class HistorySample extends Component {
  handleGoBack = () => {
    this.props.history.goBack();
  };
  handleGoHome = () => {
    this.props.history.push("/");
  };

  componentDidMount() {
    this.unblock = this.props.history.block("정말 떠나실 건가요?");
  }

  componentWillUnmount() {
    if (this.unblock) {
      this.unblock();
    }
  }

### 부분 미숙한 상태입니다.
