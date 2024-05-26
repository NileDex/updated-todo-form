import logo from './logo.svg';
import Navbar from './navbar';
import Home from './home';

const title = "My Todo List"

function App() {
  return (
    <div className="App">
      <div className='header'>
        <h1>{title}</h1>
      </div>
      <Navbar />
      <div className='content'>
        <Home/>

      </div>
     
    </div>
  );
}

export default App;
