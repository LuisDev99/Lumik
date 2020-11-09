import React from "react";
import { Widget, addResponseMessage, addUserMessage } from "react-chat-widget";

import ai from "../assets/ai.svg";
import bot from "../assets/bot.svg";

import "react-chat-widget/lib/styles.css";

interface Prop {
  handleNewUserMessage: (newMessage: string) => void;
}

function Chat(props: Prop) {
  return (
    <div>
      <Widget
        title='Lumik Assistant'
        titleAvatar={ai}
        profileAvatar={bot}
        handleNewUserMessage={props.handleNewUserMessage}
        subtitle='In here, you will see your interactions with Lumik'
      />
    </div>
  );
}

export default Chat;
export { addResponseMessage, addUserMessage };
