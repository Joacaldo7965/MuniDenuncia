import React from 'react'

import { Button } from '@mui/material'

import Header from '../components/header'
import MapaTest from '../assets/mapa.png'

export const HomePage = () => {
  return (
    <div className='page'>
      <Header/>
      <div className='map_container'>
        {/* TODO: Insertar un mapa de alguna forma XD */}
        <img className='map' src={MapaTest} alt='mapa de test' />
      </div>
      <div className='alert'>
        <button className='alert_button' variant='contained'>Material UI Button</button>
        
      </div>
    </div>
  )
}

export default HomePage
