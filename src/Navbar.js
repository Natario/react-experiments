import './Navbar.css'
import logo from './logo.svg'
import { useState, useEffect } from 'react';

function Navbar(props) {

  const [characterName, setCharacterName] = useState('No one')
  const [characterId, setCharacterId] = useState(1)

  useEffect( function() {
    fetch('https://swapi.dev/api/people/' + characterId)
    .then(res => res.json())
    .then(data => setCharacterName(data.name))
  }, [characterId])

  function handleClick() {
    setCharacterId((prevCharacterId) => prevCharacterId + 1)
  }
    
  return (
    <div className="Navbar">
      <img src={logo} className="Navbar-logo" alt="logo" />
      <div className="Navbar-content">
        <h3 className="Navbar-title">Hi {props.name} from {props.city}! {characterName} is with you.</h3>
        <button className="Navbar-button" onClick={handleClick}>Next character</button>
      </div>
    </div>
  );

}

export default Navbar;