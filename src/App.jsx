/**
 * Dependencies
 */
import React, {useState, useEffect} from 'react'

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
import { request } from './utils/request'

/**
 * Styles
 */
import './App.css';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [value,setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [gifsList, setGifsList] = useState([]);
  const [isVisible,setIsVisible] = useState(false);
  const [isSearching,setIsSearching] = useState(false);
  const [autoComplete,setAutoComplete] = useState([]);

  useEffect(()=>{
    request("/trending","",15)
      .then(res => res.json())
      .then(data => setGifsList(data.data))
      .catch(err => console.log(err))
      .finally(()=>{
        setIsSearching(false);
        setIsLoading(false);
        setValue("");
    })
  },[]);

  useEffect(()=>{
    if(value !== ""){
      setIsVisible(true);
    }else{
      setIsVisible(false);  
    }
  },[value]);

  useEffect(()=>{
    if(isSearching && value !== ""){
      setIsLoading(true);
      request("/search",value)
      .then(res => res.json())
      .then(data => setGifsList(data.data))
      .catch(err => console.log(err))
      .finally(()=>{
        setIsSearching(false);
        setIsLoading(false);
        setValue("");
      })
    }
  },[isSearching,value]);

  useEffect(()=>{
    if(value !== ""){
      request("/search/tags",value,5)
      .then(res => res.json())
      .then(data => setAutoComplete(data.data))
      .catch(err => console.log(err))
    }
  },[value]);

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
            value={value}
            setValue={setValue}
            onClick={()=>setIsSearching(!isSearching)}
            disabled={isSearching || value===""}
          >
            <SearchList
              isVisible={isVisible}
              autoComplete={autoComplete}
              itemClick={(value)=>{
                setValue(value);
                setIsSearching(!isSearching);
              }}
            >            
            </SearchList>
          </SearchInput>
        </Search>

        {/* Result */}
        <Result
          data={gifsList}
          mode={isDark}
          isLoading={isLoading}
        >
        </Result>
      </div>
    </div>
  );
}

export default App;
