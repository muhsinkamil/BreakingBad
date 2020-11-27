import React from "react"
import CharCard from "./CharCard"

const CharacterList = ({ characters }) => {

  const renderList = (characters) => {
    return characters.map((character) => {
      return <CharCard key={character.id} character={character} />
    })
  }

  return <div className="char-list">{renderList(characters)}</div>
}

export default CharacterList
