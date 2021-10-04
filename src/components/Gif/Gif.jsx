/**
 * Styles
 */
import './Gif.css'

const Gif = ({src}) => {
    return (
        <div>
            <img 
                src={src}
                className="gif__image"
            />
        </div>
    )
}

export default Gif
