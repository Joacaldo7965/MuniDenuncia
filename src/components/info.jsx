import React from 'react'
import NavBar from './nav_bar'
import noise from '../assets/noise.png'
import cuchillo from '../assets/cuchillo.png'
import llama from '../assets/llama.png'
import auto from '../assets/car.png'
import cono from '../assets/cono.png'
import pelea from '../assets/pelea.png'
import arrow from '../assets/arrow.png'

export const Info = () => {
  return (
    <div>
      <div className='selector'>
        <h1 className='app_header_title'>Muni Denuncia</h1>
        <h1 className='app_header_subtitle'>Tu buen vivir</h1> {/* TODO: (IDEA) poner esta letra en cursiva */}
        {/*<NavBar /> */}
      </div>
      <div className='desplegable-info'>
        <div className='global-info'>
            <div className='info-icon'>
                <img className='imagen-info' src={cuchillo} />
            </div>
            <div className='info-text'>
                <div>Asalto</div>
            </div>
        </div>
        <div className='barra-separadora'></div>

        <div>
            <div>Descripción</div>
        </div>

      </div>
    </div>
  )
}

export default Info