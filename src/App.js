import React, { useEffect, useState }  from "react";
import './App.css';
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import Pusher from 'pusher-js';
import axios from './axios';

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() =>{
    axios.get('/message/sync')
    .then(response => {
      setMessages(response.data);
    })
  }, []);
  useEffect(() => {
    const pusher = new Pusher('2898904207b6ecce712a', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      //alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage]);
    });

    return () =>{
      channel.unbind_all();
      channel.unsubscribe();
    }

  }, [messages]);

  console.log(messages);

  return (
    <div className="app">
      <div className="app_body">
        {/* Sidebar  */}
        <Sidebar />

        {/* chat component */}
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
