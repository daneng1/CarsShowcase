'use client'

import React, { useState } from 'react'
import { SearchManufacturer } from '.'

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState('')  
  const handleSearch = () => {}

  return (
    <form className='searchBar' onSubmit={handleSearch}>
      <div className='searchBar__item'>
        <SearchManufacturer 
          manufacturer={manufacturer}
          setManufacture={setManufacturer}
        />
      </div>
    </form>
  )
}

export default SearchBar