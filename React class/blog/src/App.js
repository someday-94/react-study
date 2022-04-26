import "./App.css";
import React, { useState } from "react";

function App() {
  let [postArr, setPostArr] = useState([
    ["다 프로젝트", 0],
    ["나 프로젝트", 0],
    ["가 프로젝트", 0],
  ]);
  let [isShowModal, setIsShowModal] = useState(false);
  let [selectedIndex, setSelectedIndex] = useState(-1);
  let [newTitle, setNewTitle] = useState("");

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

  function showModal(index) {
    if (index !== selectedIndex || isShowModal === false) {
      setIsShowModal(true);
    } else {
      setIsShowModal(false);
    }

    setSelectedIndex(index);
  }

  function plusGoodCount(index) {
    let newPostArr = [...postArr];
    newPostArr[index][1] += 1;
    setPostArr(newPostArr);
  }

  function changePostTitle(index) {
    let newPostArr = [...postArr];
    newPostArr[index][0] = index + "글 수정됨";
    setPostArr(newPostArr);
  }

  function onChangeNewTitle(e) {
    setNewTitle(e.target.value);
  }

  function addPost() {
    // let copy = [...postArr];
    // copy.unshift(newTitle); // unshift 맨 앞에 추가함.
    // setPostArr(copy);
    // setNewTitle("");

    let newPostArr = [[newTitle, 0], ...postArr];
    setPostArr(newPostArr);
    setNewTitle("");
  }

  function removePost(index) {
    let newPostArr = [...postArr];
    newPostArr.splice(index, 1);
    setPostArr(newPostArr);
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
            <span className="title"
              onClick={() => {
                showModal(index);
              }}
            >
              {post[0]}
              </span>

              <span
                onClick={(e) => {
                  //e.stopPropagation(); // 이벤트 버블링 중지
                  plusGoodCount(index);
                }}
              >
                👍
              </span>

              {post[1]}

              <button
                className="remove-btn"
                onClick={() => {
                  removePost(index);
                }}
              >
                삭제
              </button>

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

      {isShowModal === true ? <Modal color="whitesmoke" background={"gray"} post={postArr[selectedIndex]} postIndex={selectedIndex} changePostTitle={changePostTitle} /> : null}

      <div>
        <input
          placeholder="New Post Title"
          value={newTitle}
          onChange={onChangeNewTitle}
        />{" "}
        <button onClick={addPost}>
          추가
        </button>
      </div>

       <Profile />{/*옛날 방식 */}
    </div>
  );
}

// 함수 첫 글자는 대문자
function Modal(props) {
  return (
    <div className="modal" style={{ background: props.background, color: props.color }}>
      <h4>{props.post[0]}</h4>
      <p>date</p>
      <p>content</p>
      <button
        onClick={() => {
          props.changePostTitle(props.postIndex);
        }}
      >
        글수정
      </button>
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



// 옛날 방식
class Profile extends React.Component {
  constructor() {
    super();
    this.state = { name: "Kim", age: 30 };
  }

  changeName = () => {
    this.setState({ name: "Park" });
  }

  render() {
    return (
      <div>
        <h3>프로필</h3>
        <p>My name is {this.state.name}.</p>
        <button
          onClick={() => {
            // name을 아예 대체하는것이 아니라 변경하는 것이다.
            this.setState({ name: "Park" });
          }}
        >
          change
        </button>
        <button onClick={this.changeName}>change</button>
      </div>
    );
  }
}