export const getCharId = (str: string): string => {
  return (str.replace("https://swapi.py4e.com/api/people", ""))
}

export const getFilmId = (str: string): string => {
  return (str.replace("https://swapi.py4e.com/api/films", ""))
}
