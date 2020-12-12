import React from "react";
import Navbar from "../components/Navbar";

import Microphone from "../components/Microphone";
import SignalR_Client from "../components/SignalR_Client";
import Chat, { addUserMessage, addResponseMessage } from "../components/Chat";

function SpeakerPage() {
  function handleNewCommand(command: string) {
    console.log("Command from voice: ", command);

    if (command !== "") addUserMessage(command);

    /**
     * TODO: Send this command to the Assistant API
     */
  }

  function handleVoiceInput(voiceInputText: string) {
    handleNewCommand(voiceInputText);
  }

  function handleNewMessageFromChat(message: string) {
    console.log("Command written on chat: ", message);

    switch (message) {
      case "Show me more":
        addResponseMessage("No");
        break;

      case "mov eax, 0":
        addResponseMessage("What have you done!");
        break;
    }
  }

  return (
    <div>
      <Navbar />

      <SignalR_Client />

      <Microphone onFinishListening={handleVoiceInput} />

      <Chat handleNewUserMessage={handleNewMessageFromChat} />
    </div>
  );
}

export default SpeakerPage;
