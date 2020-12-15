//@ts-nocheck
import React, { useState, useEffect, useRef } from "react";
import {
  HubConnectionBuilder,
  LogLevel,
  HttpTransportType,
} from "@microsoft/signalr";

const SignalR_Client = () => {
  const [connection, setConnection] = useState(null);
  const [chat, setChat] = useState([]);
  const latestChat = useRef(null);

  latestChat.current = chat;

  useEffect(() => {
    const newConnection = new HubConnectionBuilder()
      .configureLogging(LogLevel.Debug)
      .withUrl("https://localhost:44382/chat", {
        skipNegotiation: true,
        transport: HttpTransportType.WebSockets,
      })
      .build();

    setConnection(newConnection);
  }, []);

  useEffect(() => {
    if (connection) {
      connection
        .start()
        .then(result => {
          console.log("Connected!");
        })
        .catch(e => console.log("Connection failed: ", e));
    }
  }, [connection]);

  const sendMessage = async () => {
    if (connection.connectionStarted) {
      try {
        await connection.send("SendCommand", {
          Command: "Hola",
          Token: "Esta bien",
          UserID: 3,
        });
      } catch (e) {
        console.log(e);
      }
    } else {
      alert("No connection to server yet.");
    }
  };

  return (
    <div>
      <button onClick={sendMessage}>Click</button>
    </div>
  );
};

export default SignalR_Client;
