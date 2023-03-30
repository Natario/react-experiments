import { useState } from 'react';
import './LocationCard.css'

function LocationCard(props) {

    const [name, setName] = useState('John')

    function clickHandler(event) {

        // turn text upside down (and vice versa)
        // https://stackoverflow.com/a/53405390/3174659
        // returns matrix(1,0,0,1,0,0)
        var matrix = window.getComputedStyle(event.target).transform;
        var matrixArray = matrix.replace("matrix(", "").split(",");
        // var scaleX = parseFloat(matrixArray[0]); // convert from string to number
        var scaleY = parseFloat(matrixArray[3]);
        event.target.style.transform = 'scale(1, ' + -scaleY + ')';

        // and then process name
        setName( event.target.previousSibling.value)
    }

    function mouseEnterHandler(event) {
        // assign random color to button
        // https://css-tricks.com/snippets/javascript/random-hex-color/
        event.target.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16)
    }

    return (
      <div className="LocationCard">
        <h2 className="LocationCard-title">{props.location}</h2>
        <img src={props.photo} className="LocationCard-photo" alt="logo" />
        <p className='LocationCard-description'>{props.description}</p>
        <input></input>
        <button className='LocationCard-button' onClick={clickHandler} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseEnterHandler}>Click me</button>
        <p>Hi {name}!</p>
      </div>
    );
  }
  
  export default LocationCard;