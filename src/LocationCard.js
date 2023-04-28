import './LocationCard.css'
import { useState, useEffect } from 'react';

function LocationCard(props) {

  const [berlinTemperature, setBerlinTemperature] = useState(0)
  const [joke, setJoke] = useState([])

  useEffect( function() {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true')
    .then(res => res.json())
    .then(data => setBerlinTemperature(data.current_weather.temperature))
  }, [])

  useEffect( function() {
    fetch('https://v2.jokeapi.dev/joke/Any?type=twopart')
    .then(res => res.json())
    .then(data => setJoke([data.setup, data.delivery]))
  }, [])


  function mouseEnterHandler(event) {
      // assign random color to button
      // https://css-tricks.com/snippets/javascript/random-hex-color/
      event.target.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16)
  }

  return (
    <div className="LocationCard">
      <h2 className="LocationCard-title">{props.location}</h2>
      <div className="LocationCard-photoContainer">
        <img src={props.photo} className="LocationCard-photo" alt="logo" />
        <div className='LocationCard-description'>
          <p>{props.description}</p>
          <p>It's {berlinTemperature} ºC in Berlin now.</p>
          <p>{joke[0]}</p>
          <p>{joke[1]}</p>
        </div>
      </div>
      <input defaultValue={'John'}></input>
      <button
        className='LocationCard-button'
        onClick={(event) => props.clickHandler(event)}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseEnterHandler}>
        Click to change name (and other things)
      </button>
    </div>
  );
}

export default LocationCard;