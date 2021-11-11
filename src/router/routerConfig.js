// import Home from "../pages/home/Home";
import Message from "@/pages/Message.js"
import Detail from "@/pages/Detail.js"
import PokemonHome from "@/pages/pokemonHome/PokemonHome";
import Pokemon from "@/pages/pokemon/Pokemon.jsx"
export const mainRouter = [
  {
    component: PokemonHome,
    path: '/',
    exact: true,
  },
  {
    component: Pokemon,
    path: '/Pokemon',
  },
  {
    component: Detail,
    path: '/Detail'
  },
  {
    component: Message,
    path: '/Message'
  },
]