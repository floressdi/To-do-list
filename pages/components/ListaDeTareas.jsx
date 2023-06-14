import React, { useState } from 'react'
import Tarea from './Tarea'
import Form from "./Form";


export default function ListaDeTareas() {

  const [tareas, setTareas]= useState([]); //agregamos un arreglo vacio para su valor inicial

    const agregarTarea= tarea=>{
        if(tarea.texto.trim()){ //probamos que la cadena no esta vacía
            tarea.texto= tarea.texto.trim();//quitamos espacios inecesarios en la cadena
            const tareasActualizadas = [tarea, ...tareas]; //agregaremos la tarea al inicio del arreglo y las convertiremos a tareas individuales
            setTareas(tareasActualizadas); //toma las tareas anteriores y agregar las nueva
        }   
    }

    const eliminarTarea = id =>{
        const tareasActualizadas = tareas.filter(tarea => tarea.id != id)// si se cumple esta condición va a incluirse en el arreglo pero si el id es igual no se incluye
        setTareas(tareasActualizadas);
    }

    const completarTarea = id =>{
        const tareasActualizadas = tareas.map(tarea =>{
            if(tarea.id === id){ //si el id es igual entonces actualizamos su estado
                tarea.completada = !tarea.completada; //si es verdaero entonces sera falso y si es falso entonces sera verdaero
            }
            return tarea; //map necesita retornar un valor
        })
        setTareas(tareasActualizadas); 
    }


  return (
    <div className='md:w-8/12 md:mx-auto '>
        <h3 className='text-center text-2xl my-5 font-bold'>Tareas </h3>
        <div className='mb-32'>
        {
            tareas.map((tarea)=>
                <Tarea
                    key={tarea.id}
                    id={tarea.id}
                    text={tarea.texto} 
                    completada={tarea.completada}
                    completarTarea={completarTarea}
                    eliminarTarea={eliminarTarea}
                />
            )
        }

        </div>
       
        <div className='w-full md:w-8/12 flex justify-center fixed bottom-0 formcontainer'>
            <Form onSubmit={agregarTarea} /> 
        </div>
    </div>
  )
}
