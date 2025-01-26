import React, { useEffect, useState } from "react";
import "./Feed.css";
import { Create } from "@mui/icons-material";
import { Image } from "@mui/icons-material";
import { Subscriptions } from "@mui/icons-material";
import { CalendarViewDay } from "@mui/icons-material";
import { EventNote } from "@mui/icons-material";
import { InputOption } from "./InputOption";
import { Post } from "./Post";
import { db, auth } from "./firebase";
import firebase from "./firebase";

export const Feed = () => {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: "Cristian Caro",
      description: "This is a test post.",
      message: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <Create />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Start a post"
            />
            <button type="submit" onClick={sendPost}>
              Send
            </button>
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
      {Array.isArray(posts) && posts.length > 0 ? (
        posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))
      ) : (
        <p>No hay publicaciones disponibles</p>
      )}
    </div>
  );
};
