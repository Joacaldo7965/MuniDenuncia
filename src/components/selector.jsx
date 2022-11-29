import React, {useRef} from 'react'
import NavBar from './nav_bar'
import noise from '../assets/noise.png'
import cuchillo from '../assets/cuchillo.png'
import llama from '../assets/llama.png'
import auto from '../assets/car.png'
import cono from '../assets/cono.png'
import pelea from '../assets/pelea.png'

import arrow from '../assets/arrow.png'

export const Selector = () => {

  const noiseRef = useRef()
  const muggingRef = useRef()
  const fireRef = useRef()
  const accidentRef = useRef()
  const trafficRef = useRef()
  const fightRef = useRef()

  function closeSelector(){
    const selector = document.getElementById("selector")
    selector.style.visibility = "collapse"
  }

  function goToInfo(){
    const selector = document.getElementById("selector")
    selector.style.visibility = "collapse"

    const assaultInfo = document.getElementById("info")
    assaultInfo.style.visibility = "visible"
  }

  function goToNoiseInfo(e){
    goToInfo()
    document.getElementById("info_name").innerHTML = "Ruido"
    var img = document.getElementById("info_img")
    img.src = noise
    
  }

  function goToMuggingInfo(e){
    goToInfo()
    document.getElementById("info_name").innerHTML = "Asalto"
    var img = document.getElementById("info_img")
    img.src = cuchillo
    
  }

  function goToFireInfo(e){
    goToInfo()
    document.getElementById("info_name").innerHTML = "Incendio"
    var img = document.getElementById("info_img")
    img.src = llama
    
  }

  function goToAccidentInfo(e){
    goToInfo()
    document.getElementById("info_name").innerHTML = "Accidente"
    var img = document.getElementById("info_img")
    img.src = auto
    
  }

  function goToTrafficInfo(e){
    goToInfo()
    document.getElementById("info_name").innerHTML = "Reparacion"
    var img = document.getElementById("info_img")
    img.src = cono
    
  }

  function goToFightInfo(e){
    goToInfo()
    document.getElementById("info_name").innerHTML = "Pelea"
    var img = document.getElementById("info_img")
    img.src = pelea
    
  }

  // TODO: hacer las 47 funciones restantes

  return (
    <div id='selector'>
      <div className='desplegable'>
        <div className='selector_header'>
            <img onClick={closeSelector} className='selector_back_icon' src={arrow} />
            <h1 className='selector_title'>¿Que está sucediendo?</h1>
        </div> 
        
        
        <div className="grid-container">
          <div className="grid-item">
            <div><img alt='noise' ref={noiseRef} onClick={goToNoiseInfo} className='imagen' src={noise} /></div>
            <div>Ruidos</div>
          </div>

          <div className="grid-item">
            <div><img alt='mugging' ref={muggingRef} onClick={goToMuggingInfo} className='imagen' src={cuchillo} /></div>
            <div>Asalto</div>
          </div>

          <div  className="grid-item">
            <div><img alt='fire' ref={fireRef} onClick={goToFireInfo} className='imagen' src={llama} /></div>
            <div>Incendio</div>
          </div>

          <div  className="grid-item">
            <div><img alt='accident' ref={accidentRef} onClick={goToAccidentInfo} className='imagen' src={auto} /></div>
            <div>Accidente</div>
          </div>

          <div  className="grid-item">
            <div><img alt='traffic' ref={trafficRef} onClick={goToTrafficInfo} className='imagen' src={cono} /></div>
            <div>Reparacion</div>
          </div>

          <div  className="grid-item">
            <div><img alt='fight' ref={fightRef} onClick={goToFightInfo} className='imagen' src={pelea} /></div>
            <div>Pelea</div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Selector