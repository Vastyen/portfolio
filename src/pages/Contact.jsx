import React, { Fragment } from 'react'; // we need this to make JSX compile
import styled from 'styled-components';

export const Contact = () =>{
    return (<Fragment>
        <FormStyle>
            <div data-aos="fade-up" id="talk">
            <form className="form" target="_blank" action="https://formsubmit.co/bastian.escribano@usach.cl" method="POST">
                <input type="text" name="_honey" className="dn"/>
                        <input type="hidden" name="_captcha" value="true"/>
                            <input type="hidden" name="_subject" value="vastien.dev"/>
                                <div className="form-control">
                                    <input type="text" name="Name" id="Name" placeholder='Escribe tu nombre aquí'required/>
                                        <label>Nombre</label>
                                </div>
                                <div className="form-control">
                                    <input  type="email" name="Email" id="Email" placeholder='Escribe tu correo electrónico aquí' required/>
                                        <label>Email</label>
                                </div>
                                <p><textarea name="Mensaje" placeholder='Escribe tu mensaje aquí'></textarea></p>
                                <button type="submit">Enviar</button>
                </form>
            </div>
        </FormStyle>

        </Fragment>

    )
}


const FormStyle = styled.div`
.dn { 
    display:none;
}

#talk{
    width: 100vw;
    color: white;
    display: flex;
    background-color: #0b0b0f;
    padding-top: 20vh;
    height: 80vh;	
}


.styledForm {
    position: relative;
}
.form {
    background-color: #202123;
    font-weight: bolder;
    font-size: 18px;
    margin:0 auto;
    width:50vw;
    margin-inline: 25vw;
    margin-bottom: 5vh;
    height: 75vh;
    border-radius: 8px;
    box-shadow: 0 0 40px -10px #000;
    padding: 4vh;
    margin-top: -1vh;
    box-sizing: border-box; 
    position: relative;

}
textarea {
    width: 100%;
    padding: 2vh;
    color: white;
    font-weight: bolder;
    font-size: 15px;
    height: 25vh;
    box-sizing: border-box;
    background: none;
    outline: none;
    resize: none;
    border: 0;
    transition: all .3s;
    border-bottom: 2px solid #bebed2;
}
input {
    width: 100%;
    padding: 1vh;  
    font-weight: bolder;
    font-size: 15px;
    box-sizing: border-box;
    background: none;
    outline: none;
    resize: none;
    border: 0;
    color: white;
    transition: all .3s;
    border-bottom: 2px solid #bebed2
}
input:focus {
    border-bottom: 10px solid #78788c;
}
p:before {
    content: attr(type);
    display: block;
    margin: 1vh;
    font-size: 18px;
}
button {
    font-weight: bolder;
    float: right;
    margin: 2vh;
    color: white;
    right: 20px;
    border: 3px solid white;
    background: 0;
    padding: 40px;
    cursor: pointer;
    transition: all .3s;
    font-size: 25px;
}
button:hover {
    opacity: 0.3;
    cursor:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>📫</text></svg>") 16 0,auto; /*!emojicursor.app*/  
}
span {
    margin: 0 5px 0 15px
}
.form-control{
    position: relative;
    margin: 20px 0 40px;
}
.form-control input {
    background-color: transparent ;
    display: block ;
    width: 100%;
    margin-top: 30px;;
    font-size: 13px;
}
.form-control label{
    font-size: 13px;
    position: absolute;
    top: -2px;
    left: 0;
    /*pointer-events: none;*/
}
.form-control label {
    display: inline-block;
    font-size: 20px;
    min-width: 5px;
    transition-duration: 400ms;
}
.form-control input:focus + label,
.form-control input:valid + label,
.form-control label:hover,
.form-control input:hover + label
{
    font-size: 15px;
    transform: translateY(-20px);
    transition-delay: 80ms;
    transition-duration: 500ms;
}
.form-control input:valid{
    border-bottom-color: rgb(76, 161, 47);
}
@media (max-width: 621px) {
    .form {
        margin: 4vw;
        margin-top: 7vh;
        width: 90vw;
    
}
`