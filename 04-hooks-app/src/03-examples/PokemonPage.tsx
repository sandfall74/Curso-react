import { useCounter } from "./Hooks/useCounter";
import { usePokemon } from "./Hooks/usePokemon";


export const PokemonPage = () => {

    const {counter,decrement,increment,reset}=useCounter();
    const {pokemon,isLoading} = usePokemon({id:counter});
    if(isLoading){
        return (
            <div className="bg-gradient flex flex-col items-center">
                <h1 className="text-2xl font-thin text-white">Cargando...</h1>
            </div>
        )
    }
    if(!pokemon){
        return (
            <div className="bg-gradient flex flex-col items-center">
                <h1 className="text-2xl font-thin text-white">No hay pokemon</h1>
            </div>
        )
    }
  return (
    <div className="bg-gradient flex flex-col items-center">
      <h1 className="text-2xl font-thin text-white">Pokémon</h1>
      <h3 className="text-xl font-bold text-white">#{pokemon?.id} {pokemon?.name}</h3>
      <img
        src={`${pokemon?.imageUrl}`}
        alt={pokemon?.name}
      />

      <div className="flex gap-2">
        
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer" 
        onClick={decrement}>
          Anterior
        </button>
        
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={increment}>
          Siguiente
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={reset}>
          Reiniciar
        </button>
       
      </div>
    </div>
  );
};