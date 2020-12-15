import React from "react";
import Navbar from "../components/Navbar";

import Microphone from "../components/Microphone";
import Chat, { addUserMessage, addResponseMessage } from "../components/Chat";
import { BotService } from "../services/BotService";

function SpeakerPage() {
  async function handleNewCommand(command: string) {
    console.log("Command from voice: ", command);

    try {
      var response = await new BotService().sendCommand({
        command: command,
        token: "Rakata",
        userID: "1",
      });

      const delimitedLines = response.data.split(/">>>"|\n/);

      delimitedLines.forEach(str => addResponseMessage(str));
    } catch (e) {
      addResponseMessage(
        "You crashed my server! You found a case I have yet to fix, causing my server to rakata and crash"
      );
    }
  }

  function handleVoiceInput(voiceInputText: string) {
    if (voiceInputText !== "") addUserMessage(voiceInputText);

    handleNewCommand(voiceInputText);
  }

  function handleNewMessageFromChat(message: string) {
    handleNewCommand(message);
  }

  return (
    <div>
      <Navbar />

      <Microphone onFinishListening={handleVoiceInput} />

      <Chat handleNewUserMessage={handleNewMessageFromChat} />
    </div>
  );
}

export default SpeakerPage;
