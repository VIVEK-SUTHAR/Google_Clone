import { Mic, SearchOutlined } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'
import './search.css'
function Search() {
  return (
    <div className='search'>
      <div className="search_input">
        <SearchOutlined className='search_inputIcon' />
        <input />
        <Mic />
      </div>
      <div className="search_buttons">
        <Button variant='outlined'>Google Search</Button>
        <Button variant='outlined'>I'm Feeling Lucky</Button>

      </div>
    </div>
  )
}

export default Search