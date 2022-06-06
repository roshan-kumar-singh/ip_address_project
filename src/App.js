import React from 'react';
import {useState,useEffect} from 'react'
import axios from 'axios'

function App() {
  const [ip, setIP] = useState('');

const ipaddress=()=>{
	const getData = async () => {
		const res = await axios.get('https://geolocation-db.com/json/')
		console.log(res.data);
		setIP(res.data.IPv4)
	  }
	  getData()
	
	}
//   useEffect( () => {
    

//   }, [])

  return (
	  
    <div className="App">
      <h2>My IP Address is</h2>
	  {/* document.body.style.backgroundImage = "https://picsum.photos/200/300"; */}
	  <button type="button" class="btn btn primary my-3" onClick={ipaddress}> check Ip Address</button>
      <h4>{ip}</h4>
    </div>  
  );
}

export default App;




