import React, { useState } from "react";
import Navbar from "../components/Navbar";

import Microphone from "../components/Microphone";
import Chat from "../components/Chat";

function SpeakerPage() {
  const [userVoiceCommands, setUserVoiceCommands] = useState<Array<string>>([
    "Hola",
    "I'm Bot",
  ]);

  function handleVoiceInput(voiceInputText: string) {
    console.log("Voice entered: ", voiceInputText);

    setUserVoiceCommands([...userVoiceCommands, voiceInputText]);
    /**
     * TODO: Send this text to the Assistant API
     */
  }

  return (
    <div>
      <Navbar />

      <Microphone onFinishListening={handleVoiceInput} />

      <Chat messages={userVoiceCommands} />
    </div>
  );
}

export default SpeakerPage;
