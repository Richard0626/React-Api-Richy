import { useState } from 'react';
import './App.css';
import imageRich from './img/rick-morty.png';
import Characters from './components/Characters';

function App() {

  const [characters,setCharacters] = useState(null);

  const reqApi = async () =>{
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const characterApi = await api.json();
    setCharacters(characterApi.results);
  }
  console.log(characters);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>RIck & Morty</h1>
        {characters ? (
        <Characters characters={characters} setCharacters={setCharacters} ></Characters>

        ): (
          <>

          <img src={imageRich} alt="Rick & Morty" className='img-home'></img>
          <button onClick={reqApi} className='btn-search'>
            Buscar personales
          </button>

          </>
          
        )}
        
      
      
      </header>
    </div>
  );
}

export default App;
