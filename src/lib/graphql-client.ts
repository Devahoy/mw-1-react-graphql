import { createClient } from 'urql'

export const client = createClient({
  url: 'https://countries.trevorblades.com/',
})

export const QueryCountries = `
query {
  countries {
    code
    name
  }
}
`

export const QueryCountry = `
query($code: ID!) {
  country(code: $code) {
    code
    name
    currency
    emoji
    capital
  }
}
`
