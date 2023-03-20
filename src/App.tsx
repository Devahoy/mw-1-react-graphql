import { useState } from 'react'
import './App.css'

import useCountries from './hooks/useCountries'
import useCountry from './hooks/useCountry'

interface Country {
  code: string
  name: string
}

function App() {
  const [code, setCode] = useState<string>('TH')

  const result = useCountries()
  const countryResult = useCountry(code)

  const { fetching, data, error } = result
  const { fetching: loading, data: countryData } = countryResult

  if (fetching) return <p>Loading....</p>
  if (error) return <p>{error.message || 'Something went wrong!'}</p>

  const { countries } = data
  const country = countryData?.country

  return (
    <div className="App">
      <h1>React Graphql Example</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="card">
          <p>
            {country.name} ({country.code}) {country.emoji}
          </p>
          <p>Capital : {country.capital}</p>
          <p>Currency : {country.currency}</p>
        </div>
      )}

      {countries.map((country: Country) => {
        return (
          <button key={country.code} onClick={() => setCode(country.code)}>
            {country.name}
          </button>
        )
      })}
    </div>
  )
}

export default App
