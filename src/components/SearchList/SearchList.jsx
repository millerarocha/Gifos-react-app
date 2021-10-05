import React from 'react'
import './SearchList.css'

const SearchList = ({
    isVisible=false,
    itemClick,
    autoComplete    
}) => {    
    return (
        <div className={isVisible ? "search__list visible" : "search__list"}>
            {(autoComplete || []).map(item =>{
                return (
                <div 
                    className="search__list-item" 
                    key={item.name}
                    onClick={()=>{
                        itemClick(item.name);
                    }}
                >
                    <span className="search__list-icon"></span>
                    {item.name}
                </div>)
            })}
            
        </div>
    )
}

export default SearchList
