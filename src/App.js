import './App.css';
// import DefaultPage from './DefaultPage';
import Navbar from './Navbar';
import LocationCard from './LocationCard';
import locationsJson from './locationsJson';

function App() {

  const locationCards = locationsJson.map((locationItem) =>
    <LocationCard
      key={locationItem.id}
      location={locationItem.location}
      photo={locationItem.photo}
      description={locationItem.description}
    />)
  
  return (
    <div className="App">
      <Navbar />
      {/* <DefaultPage /> */}
      <div className='App-body'>
        {locationCards}
        <LocationCard
          location='Random Pic'
          photo='https://picsum.photos/350'
          description='????? ????? ????? ????? ????? ????? ????? ????? ????? ????? ????? ????? ????? ????? ?????'
        />
      </div>
    </div>
  );
}

export default App;
