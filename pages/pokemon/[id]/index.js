import Link from "next/link";
import { useRouter } from "next/router";

import pokeDetailStyles from "../../../styles/PokemonDetail.module.css";

const colorsType = {
  bug: "B1C12E",
  dark: "4F3A2D",
  dragon: "755EDF",
  electric: "FCBC17",
  fairy: "F481F4",
  fighting: "82351D",
  fire: "E73B0C",
  flying: "A3B3F7",
  ghost: "6060B2",
  grass: "74C236",
  ground: "D3B357",
  ice: "A3E7FD",
  normal: "C8C4BC",
  poison: "934594",
  psychic: "ED4882",
  rock: "B9A156",
  steel: "B5B5C3",
  water: "3295F6",
};

const pokemonDetail = ({ pokemon }) => {
  //   const router = useRouter();
  //   const { id } = router.query;

  let index = pokemon.id - 1;
  console.log(index);

  return (
    <>
      {pokemon.id < 150 && pokemon.id > 1 && (
        <div className={pokeDetailStyles.arrowsContainer}>
          <Link href="/pokemon/[id]" as={`/pokemon/${pokemon.id - 1}`}>
            <a>
              <img
                className={pokeDetailStyles.previousArrow}
                src="/next.png"
                alt="previous"
              />
            </a>
          </Link>
          <Link href="/pokemon/[id]" as={`/pokemon/${pokemon.id + 1}`}>
            <a>
              <img
                className={pokeDetailStyles.nextArrow}
                src="/next.png"
                alt="next"
              />
            </a>
          </Link>
        </div>
      )}

      {pokemon.id === 150 && (
        <div className={pokeDetailStyles.arrowsContainer}>
          <Link href="/pokemon/[id]" as={`/pokemon/${pokemon.id - 1}`}>
            <a>
              <img
                className={pokeDetailStyles.previousArrow}
                src="/next.png"
                alt="previous"
              />
            </a>
          </Link>
          <Link href="/pokemon/[id]" as={`/pokemon/1`}>
            <a>
              <img
                className={pokeDetailStyles.nextArrow}
                src="/next.png"
                alt="next"
              />
            </a>
          </Link>
        </div>
      )}

      {pokemon.id === 1 && (
        <div className={pokeDetailStyles.arrowsContainer}>
          <Link href="/pokemon/[id]" as={`/pokemon/150`}>
            <a>
              <img
                className={pokeDetailStyles.previousArrow}
                src="/next.png"
                alt="previous"
              />
            </a>
          </Link>
          <Link href="/pokemon/[id]" as={`/pokemon/${pokemon.id + 1}`}>
            <a>
              <img
                className={pokeDetailStyles.nextArrow}
                src="/next.png"
                alt="next"
              />
            </a>
          </Link>
        </div>
      )}

      <div className={pokeDetailStyles.container}>
        <div className={pokeDetailStyles.pokemonDetailTop}>
          <h4>
            {pokemon.name
              .toLowerCase()
              .split(" ")
              .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
              .join(" ")}
          </h4>
          <h4># {pokemon.id}</h4>
        </div>

        <div className={pokeDetailStyles.pokemonDetailBody}>
          <div className={pokeDetailStyles.pokemonData}>
            <div className={pokeDetailStyles.pokemonImageContainer}>
              <img
                src={pokemon.sprites.other.dream_world.front_default}
                alt={pokemon.name}
                className={pokeDetailStyles.pokemonImage}
              />
            </div>
            <div className={pokeDetailStyles.pokemonMaindata}>
              <div className={pokeDetailStyles.pokemonDataLeft}>
                <div className={pokeDetailStyles.pokemonDataType}>
                  <h4>Type:</h4>
                  <div className={pokeDetailStyles.pokemonBadges}>
                    {pokemon.types.map((type, i) => {
                      return (
                        <span
                          key={i}
                          // className={}
                          style={{
                            backgroundColor: `#${colorsType[type.type.name]}`,
                          }}
                        >
                          {type.type.name
                            .toLowerCase()
                            .split(" ")
                            .map(
                              (oneType) =>
                                oneType.charAt(0).toUpperCase() +
                                oneType.substring(1)
                            )
                            .join(" ")}
                        </span>
                      );
                    })}
                  </div>
                </div>
                <div className={pokeDetailStyles.pokemonDataHeight}>
                  <h4>
                    Height: <span>{`${pokemon.height}m`}</span>
                  </h4>
                </div>
                <div className={pokeDetailStyles.pokemonDataWeight}>
                  <h4>
                    Weight: <span>{`${pokemon.weight}kg`}</span>
                  </h4>
                </div>
              </div>
              <div className={pokeDetailStyles.pokemonDataAbilities}>
                <h4>Abilities</h4>
                {pokemon.abilities.map((ability, i) => {
                  return (
                    <p key={i} className={pokeDetailStyles.abilityP}>
                      {ability.ability.name}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>

          <div className={pokeDetailStyles.pokemonDataStats}>
            <h2>Stats</h2>
            {pokemon.stats.map((stat, i) => {
              return (
                <div className={pokeDetailStyles.dataStatsDetail} key={i}>
                  <p>{stat.stat.name.toUpperCase()}: </p>
                  <p> {stat.base_stat}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Link href="/">
        <a className={pokeDetailStyles.homeButton}>Go Back</a>
      </Link>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${context.params.id}`
  );
  const pokemon = await res.json();

  return {
    props: {
      pokemon,
    },
  };
};

// HACERLO CON STATICPROPS
// genero cada una de las rutas posibles
// export const getStaticPaths = async () => {
//   const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=150`);
//   const pokemons = await res.json();

//   const names = pokemons.results.map((poke) => poke.name);

//   const paths = names.map((name) => ({
//     params: {
//       id: name,
//     },
//   }));
//   console.log(paths);

//   return {
//     paths,
//     fallback: false,
//   };
// };

export default pokemonDetail;
