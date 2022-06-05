import './App.css';
import React, { useState } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './component/Header'
// import Main from './component/Main'
import Modal from './component/Modal';
// import EmptyPage from './component/EmptyPage'

function App() {

    const initData = [
      {
        name: "소주",
        content: "저는 소주를 안 좋아해요!",
        image:
          "https://images.unsplash.com/photo-1544782321-8fab42cfd62e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070",
      },
      {
        name: "맥주",
        content: "요즘 흑맥주가 좋아요.",
        image:
          "https://images.unsplash.com/photo-1436076863939-06870fe779c2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070",
      },
      {
        name: "샴페인",
        content: "샴페인 좋아요~ 샴페인 좋아요~",
        image:
          "https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2157",
      },
      {
        name: "와인",
        content: "와인의 매력을 아직 깨닫지 못했어요.",
        image:
          "https://images.unsplash.com/photo-1568213816046-0ee1c42bd559?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072",
      },
      {
        name: "위스키",
        content: "먹어본 적이 없을 무!",
        image:
          "https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069",
      },
    ];
  
      const [data, setData] = useState(initData);
      const [isModalOpen, setIsModalOpen] = useState(false);

      let handleAddItem = (item) => {
        setData([...data, item]);
      };

      let handleModalOpen = (value) => {
        setIsModalOpen(value);
      };
  
      // let coonsole = (e) => {
      //     // console.log("button is working? ")
      //   console.log(e);
      // }
  
  return (
    <>
      <Header />
      <main>
        <div className="sidebar">
          <button
            id="btn-modal"
            type="button"
            onClick={() => setIsModalOpen(true)}
            // onClick={coonsole}
          >
            추가
          </button>
          {data.map((item) => (
            <span key={item.name}>{item.name}</span>
          ))}
          {/* <span>소주</span>
          <span>맥주</span>
          <span>샴페인</span>
          <span>와인</span>
          <span>럼</span> */}
        </div>
        <section className="container">
          {data.map((item) => (
            <div className="card" key={item.name}>
              <img src={item.image} alt={item.name} />
              <span>{item.content}</span>
            </div>
          ))}
          {/* <div className="card">
            <img
              src="https://images.unsplash.com/photo-1544782321-8fab42cfd62e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070"
              alt="소주"
            />
            <span>저는 소주를 안 좋아해요!</span>
          </div>
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1436076863939-06870fe779c2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070"
              alt="맥주"
            />
            <span>애플퐉스같은 맛있는 맥주가 좋아요.</span>
          </div>
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2157"
              alt="칵테일"
            />
            <span>샴페인 좋아요~ 샴페인 좋아요~</span>
          </div>
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1568213816046-0ee1c42bd559?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072"
              alt="와인"
            />
            <span>와인의 매력을 아직 깨닫지 못했어요.</span>
          </div>
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069"
              alt="위스키"
            />
            <span>먹어본 적이 없을 무!</span>
          </div> */}
        </section>
      </main>
      <Modal
        handleAddItem={handleAddItem}
        isModalOpen={isModalOpen}
        handleModalOpen={handleModalOpen}
      />
      {/* <div
        id="modal"
        className="modal-overlay"
      >
        <div className="modal-window">
          <div className="title">
            <h2>모달</h2>
          </div>
          <div className="close-area">X</div>
          <form className="content" id="form">
            <li>이름</li>
            <input
              id="name"
              className="name"
              placeholder="화이트와인"
              type="text"
              required
            />
            <li>이미지</li>
            <input id="url" className="url" placeholder="URL" required />
            <li>내용</li>
            <input
              id="intro"
              className="intro"
              placeholder="주로 청포도로 만든다네요"
              required
            />
            <button type="submit" className="submit-button">
              Save
            </button>
          </form>
        </div>
      </div> */}
    </>
  );
}

export default App;
