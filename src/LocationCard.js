import './LocationCard.css'

function LocationCard(props) {

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
          <p className='LocationCard-description'>{props.description}</p>
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