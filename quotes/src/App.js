import logo from './logo.svg';
import './App.css';
import Quotes from './components/Quotes';

function App() {
  return (
    <div className="App">
       <h3 style={{textAlign:"center",color:"White",margin:"30px 15px",fontFamily:"'Nunito', sans-serif"}}>QUOTE GENERATOR</h3>
      <Quotes />
    </div>
  );
}

export default App;
