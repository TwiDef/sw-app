
export interface Icharacter {
  birth_year: string,
  eye_color: string,
  films: Array<string>,
  gender: string,
  hair_color: string,
  height: string,
  homeworld: string,
  mass: string,
  name: string,
  skin_color: string,
  created: string,
  edited: string,
  species: Array<string>
  starships: Array<string>,
  url: string,
  vehicles: Array<string>
}

export interface IFilm {
  characters: Array<string>,
  created: string,
  director: string,
  edited: string,
  episode_id: number,
  opening_crawl: string,
  planets: Array<string>,
  producer: string,
  release_date: string,
  species: Array<string>,
  starships: Array<string>,
  title: string,
  url: string,
  vehicles: Array<string>
}

export interface IfethedCharacters {
  count: number,
  next: string | null,
  previous: string | null,
  results: Array<Icharacter>
}

export interface IfethedFilms {
  count: number,
  next: string | null,
  previous: string | null,
  results: Array<IFilm>
}
