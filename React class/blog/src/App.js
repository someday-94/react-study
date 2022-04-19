import "./App.css";
import { useState } from "react";

function App() {
  let [title, updateTitle] = useState(["프로젝트 1", "프로젝트 2", "프로젝트 3"]);
  let [good, updateGood] = useState(0);

  function changeTitle() {
    let newTitle = [...title];
    newTitle[0] = "프로젝트 4";
    updateTitle(newTitle);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={changeTitle}> change </button>

      <div className="list">
        <h3>
          {title[0]}{" "}
          <span
            onClick={() => {
              updateGood(good + 1);
            }}
          >
            👍
          </span>{" "}
          {good}
        </h3>
        <p>2월 17일 발행</p>
        <hr />
        <h3>{title[1]}</h3>
        <p>2월 18일 발행</p>
        <hr />
        <h3>{title[2]}</h3>
        <p>2월 19일 발행</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
