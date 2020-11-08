import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Microphone from "../components/Microphone";

function SpeakerPage() {
  function handleVoiceInput(voiceInputText: string) {
    console.log("Voice entered: ", voiceInputText);

    /**
     * TODO: Send this text to the Assistant API
     */
  }

  return (
    <div>
      <Navbar />

      <Microphone onFinishListening={handleVoiceInput} />

      <Footer />
    </div>
  );
}

export default SpeakerPage;
