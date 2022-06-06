import React from 'react';
import {useState,useEffect} from 'react'
import axios from 'axios'

function App() {
  const [ip, setIP] = useState('');

  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    console.log(res.data);
    setIP(res.data.IPv4)
  }
  
  useEffect( () => {
    getData()

  }, [])

  return (
    <div className="App">
      <h2>My IP Address is</h2>
      <h4>{ip}</h4>
    </div>
  );
}

export default App;




