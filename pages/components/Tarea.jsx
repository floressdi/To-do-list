import React from 'react'
import {AiFillCloseCircle} from 'react-icons/ai'

export default function Tarea({id, text, completada, completarTarea, eliminarTarea})  {
  return (
    <div className={completada ? 'contenedortarea completada' :'contenedortarea'}>
        <input 
            onClick={()=>completarTarea(id)}
            type='checkbox'
        />
      <p>{text}</p>
      <div
        className='text-xl'
        onClick={() => eliminarTarea(id)}
      >
        <AiFillCloseCircle/>
      </div>
    </div>
  )
}
