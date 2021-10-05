/**
 * Styles
 */
import './Result.css'


import Gif from '../Gif/Gif'

const Result = ({
    mode,
    data,
    isLoading
}) => {
    return (
        <div className='result'>      
            <h2 
                className = {mode ? "subtitle--dark" : "subtitle--light"}
            >
                {isLoading ? 'Cargando....':'Resultados de la búsqueda'}
            </h2>            
            <div 
                className={`gif__container ${mode ? "gif__container--dark" : "gif__container--light"}`}
            >
                {(data || []).map(item => {
                    const { id, images:{
                        fixed_height:{
                            url
                        }
                    }} = item;
                    return (
                        <Gif 
                            key={id}
                            src={url} 
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Result