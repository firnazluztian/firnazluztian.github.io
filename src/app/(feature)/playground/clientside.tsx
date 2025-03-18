'use client'
import { useState, useEffect } from "react"

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

const useAction = () => {
  const [data, setData] = useState<country[]>([])

  const getCountries = async () => {
    try {
      const response = await fetch(API)
      if (response.ok) {
        const result = await response.json()
        setData(result)
      }
    } catch (e) {
      console.error(e)
      setData([])
    }
  }

  useEffect(() => {
    getCountries()
  }, [])

  return {
    data,
  }
}

export const ClientSide = () => {
  return <CountryList />
}

const CountryList = () => {
  const { data } = useAction()

  return (
    <div>
      {data.map((item, id) => <li key={id}>{item.name}</li>)}
      {!data.length && <>data not found</>}
    </div>
  )
};