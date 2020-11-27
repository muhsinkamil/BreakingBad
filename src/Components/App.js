import React, { useEffect, useState } from 'react'
import bb from '../API/BB'
import SearchBar from './SearchBar'
import CharacterList from './CharacterList'

const App = () => {

  const [characters, setCharacters] = useState([])
  const [search, setSearch] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const response = await bb.get(`/characters?name=${ search }`)
      setCharacters(response.data)
      setIsLoading(false)
    }
    fetchData()
  }, [search])

  if(isLoading){
    return(
      <>
      Loading...
      </>
    )
  }

  return(
    <div className="container">
      <SearchBar searchChar={(query) => setSearch(query)}/>
      <CharacterList characters = { characters }/>
    </div>
  )
}

export default App