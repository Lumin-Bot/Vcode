import logo from './logo.svg';
import './App.css';
import Greet from './components/greet';
import Welcome from './components/welcome';
import Hello from './components/hello';

function App() {
  
  return (
    <div className="App">
      <Greet name= "Bruce" hero= "Batman"/>
      <Greet name= "Clark" hero= "Superman"/>
      <Greet name= "Diana" hero= "Wonder Woman"/>
    </div>
  );
}

export default App;
