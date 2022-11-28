import React from 'react'
import NavBar from './nav_bar'

export const Detail = () => {
  return (
    <div className='detail'>
      <div className='situation'>
        <div className='situation-name'> <h3>Alerta Ruido Fuerte</h3> </div>
        <div className='situation-likes'>
          <div className='situation-likes-number'> <p> 200 </p></div>
          <div className='situation-likes-button'>  <button className='button' variant='contained'>+</button> </div>
        </div>
      </div>
      <div className='description'>
        <table align='center'><tr><th>Fecha:</th><th>Ayer</th></tr><tr><th>Descripcion:</th><th>Adolecentes fiesta</th></tr><tr><th>Direccion:</th><th>Mi Casa</th></tr></table>
      </div>
      <div className='response'>
        <h4>A los de seguridad ciudadana les cuesta</h4>
      </div>
    </div>
  )
}

export default Detail
