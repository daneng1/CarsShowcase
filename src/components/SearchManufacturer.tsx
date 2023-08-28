import React from 'react'

interface SearchManufacturerProps {
  manufacturer: string
  setManufacturer: (manufacture: string) => void
}

const SearchManufacturer = ({ manufacturer, setManufacturer}: SearchManufacturerProps ) => {
  return (
    <div>SearchManufacturer</div>
  )
}

export default SearchManufacturer