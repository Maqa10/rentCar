import React from 'react'
import Carform from '../Carform'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { editCar } from '../../../manager/action/actionCar'

const Editcar = () => {
const {id} = useParams()
const shop =useSelector(p=>p)
const selectcar =shop.find(i=>i.id.toString() === id)
const dispatch  = useDispatch()
  const navigate = useNavigate();
  return (

    <div>
        <h1 className='text-center my-3'>Edit Car</h1>
        <Carform editcar = {selectcar} sendData={(item)=>{
dispatch(editCar(selectcar.id, item));
navigate("/admin");
        }}/>
    </div>
  )
}

export default Editcar