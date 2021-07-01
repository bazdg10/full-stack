import axios from 'axios';
import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Join.css';
// import { getRoom } from '../api/index';

const Join = () => {

const [name, setName] = useState('');
const [room, setRoom] = useState()

const handleClick = async () => {
  try {
  const res = await axios.post('http://localhost:5000/getRoom', { name: `${name}` })
   setRoom(res.data.room);
  console.log('API response generated');
  console.log(room)
} catch(error) {
    console.log(error);
  }
}

  return (
    <div className="joinOuterContainer" > 
      <div className="joinInnerContainer" > 
        <h1 className="heading">Join</h1>
          <div>
            <input placeholder="Username" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
            {/* <input placeholder="Room" className="joinInput" type="text" onChange={(event) => setRoom(event.target.value)} /> */}
          </div>  
        
          { room!==undefined ?
      (        <Link onClick={event => (!name ) ? event.preventDefault() : null } to={`/chat?name=${name}&room=${room}`}>
      <button className="button mt-20" type="submit">Sign In</button>
      </Link>) : (<button className="button mt-20" onClick={handleClick} >Get A Room</button>) }

{/* 
        <Link onClick={event => (!name ) ? event.preventDefault() : null } to={`/chat?name=${name}&room=${room}`}>
        <button className="button mt-20" type="submit">Sign In</button>
        </Link>   */}
        <div>
          
          </div>
      </div>
    </div>
  )
}

export default Join


