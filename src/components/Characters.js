export default function Characters(props) {
    const { characters, setCharacters } = props;

    const resetCharacters = ()=>{
        setCharacters(null);
    }
    return(
        <div className="characters">
            <h1>
                PERSONAJES
            </h1>
            <span className="back-home" onClick={resetCharacters}> VOlver a la home </span>
            
            <div className="container-characters">
            {characters.map((character, index)=> (
                <div className="character-container" key={index}>
                    <div>
                        <img src={character.image} alt="{character.name"></img>

                    </div>
                    <div>
                        <h3>{character.name}</h3>
                        <h6>{character.status === "Alive" ? (
                            <>
                            <span className="alive" />
                            Activo
                            </>
                        ):(
                            <>
                            <span className="dead">
                                Dead
                            </span>
                            </>
                        )}
                    </h6>
                    <p >
                        <span className="text-gray">Episodios : </span>
                        <span >{character.episode.length}</span>

                    </p>
                    <p >
                        <span className="text-gray">Especie : </span>
                        <span >{character.species}</span>

                    </p>
                    </div>
                </div>
            ) )}
            </div> 
            <span className="back-home"  onClick={resetCharacters}></span>
        </div>
       
    )
    
}