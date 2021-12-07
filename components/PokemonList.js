import PokemonCard from "./PokemonCard";
import pokemonStyles from "../styles/Pokemon.module.css";

const PokemonList = ({ pokemon }) => {
  return (
    <div className={pokemonStyles.grid}>
      {pokemon.results.map((poke, i) => {
        return <PokemonCard key={i} pokemon={poke} />;
      })}
    </div>
  );
};

export default PokemonList;
