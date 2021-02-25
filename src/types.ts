/* eslint-disable camelcase */
export interface SearchType {
  label:string,
  value:string
}

export interface SearchState {
  searchType:SearchType,
  searchText:string,
  pageNumber:number
}

export interface FetchState {
  loading:boolean,
  scrollLoading:boolean,
  error:string|null,
  data:any
}

export interface State {
  search:SearchState,
  fetch:FetchState
}

export interface APIParams {
  searchType:string,
  searchText:string,
  pageNumber:number
}

export type AxiosPromise = (params:APIParams) => Promise<any>

export interface Option {
  label:string,
  value:string
}

export type OnChange = (option:Option) => void

export interface SelectProps {
  options:Option[],
  value:Option,
  onChange:OnChange
}

export interface User {
  avatar_url:string,
  login:string,
  id:string,
  html_url:string
}
export interface Repo {
  owner:User,
  stargazers_count:number,
  html_url:string,
  created_at:string,
  id:number,
  name:string,
}
export interface Issue {
  user:User,
  state:string,
  html_url:string,
  created_at:string,
  id:number,
  title:string,
  body:string
}
