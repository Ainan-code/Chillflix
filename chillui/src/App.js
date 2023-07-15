
import './App.css';
import Header from './includes/Header';
import Homepage from './pages/Homepage';
import PopulateApi from './components/popularmovies';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Homepage></Homepage>
      <PopulateApi></PopulateApi>
      
    </div>
  );
}

export default App;
