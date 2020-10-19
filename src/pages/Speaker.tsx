import React from "react";
import Navbar from "../components/Navbar";

import mic from "../assets/mic.svg";

function SpeakerPage() {
  return (
    <div>
      <Navbar />

      <div className='microphone'>
        <img src={mic} alt='mic' className='microphone-icon' />
        <p>Push To Talk</p>
      </div>

      <footer>
        <p>View List</p>
      </footer>
    </div>
  );
}

export default SpeakerPage;
