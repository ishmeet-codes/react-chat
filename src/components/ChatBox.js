import React , { useEffect, useRef, useState } from "react";
import Message from "./Message";
import SendMessage from "./SendMessage";

const scroll = useRef();

const ChatBox = () => {
  return (
    <main className="chat-box">
      <div className="messages-wrapper">
        <Message />
      </div>
      <SendMessage />
      <span ref={scroll}></span>
   <SendMessage scroll={scroll} />
    </main>
  );
};

export default ChatBox;
