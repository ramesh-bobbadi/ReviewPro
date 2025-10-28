import './App.css';
import StarRating from './components/star_rating/index'
function App() {
  return (
    <div className="App">
    <StarRating noOfStars={10} name={'ramesh'}/>
    </div>
  );
}

export default App;
