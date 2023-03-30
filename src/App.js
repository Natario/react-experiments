import './App.css';
// import DefaultPage from './DefaultPage';
import Navbar from './Navbar';
import LocationCard from './LocationCard';
import locationsJson from './locationsJson';
import { useState } from 'react';

function App() {

  const [userName, setUserName] = useState('John')

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
      setUserName( event.target.previousSibling.value)
    }

  const locationCards = locationsJson.map((locationItem) =>
    <LocationCard
      key={locationItem.id}
      location={locationItem.location}
      photo={locationItem.photo}
      description={locationItem.description}
      clickHandler={clickHandler}
    />)
  
  return (
    <div className="App">
      <Navbar name={userName}/>
      {/* <DefaultPage /> */}
      <div className='App-body'>
        {locationCards}
        <LocationCard
          key={locationCards.length}
          location='Random Pic'
          photo='https://picsum.photos/350'
          description='????? ????? ????? ????? ????? ????? ????? ????? ????? ????? ????? ????? ????? ????? ?????'
          clickHandler={clickHandler}
        />
      </div>
    </div>
  );
}

export default App;
