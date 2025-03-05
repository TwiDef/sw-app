import { IheaderItem } from "../../@types"

export const headerItems: IheaderItem[] = [
  {
    children: 'Home',
    to: '/'
  },
  {
    children: 'Characters',
    to: 'characters/?page=1'
  },
  {
    children: 'Films',
    to: 'films'
  },
  {
    children: 'Species',
    to: 'species/?page=1'
  },
  {
    children: 'Search',
    to: 'search'
  }
]
