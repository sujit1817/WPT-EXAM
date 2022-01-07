import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

export function MyComponent() {
  const [message, setMessage] = useState("");

  const [list, setMessageList] = useState([]);

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const send = () => {
    const msg = {
      message: message,
    };
    const newMessage = [msg, ...list];
    setMessageList(newMessage);
    setMessage("");
  };

  return (
    <div className="container-fluid">
      <div className="bg-danger text-light">
        <div className="d-flex mx-2 p-4 mb-2">
          <div>
            <h1>MyChatApp</h1>
            <h6>BY SUJIT MALI  | 124_KH</h6>
          </div>
        </div>
      </div>
      <div className="d-flex mb-2">
        <input
          type="text"
          placeholder="Lets chat Here..."
          className="form-control  my-1 w-50"
          value={message}
          onChange={handleMessage}
        />
        <input type="button" value="SEND" className="btn btn-outline-primary mx-2 w-25" onClick={send} />
      </div>

      {list.map((item) => (
        <div className="alert alert-secondary fs-6">{item.message}</div>
      ))}
    </div>
  );
}
