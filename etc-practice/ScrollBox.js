import React, { Component } from "react";

export default class ScrollBox extends Component {
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    this.box.scrollTop = scrollHeight - clientHeight;
  };
  render() {
    const style = {
      border: "1px solid #eee",
      width: "300px",
      height: "300px",
      overflow: "auto",
      position: "relative",
    };

    const innerStyle = {
      width: "100%",
      height: "600px",
      background: "linear-gradient(white, black)",
    };

    return (
      <>
        <h1>박스 안을 스크롤하세요</h1>
        <div
          style={style}
          ref={(ref) => {
            this.box = ref;
          }}
        >
          <div style={innerStyle}></div>
        </div>
      </>
    );
  }
}
