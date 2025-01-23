import React from "react";
import "./Feed.css";
import { Create } from "@mui/icons-material";
import { Image } from "@mui/icons-material";
import { Subscriptions } from "@mui/icons-material";
import { CalendarViewDay } from "@mui/icons-material";
import { EventNote } from "@mui/icons-material";
import { InputOption } from "./InputOption";
export const Feed = () => {
  return (
    <div className="feed">
      <div className="   ">
        <div className="feed_input">
          <Create />
          <form>
            <input type="text" />
            <button type="submit">Send</button>
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
    </div>
  );
};
