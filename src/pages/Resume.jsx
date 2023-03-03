import { Fragment } from "react"
import { useState } from 'react';
import styled from 'styled-components'


// 			<img className="CvES"src="../../public/cv.png"></img>
const Resume = () => {

    return(
		<CVes>
	
			<div id="resume">
		
			<a class="face-button" href="../../public/cv.pdf">

			<div class="face-primary">
				<span class="icon fa fa-cloud"></span>
				Descargar Currículum
			</div>
			
			<div class="face-secondary">
				<span class="icon fa fa-hdd-o"></span>
				Tamaño: 127 KB
			</div>

			</a>
			</div>
		
		</CVes>
	
	);
};

const CVes = styled.div`
	
	
@import url('//fonts.googleapis.com/css?family=Roboto:500');
@import url('//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css');

#icons{
	display:block;
	font-size: 3em;
}

 .face-button {
	position: relative;
	 height: 64px;
	 margin-top: 8vh;
	 display: inline-block;
	 border: 3px solid white;
	 font-size: 20px;
	 font-weight: 500;
	 text-align: center;
	 text-decoration: none;
	 color: white;
	 overflow: hidden;
}
 .face-button .icon {
	 margin-right: 10px;
}
 .face-button .face-primary, .face-button .face-secondary {
	 display: block;
	 padding: 0 400px;
	 line-height: 64px;
	 transition: margin 0.4s;
}
 .face-button .face-primary {
	 background-color: #FFF0DF;
	 color: black;
}
 .face-button:hover .face-primary {
	 margin-top: -64px;
}

	#resume {
		width: 100vw;
		color: black;
		display: flex;
		background-color: #000000;
		padding-top: 30vh;
		margin-top: 10vh;
		height: 60vh;	
	}

`

export default Resume;