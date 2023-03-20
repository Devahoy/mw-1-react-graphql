import { useQuery } from 'urql'

import { QueryCountries } from '../lib/graphql-client'

const useCountries = () => {
  const [result] = useQuery({
    query: QueryCountries,
  })

  return result
}

export default useCountries
