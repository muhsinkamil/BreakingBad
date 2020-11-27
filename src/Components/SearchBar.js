import React, { useState } from "react"

const SearchBar = ({ searchChar }) => {
  const [search, setSearch] = useState("")

  const onChange = (query) => {
    setSearch(query)
    searchChar(query)
  }
  return (
    <div className="search-bar">
      <form>
        <input
          type="text"
          placeholder="Search Characters"
          value={search}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
      </form>
    </div>
  )
}

export default SearchBar
