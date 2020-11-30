import React from "react"
import CharCard from "./CharCard"
import loader from '../img/loader.gif'

const CharacterList = ({ characters, isLoading }) => {

  const renderList = (characters) => {
    return characters.map((character) => {
      return <CharCard key={character.id} character={character} />
    })
  }

  if(isLoading){
    return(
      <img src={ loader } alt="Loading..." style={{ display: 'block', margin:'auto', width:'200px'}}/>
    )
  }

  return <div className="char-list">{renderList(characters)}</div>
}

export default CharacterList
