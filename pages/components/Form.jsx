import React, {useState} from 'react';
import Formcss from '../../styles/Form.module.css'
import {v4 as uuidv4} from 'uuid'


export default function Form(props) {

  const [input, setInput] = useState('')

  const manejarCambio = e =>{ //manejaremos el cambio que ingrese el usuario
    setInput(e.target.value)
  }

  const manejarEnvio = e =>{
    e.preventDefault();
    const tareaNueva ={
      id:uuidv4(),
      texto:input,
      completada: false
    }
    props.onSubmit(tareaNueva) //llama a la funcion para agregar la tarea 
  }

  return (
    <form onSubmit={manejarEnvio} className={`${Formcss.form} w-8/12 p-5`}>
        <input 
            className='text-center rounded-2xl p-2 w-full bg-white'
            type='text'
            name='texto'
            placeholder='Escribe nueva tarea'
            onChange={manejarCambio}
        />
    </form>
  )
}
