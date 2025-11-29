/* eslint-disable @typescript-eslint/no-explicit-any */
export type Country = {
  capital: string,
  currency: string,
  currency_name: string,
  currency_symbol: string,
  emoji: string,
  hasStates: true
  id: 1
  iso2: string,
  iso3: string,
  latitude: string,
  longitude: string,
  name: string,
  native: string,
  numeric_code: string,
  phone_code: string,
  region: string,
  subregion: string,
  tld: string,
} | any

export type State = {
  hasCities: boolean,
  id: number,
  latitude: string,
  longitude: string,
  name: string,
  state_code: string,
} | any

export type City = {
  id: number,
  latitude: string,
  longitude: string,
  name: string,
} | any