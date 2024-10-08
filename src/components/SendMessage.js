import React from "react";
import React, { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
const SendMessage = ({ scroll }) => {
const sendMessage = async (event) => {
  event.preventDefault();
  if (message.trim() === "") {
    alert("Enter valid message");
    return;
  }
  const { uid, displayName, photoURL } = auth.currentUser;
  await addDoc(collection(db, "messages"), {
    text: message,
    name: displayName,
    avatar: photoURL,
    createdAt: serverTimestamp(),
    uid,
  });
  setMessage("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };
};

return (
  <form onSubmit={(event) => sendMessage(event)} className="send-message"> </form>

) 

export default SendMessage;
