import React from 'react'
import NavBar from '../components/nav_bar'

export const Header = () => {
  return (
    <div className='header'>
      <h1 className='app_header_title'>Muni Denuncia</h1>
      <h1 className='app_header_subtitle'>Tu buen vivir</h1> {/* TODO: (IDEA) poner esta letra en cursiva */}
      {/*<NavBar /> */}
    </div>
  )
}

export default Header
