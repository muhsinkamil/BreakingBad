import React from "react"

const CharCard = ({ character }) => {
  return (
    <div className="card">
      <div className="image">
        <img src={character.img} alt="" />
      </div>
      <div className="content">
        <div className="title">{character.name}</div>
        <div className="bottom">
          <div className="hidden">
            <div>
              <p>Actor:</p>
              <p>{character.portrayed}</p>
            </div>
            <div>
              <p>NickName:</p>
              <p>{character.nickname}</p>
            </div>
            <div>
              <p>Status:</p>
              <p>{character.status}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CharCard
