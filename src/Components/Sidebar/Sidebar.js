import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { useSelector } from "react-redux";
import SidebarRow from "../SidebarRow/SidebarRow";
import {
  FiberManualRecord,
  Create,
  CommentOutlined,
  Inbox,
  DraftsOutlined,
  BookmarkBorderOutlined,
  PeopleAlt,
  Apps,
  FileCopy,
  ExpandMore,
  ExpandLess,
  Add,
} from "@material-ui/icons";
import { db } from "../firebase/Firebase";
import { collection, onSnapshot, query } from "firebase/firestore";

const Sidebar = () => {
  const user = useSelector((state) => state.user);
  const [channel, setchannel] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "rooms"));
    onSnapshot(q, (snapShot) => {
      setchannel(
        snapShot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      );
    });
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>{user.displayName}</h2>
          <h4>
            <FiberManualRecord /> {user.email}
          </h4>
        </div>
        <Create />
      </div>

      <SidebarRow title="Threads" Icon={CommentOutlined} />
      <SidebarRow title="Mentions & Reactions" Icon={Inbox} />
      <SidebarRow title="Saved items" Icon={DraftsOutlined} />
      <SidebarRow title="Channel browser" Icon={BookmarkBorderOutlined} />
      <SidebarRow title="People & usergroup" Icon={PeopleAlt} />
      <SidebarRow title="Apps" Icon={Apps} />
      <SidebarRow title="File Browser" Icon={FileCopy} />
      <SidebarRow title="ShowLess" Icon={ExpandMore} />
      <hr />
      <SidebarRow title="ShowMore" Icon={ExpandLess} />
      <hr />
      <SidebarRow title="Add Channel" Icon={Add} addChannel />
      {channel.map((channel) => (
        <SidebarRow key={channel.id} title={channel.name} id={channel.id} />
      ))}
    </div>
  );
};

export default Sidebar;
