import React from 'react';
import mic from "../assets/mic.svg";

function SpeakerPage() {
  return <div>
    <nav>
      <button>Log Out</button>
    </nav>

    <div className="microphone">      
      <img src={mic} alt="mic" className="microphone-icon"/>
      <p>Push To Talk</p>
    </div>

    <div>
      <p>View List</p>
    </div>
  </div>;
}


export default SpeakerPage;