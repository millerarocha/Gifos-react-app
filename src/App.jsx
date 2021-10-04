/**
 * Dependencies
 */
import React, {useState} from 'react'

/**
 * Components
 */
import Header from './components/Header/Header'
import Logo from './components/Logo/Logo'
import Button from './components/Button/Button'
import Search from './components/Search/Search'
import SearchInput from './components/SearchInput/SearchInput'
import Result from './components/Result/Result'
import SearchList from './components/SearchList/SearchList'

/**
 * Styles
 */
import './App.css';

import {gifsList} from './DB/gifDB'

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <div 
      className={`app ${isDark ? "app--dark" : "app--light"}`}
    >
      <div className="container">
        {/* Header */}
        <Header>
          <Logo
            logoMode={isDark ? "logo--dark" : "logo--light"}
          />
          <Button
            className = {isDark ? "btn--dark" : "btn--light"}
            onClick = {()=>{setIsDark(!isDark)}}  
          >
            MODO
            {isDark ? " LIGHT" : " DARK"}
          </Button>
        </Header>

        {/* Search */}
        <Search 
          className='search'
        >
          <h1 
            className={`search__title ${isDark ? "search__title--dark" : "search__title--light"}`}
          >¡Inspirate y busca los mejores <b>GIFS!</b>
          </h1>
          <SearchInput
            mode={isDark}
          />
          <SearchList>            
          </SearchList>
        </Search>

        {/* Result */}
        <Result
          data={gifsList}
          mode={isDark}
        >
        </Result>
      </div>
    </div>
  );
}

export default App;
