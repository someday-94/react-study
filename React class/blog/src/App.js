import "./App.css";
import { useState } from "react";

function App() {
  let [postArr, setPostArr] = useState([["다 프로젝트", 0], ["나 프로젝트", 0], ["가 프로젝트", 0]]);
  let [isShowModal, setIsShowModal] = useState(false);

  function changePostArr() {
    let newTitle = [...postArr];
    newTitle[0] = "프로젝트";
    setPostArr(newTitle);
  }

  function sortPostArr() {
    let newTitle = [...postArr];

    newTitle.sort();

    setPostArr(newTitle);
  }

  function showModal() {
    if (isShowModal === true) {
      setIsShowModal(false);
    } else {
      setIsShowModal(true);
    }
  }

  function plusGoodCount(index) {
    let newContentArr = [...postArr];
    newContentArr[index][1] += 1;
    setPostArr(newContentArr)
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>Dev Blog</div>
      </div>
      <button onClick={changePostArr}> change </button>
      <button onClick={sortPostArr}> sort </button>

      {postArr.map(function (post, index) {
        return (
          <div className="list" key={index}>
            <h4
              onClick={() => {
                showModal(true);
              }}
            >
              {post[0]}
              <span
                onClick={() => {
                  plusGoodCount(index);
                }}
              >
                👍
              </span>
              {post[1]}
            </h4>
            <p>2월 17일 발행</p>
          </div>
        );
      })}

      <>
        {/* 
      {titleArr.map(function (title, index) {
        return (
          <div className="list">
          <h4>
          {titleArr[index]}
          <span
          onClick={() => {
            setGoodCount(goodCount + 1);
          }}
          >
          👍
          </span>
          {goodCount}
          </h4>
            <p>2월 17일 발행</p>
          </div>
          );
        })} 
      */}
      </>

      {isShowModal === true ? <Modal color="whitesmoke" background={'gray'} title={postArr}/> : null}
    </div>
  );
}

// 함수 첫 글자는 대문자
function Modal(props) {
  return (
    <div className="modal" style={{ background: props.background, color: props.color }}>
      <h4>{props.title}</h4>
      <p>date</p>
      <p>content</p>
      <button>글수정</button>
    </div>
  );
}

// 이렇게 const로 Mothod를 작성해 놓으면 나중에 실수로 수정하는 일을 방지해 준다.
const Modal2 = () => {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
};

export default App;
