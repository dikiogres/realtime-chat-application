import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";

import './Chat.css';

const ENDPOINT = 'localhosht:5000';


let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    console.log(location.search);


    // socket = io(ENDPOINT);

    setRoom(room);
    setName(name)

  });

  return (
    <h1>Chat</h1>
  );
}

export default Chat;