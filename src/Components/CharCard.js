import React from "react"

const CharCard = ({ character }) => {
  return (
    <div className="card">
      { character.name }
    </div>
  )
}

export default CharCard
