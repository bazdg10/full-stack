import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";
import Rules from "../Instructions/Rules";
import TextContainer from '../TextContainer/TextContainer';
import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Dealer from "../Dealer/Dealer";
// import Scoreboard from "../Scoreboard/Scoreboard";
import './Chat.css';

const ENDPOINT = 'localhost:5000';

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [dealerData, setDealerData] = useState('');
  const [hider, setHider] = useState(true);
  // const [viewRules, setViewRules] = useState(1);
  // const [restrict, setRestrict] = useState(false);
  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name);
    socket.emit('join', { name, room }, (error) => {

      // console.log(scores);
      if(error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);
  
  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });
    socket.on('Dmessage', message => {
      setMessages(messages => [ ...messages, message ]);
      setHider(false);
    });    
    socket.on("roomData", ({ users, scores }) => {
      setUsers(users);
      if (scores) {
        console.log(scores);
        console.log(users)
      }
      if (users.length==4) {
        setHider(false);
      }
      // setScores(scores);
    });
}, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  const sendDealerData = (event) => {
    event.preventDefault();
      console.log('trying')
    
    if (dealerData >= 1 && dealerData <=2 ) {
      socket.emit('dealerData', dealerData, () => { setDealerData(''); });
      setHider(true)
    } else {
      alert('You choose 1 or 2 fishes');
    }
  }

  return (
    <div className="outerContainer">
      <div className="container">
          <InfoBar room={room} />
          <Messages messages={messages} name={name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
        {
        (hider ? null :  
         <Dealer dealerData={dealerData} setDealerData={setDealerData} sendDealerData={sendDealerData} />  
        )}
      </div>
      {/* ( viewRules ? <Rules setViewRules={setViewRules} viewRules={viewRules} /> :  */}
      <TextContainer users={users} />
      {/* <Scoreboard scores={scores} /> */}
    </div>
  );
}

export default Chat;