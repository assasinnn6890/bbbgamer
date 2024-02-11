import React ,{useState}from 'react';
import './App.css';
import Game from './components/breakoutGame/game';
import Rules from './components/rules/rules';
import Connect from './Connect'

function App() {
  const [login,setLogin] = useState(false);
  return (
    <>
    {login ? (
      <div className="App">
      <Rules />
      <Game />
    </div>
    ):(
      <Connect setLogin={setLogin} login={login}/>
    )}
    </>
  );
}

export default App;
