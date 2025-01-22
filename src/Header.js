import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';

export const Header = () => {
  return (
    <div className="header">
        <h1>This is the Header</h1>
        <div className='header_left'> 
          <img src='' alt=''/>
          <div className='header_search'>
            {/*icon search*/}
            <SearchIcon/>
            <input type='text'/>
          </div>
        </div>
        <div className='header_righ'>

        </div>

    </div>
  )
}
