import React, { useEffect, useState } from "react";
import "./Chat.css";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../../Components/firebase/Firebase";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  deleteDoc,
} from "firebase/firestore";
import { InfoOutlined } from "@material-ui/icons";
import ChatInput from "../../Components/ChatInput/ChatInput";
import Message from "../../Components/message/Message";
import StarPurple500OutlinedIcon from "@mui/icons-material/StarPurple500Outlined";
import { Button } from "@material-ui/core";
import { Delete } from "@material-ui/icons";

const Chat = () => {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState([]);
  const [roomMessages, setRoomMessages] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (roomId) {
      const q = query(doc(db, "rooms", roomId));
      onSnapshot(q, (snapShot) => {
        setRoomDetails(snapShot.data());
      });

      const querys = query(
        collection(db, "rooms", roomId, "messages"),
        orderBy("timestamp", "asc")
      );
      onSnapshot(querys, (snapShot) => {
        setRoomMessages(snapShot.docs.map((doc) => doc.data()));
      });
    }
  }, [roomId]);

  const deletechannel = async () => {
    const userdoc = doc(db, "rooms", roomId);
    await deleteDoc(userdoc);
    navigate("/");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong># {roomDetails?.name}</strong>
            <StarPurple500OutlinedIcon />
          </h4>
        </div>
        <div className="chat__headerRight">
          <p>
            <InfoOutlined /> Details
          </p>
          <Button onClick={deletechannel}>
            <Delete />
          </Button>
        </div>
      </div>

      <div className="chat__messages">
        {roomMessages.map(({ message, timestamp, user, userImage }, index) => (
          <Message
            key={index}
            message={message}
            timestamp={timestamp}
            user={user}
            userImage={userImage}
          />
        ))}
      </div>

      <ChatInput channelName={roomDetails?.name} channelId={roomId} />
    </div>
  );
};

export default Chat;
