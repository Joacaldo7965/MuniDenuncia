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

  return (
    <div className='page'>
      <Header />
      <div className='map_container'>
        {/* TODO: Insertar un mapa de alguna forma XD */}
        {/*<img className='map' src={MapaTest} alt='mapa de test' /> */}
        <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d63330.70741058432!2d-70.65851803261704!3d-33.46466692735647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2scl!4v1669593798206!5m2!1sen!2scl"
          loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div id='red_marker_container' className='red_marker_container'>
        <img className='red_marker' src={RedMarker} alt="lmao" />
      </div>
      <div className='alert'>
        <button className='alert_button' onClick={tuqui} variant='contained'>Alerta!</button>
      </div>
      {/* <Selector/> */}
      {/*<Info/>*/}
      {/* <Detail /> */}
      {/* <Notifications/> */}

    </div>

  )
}

export default HomePage
