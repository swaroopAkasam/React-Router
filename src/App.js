import './App.css';
import Counter from './components/UserProfile';

const userDetails = {
  fName : "swaroop",
  lName : "akasam",
  color : "orange"
}

function App() {
  return (
    <div className="App">
      <Counter/>
    </div>
  );
}

export default App;
