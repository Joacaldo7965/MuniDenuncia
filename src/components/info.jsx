import React, {useRef} from 'react'
import NavBar from './nav_bar'
import noise from '../assets/noise.png'
import cuchillo from '../assets/cuchillo.png'
import llama from '../assets/llama.png'
import auto from '../assets/car.png'
import cono from '../assets/cono.png'
import pelea from '../assets/pelea.png'
import arrow from '../assets/arrow.png'


export const Info = () => {

    const descriptionRef = useRef()
    const nameRef = useRef()

    function goBack(){
        const info = document.getElementById("info")
        info.style.visibility = "collapse"

        const selector = document.getElementById("selector")
        selector.style.visibility = "visible"
    }

    function closeWindow(){
        const info = document.getElementById("info")
        info.style.visibility = "collapse"

        const elem = document.getElementById("red_marker_container")
        elem.style.visibility = "visible"
    }

    function confirmLocation(){
        var description = descriptionRef.current.value
        if (description === '') {
            description = "Sin mayor detalle"
        }
        descriptionRef.current.value = ""

        const detail_description = document.getElementById("detail-description")
        detail_description.innerHTML = description

        const name = nameRef.current.innerHTML
        const detail_name = document.getElementById("situation-name")
        detail_name.innerHTML = "Alerta " + name
        
        
        closeWindow()
        
    }

    return (
        <div id='info'>
            <div className='desplegable-info'>
                
                <div className='global-info'>
                    <img onClick={goBack} className='info-back-icon' src={arrow} />
                    <h1 ref={nameRef} id='info_name' className='info-text'>Asalto</h1>
                    <img id='info_img' className='imagen-info' src={cuchillo} />
                    
                </div>
                <div className='barra-separadora'></div>

                <div className='rellenado'>
                    <div className='espaciado'></div>
                    <div className='descripcion-text'>
                        Descripción
                    </div>
                    <div className='description-fill-container'>
                        <textarea ref={descriptionRef} className='description-fill' name="" placeholder='Describa la situación'></textarea>
                    </div>
                    <div className='espaciado'></div>
                    <div className='descripcion-text'>
                        Ubicación
                    </div>

                    <div className='descripcion-fill'>
                        Vicuña Mackena 3939
                    </div>
                    <div className='espaciado'></div>
                    <div className='espaciado'></div>
                    <div className='espaciado'></div>
                    <div className='confirmar-box'>
                        
                        <button onClick={confirmLocation} className='confirmar-button'>Confirmar</button>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info