import React from 'react'
import './SearchList.css'

const SearchList = ({
    isVisible=false    
}) => {
    return (
        <div className={isVisible ? "search__list visible" : "search__list"}>
            <div className="search__list-item">
                <span className="search__list-icon"></span>Dragon ball
            </div>
        </div>
    )
}

export default SearchList
