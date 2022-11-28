import React from 'react'
import NavBar from './nav_bar'
import noise from '../assets/noise.png'
import cuchillo from '../assets/cuchillo.png'
import llama from '../assets/llama.png'
import auto from '../assets/car.png'
import cono from '../assets/cono.png'
import pelea from '../assets/pelea.png'

export const Selector = () => {
  return (
    <div>
      <div className='desplegable'>
        <h1 className='app_header_title'>¿Que está sucediendo?</h1>
        
        <div class="grid-container">
          <div class="grid-item">
            <div><img className='imagen' src={noise} /></div>
            <div>Ruidos</div>
          </div>

          <div class="grid-item">
            <div><img className='imagen' src={cuchillo} /></div>
            <div>Asalto</div>
          </div>

          <div  class="grid-item">
            <div><img className='imagen' src={llama} /></div>
            <div>Incendio</div>
          </div>

          <div  class="grid-item">
            <div><img className='imagen' src={auto} /></div>
            <div>Accidente</div>
          </div>

          <div  class="grid-item">
            <div><img className='imagen' src={cono} /></div>
            <div>Reparacion</div>
          </div>

          <div  class="grid-item">
            <div><img className='imagen' src={pelea} /></div>
            <div>Pelea</div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Selector