import { mockGifs } from "./mock-data/gifs.mock";

export const GifsApp = () => {
  return(
    <>
    <div className="content-center">
    <h1>Buscardor de Gifs</h1>
    <p>Descubre y comparte el gif perfecto</p>
    </div>

    <div className="search-container">
        <input type="text" placeholder="Buscar gifs"/>
        <button>Buscar</button>
    </div>

    <div className="previous-searches">
        <h2>Busquedas Previas</h2>
        <ul className="previous-searches-list">
            <li>Goku</li>
        </ul>
    </div>


    <div className="gifs-container">
        {
            mockGifs.map((gif)=>(
                <div key={gif.id} className="gif-card">
                    <img src={gif.url} alt={gif.title}/>
                    <h3>{gif.title}</h3>
                    <p>
                        {gif.width}x{gif.height} (1.5mb)
                    </p>
                </div>
            ))
        }
    </div>

    </>

  );
};
