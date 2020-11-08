import React, { useEffect, useCallback } from "react";
import { Widget, addResponseMessage } from "react-chat-widget";

import ai from "../assets/ai.svg";
import bot from "../assets/bot.svg";

import "react-chat-widget/lib/styles.css";

interface Prop {
  messages: Array<string>;
}

function Chat(props: Prop) {
  const { messages } = props;

  const loadMessages = useCallback(() => {
    /**
     * If this is the first time that this component is rendered,
     * then loop through all the messages and display them into the chat
     */
    messages.forEach((msg: any) => addResponseMessage(msg));

    /**
     *  Add this comment to avoid useless warning ->
     *  which complains about not putting messages prop inside the dependency list
     */

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(loadMessages, [loadMessages]); // Load all messages only if this is the first time this component is being rendered

  useEffect(() => {
    /* If the prop messages changes, and the component was already rendered, then just display the last message in the array */
    addResponseMessage(messages[messages.length - 1]);
  }, [messages]);

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
