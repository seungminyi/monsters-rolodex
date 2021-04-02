import React from 'react'

import './search-box.styles.css'

export const SearchBox = ({placeholder, handleChange}) => {
    console.log(placeholder)
    return(
        <input type='search' 
            className='search'
            placeholder={placeholder}
            onChange={handleChange} />
    )
}