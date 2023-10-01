import './App.css';
import MySlider from './components/Carousel';
import Header from './components/header';
import camera from  './components/camera.svg'
import { useState } from 'react';
import { getMovieReviews,getMovieId } from './components/API-data';


function App() {
  const [reviews,setReviews] = useState([]);
  const [title, setTitle] = useState("Search for a Movie to display the reviews...");

  async function handleSearch(query){
    let [movieId,title] = await getMovieId(query);
    console.log(movieId);
    let list = await getMovieReviews(movieId);
    setReviews(await list);
    setTitle(await title);
  }
  
  return (
    <div className="App">
      <Header search={handleSearch} title={title}/>
      <div className='container'>
        {(reviews.length > 0) ? <MySlider list={reviews}/> : <img src={camera} alt='...'/>} 
      </div>
    </div>
  );
}

export default App;
