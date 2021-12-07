import PokemonList from "../components/PokemonList";
import Header from "../components/Header";

export default function Home({ pokemon }) {
  console.log(pokemon);
  return (
    <div>
      <Header />
      <h2 className="centre">Welcome to Pokédex Next.js</h2>
      <PokemonList pokemon={pokemon} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=150");
  const pokemon = await res.json();

  return {
    props: {
      pokemon,
    },
  };
};
