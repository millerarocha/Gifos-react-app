/**
 * Styles
 */
import './Gif.css'

const Gif = ({
    src,
    link
}) => {
    return (
        <>
            <a href={link} className="gif__link">
                <img 
                    src={src} 
                    className="gif__image"                   
                />            
            </a>
        </>
    )
}

export default Gif
