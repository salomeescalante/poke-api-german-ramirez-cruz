import React from 'react'

const SearchInput = ({setOptionType, setPokeSearch}) => {

    const handleSubmit = e => {

        e.preventDefault()
        setPokeSearch(e.target.searchText.value.trim().toLowerCase())
        setOptionType('All')
        e.target.searchText.value = ""
    }

  return (
    <form className='form__search' onSubmit={handleSubmit}>
        <input placeholder='Find your favorite here' id='searchText' type="text" />
        <button className='btn__search'>Search</button>
    </form>
  )
}

export default SearchInput