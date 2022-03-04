import React from "react";
import "./SidebarRow.css";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase/Firebase";
import { addDoc, collection } from "firebase/firestore";

const SidebarRow = ({ title, Icon, addChannel, id }) => {
  const navigate = useNavigate();

  const selectchannel = () => {
    if (id) {
      navigate(`/room/${id}`);
    } else {
      navigate("/");
    }
  };

  const addchannel = async () => {
    const channelName = prompt("Please enter Chanel name");
    if (channelName) {
      await addDoc(collection(db, "rooms"), {
        name: channelName,
      });
    }
  };

  return (
    <div
      className="sidebarRow"
      onClick={addChannel ? addchannel : selectchannel}
    >
      {Icon && <Icon className="sidebarIcon" />}
      {Icon ? (
        <h4>{title}</h4>
      ) : (
        <h4 className="sidebarRow__chaneloption">
          <span className="sidebarRow__hash"> #</span>
          {title}
        </h4>
      )}
    </div>
  );
};

export default SidebarRow;
