/* export const getCharId = (str: string): string => {
  return (str.replace("https://swapi.py4e.com/api/people", ""))
} */

export const getCharId = (str: string) => {
  return (str).match(/\d/g)?.join("")
}

export const getFilmId = (str: string) => {
  return (str.replace("https://swapi.py4e.com/api/films", ""))
}
