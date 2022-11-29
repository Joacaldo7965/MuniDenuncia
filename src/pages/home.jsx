import React from 'react'

import { Button } from '@mui/material'

import Header from '../components/header'
import Detail from '../components/detail'

import MapaTest from '../assets/mapa.png'
import RedMarker from '../assets/red_marker.png'
import Mегафон from '../assets/мегафон.jpg'


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
    const selector = document.getElementById("selector")
    selector.style.visibility = "visible"
    
  }

  function goToNotifications() {
    const notifications = document.getElementById("notifications")

    if(notifications.style.visibility == "visible"){
      notifications.style.visibility = "collapse"
    }else{
      notifications.style.visibility = "visible"
    }    
  }

  function goToDetail(){
    const detail = document.getElementById("detail")
    detail.style.visibility = "visible"
  }

  return (
    <div className='page'>
      <Header />
      <img className='home_alerts_icon' onClick={goToNotifications} src={Mегафон} alt="Alertas Muni" />
      <div className='map_container'>
          <iframe className='map' frameBorder="0" 
          src="https://www.bing.com/maps/embed?h=400&w=500&cp=-33.490837767875675~-70.61734914779663&lvl=16&typ=d&sty=h&src=SHELL&FORM=MBEDV8" 
          scrolling="no">
     </iframe>
      </div>
      <div id='red_marker_container' className='red_marker_container'>
        <img className='red_marker' onClick={goToDetail} src={RedMarker} alt="lmao" />
      </div>
      <div className='alert'>
        <button className='alert_button' onClick={alertClick} variant='contained'>Denunciar</button>
      </div>
      <Selector/>
      <Info/>
      <Detail />
      <Notifications/>

    </div>

  )
}

export default HomePage
