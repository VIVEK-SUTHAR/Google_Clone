import { Mic, SearchOutlined } from '@mui/icons-material'
import { Button } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useStateValue } from '../StateProvider';
import { actiontypes } from '../reducer';
import './search.css'
function Search({ hideButton }) {
  const [{}, dispatch] = useStateValue()
  const [input, setInput] = useState('');
  const history = useNavigate();
  const search = e => {
    e.preventDefault();
    console.log(input);
    dispatch({
      type: actiontypes.SET_SEARCH_TERM,
      term: input
    })
    history('/search');
  }
  return (
    <form className='search'>
      <div className="search_input">
        <SearchOutlined className='search_inputIcon' />
        <input value={input} onChange={e => setInput(e.target.value)} />
        <Mic />
      </div>
      {
        !hideButton ? (<div className="search_buttons">
          <Button type='submit' onClick={search} variant='outlined'>Google Search</Button>
          <Button variant='outlined'>I'm Feeling Lucky</Button>

        </div>) :
          (
            <div className="search_buttons">
              <Button className='search_buttonsHidden' type='submit' onClick={search} variant='outlined'>Google Search</Button>
              <Button className='search_buttonsHidden' variant='outlined'>I'm Feeling Lucky</Button>

            </div>
          )
      }

    </form>
  )
}

export default Search