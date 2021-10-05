/**
 * Styles
 */
import './SearchInput.css'

import searchImg from '../../assets/images/ilustra_header.svg'
import Button from '../Button/Button'

const SearchInput = ({
    mode,
    value,
    setValue,
    onClick, 
    children,
    disabled
}) => {
    return (
        <div className='search__input'>
            <img src={searchImg} alt="Imagen de inicio" />
            <div className="search__input--container">
                <input 
                    className={mode ? "input--dark" : ""}
                    type="text"
                    placeholder="Busca gifs"
                    value={value}
                    onChange={(e)=>setValue(e.target.value)}
                />
                <Button
                    type='button'
                    onClick={onClick}
                    disabled={disabled}
                >
                    <span className='icon'></span>
                </Button>                
                {children}
            </div>
        </div>
    )
}

export default SearchInput
