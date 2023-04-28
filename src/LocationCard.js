import './LocationCard.css'
import { useState, useEffect } from 'react';

function LocationCard(props) {

  const [temperature, setTemperature] = useState(null)

  // Get current weather for each location
  useEffect( function() {
    if(props.latitude) {
      fetch('https://api.open-meteo.com/v1/forecast?latitude=' + props.latitude + '&longitude=' + props.longitude + '&current_weather=true')
      .then(res => res.json())
      .then(data => setTemperature(data.current_weather.temperature))
    }
  }, [props.latitude, props.longitude])

  // assign random color to button  https://css-tricks.com/snippets/javascript/random-hex-color/
  function mouseEnterHandler(event) {
      event.target.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16)
  }

  return (
    <div className="LocationCard">
      <h2 className="LocationCard-title">{props.location}</h2>
      <div className="LocationCard-photoContainer">
        <img src={props.photo} className="LocationCard-photo" alt="" />
      </div>
      <div className='LocationCard-description'>
        <p>{props.description}</p>
        {props.description2 && <p>{props.description2}</p>}
        {temperature && <p>It's {temperature} ºC in {props.location} now.</p>}
      </div>
      <div className="LocationCard-formContainer">
        <input defaultValue={'John'}></input>
        <button
          className='LocationCard-button'
          onClick={(event) => props.clickHandler(event)}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseEnterHandler}>
          Click to change name (and other things)
        </button>
      </div>
    </div>
  );
}

export default LocationCard;