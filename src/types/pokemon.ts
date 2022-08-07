export interface Pokemon{
  id: number,
  name: string,
  price: number,
  image: string,
  stock: number,
  amount: number
}
export interface PokemonReduce{
  items: {
    id: number,
    name: string,
    price: number,
    image: string,
    stock: number,
    amount: number,
  }[],
  value: number
}
