import React from 'react'
import SearchInputInterface from './SearchInput.interface'
import searchIcon from '../../images/search.svg'

const SearchInput: React.FC<SearchInputInterface> = ({ onSearch }) => {
    const handleChange = (e: any) => {
        const { value } = e.target
        onSearch(value)
    } 
    return (
        <label htmlFor="search" className="search-input">
            <img src={searchIcon} alt="search"/>
            <input id="search" className="search-input__input-field" onChange={handleChange} placeholder="Search" type="text"/>
        </label>
    )
} 

export default SearchInput