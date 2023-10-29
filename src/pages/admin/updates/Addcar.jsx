import React from 'react'
import Carform from '../Carform'
import { Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import {  addCarToDatabase } from '../../../manager/action/actionCar'
import { useNavigate } from 'react-router-dom'

const Addcar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Container>
        <h1 className='text-center my-3'>Add Car</h1>
        <Carform sendData={(i)=>{
dispatch(addCarToDatabase(i))
navigate("/admin")
        }}/>
    </Container>
  )
}

export default Addcar