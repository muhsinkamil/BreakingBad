import React, { useEffect, useState } from 'react'
import bb from '../API/BB'

import '../Styles/styles.css'
import Header from './Header'
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

  return(
    <div className="container">
      <Header />
      <SearchBar searchChar={(query) => setSearch(query)}/>
      <CharacterList characters = { characters } isLoading = { isLoading }/>
    </div>
  )
}

export default App