import React, { useState } from "react";
import "./Feed.css";
import { Create } from "@mui/icons-material";
import { Image } from "@mui/icons-material";
import { Subscriptions } from "@mui/icons-material";
import { CalendarViewDay } from "@mui/icons-material";
import { EventNote } from "@mui/icons-material";
import { InputOption } from "./InputOption";
import { Post } from "./Post";
export const Feed = () => {
  const [posts, setPosts] = useState([]);
  const sendPost = e => {
    e.preventDefault();
  }

  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <Create />
          <form>
            <input type="text" />
            <button type="submit" onClick={sendPost}>Send</button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <InputOption Icon={Image} title="Photo" color="#70b5f9" />
          <InputOption Icon={Subscriptions} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNote} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDay}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>
      {/*Post */}
      {Post.map((post) => (
        <post />
      ))}
      <Post
        name="Cristian caro"
        description="This is a test"
        message="Wowo this worked"
      />
    </div>
  );
};
