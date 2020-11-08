import React from "react";
import ClickNHold from "react-click-n-hold";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import mic from "../assets/mic.svg";

interface Prop {
  onFinishListening: (voiceText: string) => void;
}

function Microphone(props: Prop) {
  const { transcript } = useSpeechRecognition();

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <div>El microfono no esta soportado por tu browser</div>;
  }

  function handleMicInit() {
    console.log("Started listening");

    SpeechRecognition.startListening({
      language: "en-US",
    });
  }

  function handleMicStop() {
    console.log("Stopped listening");

    SpeechRecognition.stopListening();

    props.onFinishListening(transcript);
  }

  return (
    <>
      <div className='microphone'>
        <ClickNHold
          onStart={handleMicInit} // Start callback
          onEnd={handleMicStop}
        >
          <img
            src={mic}
            alt='mic'
            className='microphone-icon'
            onMouseDown={handleMicInit}
          />
        </ClickNHold>
        <p>Press and Hold To Talk</p>
      </div>
    </>
  );
}

export default Microphone;
