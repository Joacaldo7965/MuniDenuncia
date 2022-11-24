import React from 'react'
import { Button, IconButton, ListItemButton } from '@mui/material'

import Header from '../components/header'
import LogoUSM from '../assets/usm.png'

export const TestPage = () => {
  return (
    <div className='page'>
      <Header/>
      <h2>Página Test</h2>
      <img src={LogoUSM} height={100} alt='logo usm' /><br />
      <ListItemButton variant='contained'>Material UI Button</ListItemButton>
    </div>
  )
}

export default TestPage
