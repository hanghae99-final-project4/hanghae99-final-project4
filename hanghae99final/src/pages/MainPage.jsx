import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { io } from "socket.io-client";
import axios from "axios";
const MainPage = () => {
  const socket = io("https://cheolsu.shop", {
    transports: ["websocket"],
  });
  const [message, setMessage] = useState("");
  const messageSendHandler = () => {
    socket.emit("hey", message);
    // console.log(message);
    // socket.on("hi", (data) => console.log(data));
  };

  const GetChats = async () => {
    try {
      const { data } = await axios.post("https://cheolsu.shop", "hi");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {}, [GetChats()]);

  return (
    <div>
      <input
        name={message}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={() => messageSendHandler()}>버튼</button>
    </div>
  );
};

export default MainPage;
