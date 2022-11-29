import React, {useRef} from 'react'

import arrow from '../assets/arrow.png'


export const Detail = () => {

  const countRef = useRef()
  const buttonRef = useRef()

  function goBack(){
    const detail = document.getElementById("detail")
    detail.style.visibility = "collapse"
  }

  function addLike(){
    const count = countRef.current.innerHTML.trim()
    console.log(count);
    if(count === "1"){
      countRef.current.innerHTML = "2"
      buttonRef.current.innerHTML = "-"
    }else if(count === "2"){
      countRef.current.innerHTML = "1"
      buttonRef.current.innerHTML = "+"
    }else{
      console.log("es cualquier wea menos un string");
    }
  }

  return (
    <div id='detail'>
      <div className='situation'>
        <div className='backArrowContainer'>
          <img onClick={goBack} className='detail-back-icon' src={arrow} />
        </div>
        <div id='situation-name' className='situation-name'> <h3>Alerta Asalto</h3> </div>
        <div className='situation-likes'>
          <div className='situation-likes-number'> <p ref={countRef}> 1 </p></div>
          <div className='situation-likes-button'>  <button ref={buttonRef} onClick={addLike} className='button' variant='contained'>+</button> </div>
        </div>
      </div>
      <div className='description'>
        <p className='detail-date'> 29/11/2022 - 10:20 - Vicuña Mackena 3939</p>
        <p id='detail-description' className='detail-description'>Asaltan a un señor al frente del Negocio. Eran 3 sujetos, al parecer con un cuchillo. Se fueron hacia el norte</p>
        
      </div>
      <div className='response'>
        <h4>Seguridad ciudadana esta revisando el caso</h4>
      </div>
    </div>
  )
}

export default Detail
