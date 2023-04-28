import './App.css';
// import DefaultPage from './DefaultPage';
import Navbar from './Navbar';
import LocationCard from './LocationCard';
import locationsJson from './locationsJson';
import { useState, useEffect } from 'react';
import { NYT_API_KEY } from './apiKeys';


function App() {

  const [userName, setUserName] = useState('John')
  const [city, setCity] = useState('Berlin')
  const [joke, setJoke] = useState('')
  const [news, setNews] = useState('')


  // Get random joke from API
  useEffect( function() {
    fetch('https://v2.jokeapi.dev/joke/Any?type=twopart')
    .then(res => res.json())
    .then(data => setJoke([data.setup, data.delivery]))
  }, [])

 // Get news from NYTimes API. For API Key and API Docs: https://developer.nytimes.com/
  useEffect( function() {
    fetch('https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=' + NYT_API_KEY)
    .then(res => res.json())
    .then(data => setNews(data.results[0]))
    // setNews("Don't abuse the API! " + NYT_API_KEY)
  }, [])


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
      // console.log(event.target);
      setUserName( event.target.previousSibling.value)
      setCity( event.target.parentNode.previousSibling.previousSibling.previousSibling.innerText)
    }


  const locationCards = locationsJson.map((locationItem) =>
    <LocationCard
      key={locationItem.id}
      location={locationItem.location}
      photo={locationItem.photo}
      description={locationItem.description}
      latitude={locationItem.latitude}
      longitude={locationItem.longitude}
      clickHandler={clickHandler}
    />)
  
  return (
    <div className="App">
      <Navbar name={userName} city={city}/>
      {/* <DefaultPage /> */}
      <div className='App-body'>
        {locationCards}
        <LocationCard
          key={locationCards.length}
          location='Random Pic and Joke'
          photo='https://picsum.photos/350/250'
          description={joke[0] + ' ' + joke[1]}
          clickHandler={clickHandler}
        />
        <LocationCard
          key={locationCards.length+1}
          location='Most Viewed NYTimes Article'
          description={news.title}
          description2={ news.abstract}
          clickHandler={clickHandler}
        />
      </div>
    </div>
  );
}

export default App;
