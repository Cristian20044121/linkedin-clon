import React, { useEffect, useState } from "react";
import "./Feed.css";
import { Create, Image, Subscriptions, CalendarViewDay, EventNote } from "@mui/icons-material";
import { InputOption } from "./InputOption";
import { Post } from "./Post";
import { db, auth } from "./firebase";
import firebase from "./firebase";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { motion, AnimatePresence } from "framer-motion";

export const Feed = () => {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
    return () => unsubscribe();
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
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
            <button type="submit" onClick={sendPost}>Send</button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <InputOption Icon={Image} title="Photo" color="#70b5f9" />
          <InputOption Icon={Subscriptions} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNote} title="Event" color="#C0CBCD" />
          <InputOption Icon={CalendarViewDay} title="Write article" color="#7FC15E" />
        </div>
      </div>
      {/*Post */}
      <AnimatePresence>
        {Array.isArray(posts) && posts.length > 0 ? (
          posts.map(({ id, data: { name, description, message, photoUrl } }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Post name={name} description={description} message={message} photoUrl={photoUrl} />
            </motion.div>
          ))
        ) : (
          <p>No hay publicaciones disponibles</p>
        )}
      </AnimatePresence>
    </div>
  );
};
