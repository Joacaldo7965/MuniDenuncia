import React from 'react'

import { Button } from '@mui/material'

import Header from '../components/header'
import Detail from '../components/detail'
import MapaTest from '../assets/mapa.png'
import RedMarker from '../assets/red_marker.png'


import Selector from '../components/selector'
import Info from '../components/info'
import Notifications from '../components/notifications'

export const HomePage = () => {

  function tuqui() {
    const elem = document.getElementById("red_marker_container")
    if (elem.style.visibility == "hidden") {
      elem.style.visibility = "visible"
    } else {
      elem.style.visibility = "hidden"
    }
  }
  function alertClick() {
    //console.log("lol")
    const elem = document.getElementById("selector")
    
    elem.style.visibility = "visible"
    
  }

  return (
    <div className='page'>
      <Header />
      <div className='map_container'>
        {/* TODO: Insertar un mapa de alguna forma XD */}
        {/*<img className='map' src={MapaTest} alt='mapa de test' /> */}
          <iframe className='map' frameBorder="0" 
          src="https://www.bing.com/maps/embed?h=400&w=500&cp=-33.490837767875675~-70.61734914779663&lvl=16&typ=d&sty=h&src=SHELL&FORM=MBEDV8" 
          scrolling="no">
     </iframe>
      </div>
      <div id='red_marker_container' className='red_marker_container'>
        <img className='red_marker' src={RedMarker} alt="lmao" />
      </div>
      <div className='alert'>
        <button className='alert_button' onClick={alertClick} variant='contained'>Alerta!</button>
      </div>
      <Selector/>
      {/* <Info/> */}
      {/* <Detail /> */}
      {/* <Notifications/> */}

    </div>

  )
}

export default HomePage
