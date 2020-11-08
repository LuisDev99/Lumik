import React from "react";
import { Widget, addResponseMessage } from "react-chat-widget";

import ai from "../assets/ai.svg";
import bot from "../assets/bot.svg";

import "react-chat-widget/lib/styles.css";

function Chat(prop: { msg: string }) {
  addResponseMessage(prop.msg);

  return (
    <div>
      <Widget
        title='Lumik Assistant'
        titleAvatar={ai}
        profileAvatar={bot}
        subtitle='In here, you will see your interactions with Lumik'
      />
    </div>
  );
}

export default Chat;
