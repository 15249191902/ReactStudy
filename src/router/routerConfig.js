// import Home from "../pages/home/Home";
import Message from "@/pages/Message.js"
import Detail from "@/pages/Detail.js"
import PokemonHome from "@/pages/pokemonHome/PokemonHome";
export const mainRouter = [
  {
    component: PokemonHome,
    path: '/',
    exact: true,
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