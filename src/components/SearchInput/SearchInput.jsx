/**
 * Styles
 */
import './SearchInput.css'

import searchImg from '../../assets/images/ilustra_header.svg'
import Button from '../Button/Button'

const SearchInput = ({mode}) => {
    return (
        <div className='search__input'>
            <img src={searchImg} alt="Imagen de inicio" />
            <div className="search__input--container">
                <input 
                    className={mode ? "input--dark" : ""}
                    type="text"
                    placeholder="Busca gifs"
                />
                <Button
                    type='button'
                >
                    <span className='icon'></span>
                </Button>
            </div>
        </div>
    )
}

export default SearchInput
