import { Button } from "@material-ui/core";
import React, { useState } from "react";
import "./ChatInput.css";
import { useSelector } from "react-redux";
import { addDoc, collection } from "firebase/firestore";
import { db, timestamp } from "../firebase/Firebase";
import { Send } from "@material-ui/icons";

const ChatInput = ({ channelName, channelId }) => {
  const [input, setInput] = useState("");
  const user = useSelector((state) => state.user);

  const sendMessage = async () => {
    if (channelId) {
      await addDoc(collection(db, "rooms", channelId, "messages"), {
        message: input,
        timestamp,
        user: user.displayName,
        userImage: user.photoURL,
      });
      setInput("");
    }
  };

  return (
    <div className="chatInput" style={{ background: "red" }}>
      <div className="input">
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName}`}
          value={input}
        />

        <Button type="submit" onClick={sendMessage}>
          <Send />
        </Button>
      </div>
    </div>
  );
};

export default ChatInput;
