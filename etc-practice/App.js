import ScrollBox from "./ScrollBox";
import "./App.css";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => (this.ScrollBox = ref)} />
        <button onClick={() => this.ScrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </div>
    );
  }
}

export default App;
