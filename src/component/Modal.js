import React,{useState} from "react";


export default function Modal({ handleAddItem, isModalOpen, handleModalOpen }) {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddItem({ name, content, image });
    handleModalOpen(false);
  };

  return (
    <div id="modal" className="modal-overlay" hidden={!isModalOpen}>
      <div className="modal-window">
        <div className="title">
          <h2>모달</h2>
        </div>
        <div className="close-area" onClick={() => handleModalOpen(false)}>
          X
        </div>
        <form className="content" id="form" onSubmit={handleSubmit}>
          <li>이름</li>
          <input
            id="name"
            className="name"
            placeholder="화이트와인"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <li>이미지</li>
          <input
            id="url"
            className="url"
            placeholder="URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
          <li>내용</li>
          <input
            id="intro"
            className="intro"
            placeholder="주로 청포도로 만든다네요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <button type="submit" className="submit-button">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
