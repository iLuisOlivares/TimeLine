import React, { useState } from 'react'
import  '../css/nuevoRecuerdo.css'
import {useForm} from '../hooks/useForm'


export const NuevoRecuerdo = () => {
//   const initialForm = {
//     titulo: '',
//     fecha: '',
//     imagen: '',
// }
// const {formValues, handleInputChange, resetInput}= useForm(initialForm);
// const [recuerdo, setRecuerdo] = useState({});
// const { titulo, fecha, imagen } = formValues;

//   const url = 'http://localhost:8080/api/recuerdos';

//   const handleClick = (e) =>{
//     e.prevevntDefault()
//     setRecuerdo({activo: true, titulo: titulo, fecha:fecha, imgUrl:"https://i.ytimg.com/vi/xsVzd_qK3Bw/maxresdefault.jpg", descripcion:"Con amor"});
//   const config =  {method: 'POST',body:JSON.stringify(recuerdo)};

//   }

  return (
    <div className='top'>
        <form className="form">
      <div className="title">Hola!</div>
      <div className="subtitle">Aqui puedes registrar un nuevo recuerdo 🎆 🌉 🌆</div>
      <div className="input-container ic1">

        <input 
        name='titulo'
         
          id="titulo" 
          required 
          className="input" 
          type="text" 
          placeholder=" " />

        <div className="cut"></div>
        <label htmlFor="titulo" className="placeholder">Titulo</label>
      </div>
      <div className="input-container ic2">
        <input 
          id="fecha" 
          required  
          className="input" 
          type="date" 
          name='fecha'
          />
        <div className="cut"></div>
        <label htmlFor="fecha" className="placeholder">fecha</label>
      </div>
      <div className="input-container ic2">
        <input 
        accept="image/*" id="imagen" required className="esconder input file-select pointer" type="file" placeholder=" " />
        <div className="cut cut-short"></div>
        <label htmlFor="imagen" className="placeholder">imagen</label>
      </div>
      <button type="submit" className="submit">Subir </button>
    </form>

        
    </div>
  )
}
