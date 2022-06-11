import React, { useState } from 'react'
import "../css/cardStyle.css";
import Swal from 'sweetalert2'

import 'animate.css';

export const CardTime = ({title,date,imgUrl}) => {
	const [url, setUrl] = useState(imgUrl);
	const [titulo, setTitulo]  = useState(title)
	const [fecha, setFecha] = useState("9. 01. 2021")

	const clickImagen = () =>{
		Swal.fire({
		  title: titulo,
		  text: fecha,
		  showConfirmButton: false,
		  imageUrl: url,
		  imageAlt: titulo,
		  customClass:{
			popup: 'mar',
			image: 'imagen',
			title: 'font2',
			confirmButton: 'color-principal',
			htmlContainer: 'font'
		  },
		  showClass: {
			popup: 'animate__animated animate__bounceInDown'
		  },
		  hideClass: {
			popup: 'animate__animated animate__backOutUp'
		  }
		 
		})
	  }
	 
  return (
	<div className="evento">
			<div onClick={clickImagen} className="foto" data-aos="fade-up">
				<img src={imgUrl} alt=""/>
				<p>{fecha}</p>
			</div>
			<h3 className="fecha">{fecha}</h3>
		</div>
  )
}
