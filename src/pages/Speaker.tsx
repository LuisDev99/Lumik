import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Microphone from "../components/Microphone";

function SpeakerPage() {
  function handleFinishMic(voiceInputText: string) {
    console.log("Voice entered: ", voiceInputText);
  }

  return (
    <div>
      <Navbar />

      <Microphone onFinishListening={handleFinishMic} />

      <Footer />
    </div>
  );
}

export default SpeakerPage;
