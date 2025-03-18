/*
identify SSG, ISR, SSR, CSR
---------------------------
static site generate (SSR)
fetch(API, { cache: 'force-cache' })
best for: SEO, static pages blog, documentation, wont cache on reload only on redeploy

interval static regeneration (ISR)
update every x seconds
fetch(API, { next: { revalidate: 10 } })
best for: news sites, dashboard, ecommerce page

server side rendering (SSR)
fetch(API, { cache: 'no-store' })
best for: dynamic data, dashboard, search result, ensures real time data

client side rendering (CSR)
'use client'
use useEffect, useState
best for: realtime updates , chat apps
*/

import { ClientSide } from "./clientside";

interface country {
  abbreviation: string;
  capital: string;
  currency: string;
  id: number;
  media: {
    name: string;
    phone: string;
    population: number;
  };
  name: string;
  phone: string;
  population: number;
}

const API = "https://api.sampleapis.com/countries/countries";

const Playground = async () => {
  const dataSSR = await getCountriesSSR();
  const dataSSG = await getCountriesSSG();
  const dataISR = await getCountriesISR();

  return (
    <div className="flex gap-5 w-full mx-auto p-5 text-left h-[50vh] overflow-scroll">
      <CountryList data={dataSSR} />
      <CountryList data={dataSSG} />
      <CountryList data={dataISR} />
      <ClientSide />
    </div>
  )
};

export default Playground;

// static site rendering
export const getCountriesSSR = async () => {
  try {
    const response = await fetch(API, { cache: "no-store" })
    if (response.ok) {
      const result: country[] = await response.json()
      return result
    }
  } catch (e) {
    console.error(e)
  }

  return []
}

// static site generation
export const getCountriesSSG = async () => {
  try {
    const response = await fetch(API, { cache: 'force-cache' }) // static
    if (response.ok) {
      const result: country[] = await response.json()
      return result
    }
  } catch (e) {
    console.error(e)
  }

  return []
}

// interval static regeneration
export const getCountriesISR = async () => {
  try {
    const response = await fetch(API, { next: { revalidate: 5 } }) 
    if (response.ok) {
      const result: country[] = await response.json()
      return result
    }
  } catch (e) {
    console.error(e)
  }

  return []
}

const CountryList = (props: { data: country[] | [] }) => {
  const { data } = props

  if (data.length) return (
    <div>
      {data.map((item, id) => <li key={id}>{item.name}</li>)}
    </div>
  );
  return <>Data not found</>;
};
