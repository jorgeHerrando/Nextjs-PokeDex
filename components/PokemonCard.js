import Link from "next/link";
import pokemonStyles from "../styles/Pokemon.module.css";

const PokemonCard = ({ pokemon }) => {
  const url = pokemon.url;
  //   console.log(url);
  // creamos array con elem con / como separador
  const urlSplit = url.split("/");
  //   console.log(urlSplit);
  // el length -2 corresponde al index
  const pokemonIndex = urlSplit[urlSplit.length - 2];
  // console.log(pokemonIndex);

  // seteamos la imagen
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonIndex}.svg`;

  return (
    <Link href="/pokemon/[id]" as={`/pokemon/${pokemon.name}`}>
      <a className={pokemonStyles.card}>
        <h3 className="centre">{pokemon.name} </h3>
        <div className={pokemonStyles.pokeCardimageContainer}>
          <img className={pokemonStyles.pokeCardImage} src={imageUrl} />
        </div>
        <h4 className="centre"># {pokemonIndex}</h4>
      </a>
    </Link>
  );
};

export default PokemonCard;
