import React from 'react'
import NavBar from './nav_bar'
import noise from '../assets/noise.png'
import cuchillo from '../assets/cuchillo.png'
import llama from '../assets/llama.png'
import auto from '../assets/car.png'
import cono from '../assets/cono.png'
import pelea from '../assets/pelea.png'

import arrow from '../assets/arrow.png'

export const Selector = () => {
  function closeSelector(){
    const elem = document.getElementById("selector")
    
    elem.style.visibility = "collapse"
  }
  return (
    <div id='selector'>
      <div className='desplegable'>
        <div className='selector_header'>
            <img onClick={closeSelector} className='selector_back_icon' src={arrow} />
            <h1 className='selector_title'>¿Que está sucediendo?</h1>
        </div> 
        
        
        <div className="grid-container">
          <div className="grid-item">
            <div><img className='imagen' src={noise} /></div>
            <div>Ruidos</div>
          </div>

          <div className="grid-item">
            <div><img className='imagen' src={cuchillo} /></div>
            <div>Asalto</div>
          </div>

          <div  className="grid-item">
            <div><img className='imagen' src={llama} /></div>
            <div>Incendio</div>
          </div>

          <div  className="grid-item">
            <div><img className='imagen' src={auto} /></div>
            <div>Accidente</div>
          </div>

          <div  className="grid-item">
            <div><img className='imagen' src={cono} /></div>
            <div>Reparacion</div>
          </div>

          <div  className="grid-item">
            <div><img className='imagen' src={pelea} /></div>
            <div>Pelea</div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Selector