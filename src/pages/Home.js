import { Avatar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import AppsIcon from "@mui/icons-material/Apps"
import "./Home.css"
import Search from './Search'
function Home() {
  return (
    <div className="home">
      <div className="home_header">
        <div className="home_headerLeft">
          <Link to='/about' >About</Link>
          <Link to='/store' >Store</Link>
        </div>
        <div className="home_headerRight">
          <Link to='/gmail' >Gmail</Link>
          <Link to='/images' >Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className="home_body">

        <img src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'></img>
        <div className="header_inputContainer">
          <Search/>
        </div>
      </div>

    </div>
  )
}

export default Home