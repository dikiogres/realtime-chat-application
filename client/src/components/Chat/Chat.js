import React, { useState, useEffect } from "react";
import useLocation from 'react-router';
import queryString from 'stringquery';
import io from "socket.io-client";

import './Chat.css';

const ENDPOINT = 'localhosht:5000';


let socket;

const Chat = ({ location }) => {
    // const handleQueryString = useLocation().search;
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

  useEffect(() => {
    const data = new URLSearchParams(location.search);
    // const { name, room } = queryString.parse(location.search);

    //console.log(location.search);
    console.log(data);

    // socket = io(ENDPOINT);

    // setRoom(room);
    // setName(name)

  });

  return (
    <h1>Chat</h1>
  );
}

export default Chat;