import styled from 'styled-components'
import {FaReact,FaNode,FaDocker,FaGit,FaVuejs} from 'react-icons/fa';
import {DiJava,DiCss3,DiPostgresql, DiPython} from 'react-icons/di';
import {SiMongodb,SiTypescript, SiSpring,SiJavascript, SiMysql, SiPython, SiSpringboot} from 'react-icons/si';

const Projects = () => {
    return (
        <AllProjects>
            <div id="projects">

            <div id="up">


            <div id="card" className="vendealestado">
                <a href="https://vendealestado.cl">
                <h2>vendealestado.cl</h2>
                <h4>Filtros personalizados, estadísticas y monitoreo de licitaciones del estado de Chile.</h4>
                <div>
                <SiMongodb className="IconStack"></SiMongodb>
                <FaReact className="IconStack"></FaReact>
                <FaNode className="IconStack"></FaNode>
                <FaDocker className="IconStack"></FaDocker>
                <FaGit className="IconStack"></FaGit>
                <SiJavascript className="IconStack"></SiJavascript>
                <DiCss3 className="IconStack"></DiCss3>
               </div>
               </a>
                </div>


            
            <div id="card" className="teasesoro">
                <a href="https://teasesoro.cl">
                <h2>teasesoro.cl</h2>
                <h4>Publicidad de Clases Particulares.</h4>
                <div>
                <SiJavascript className="IconStack"></SiJavascript>
                <FaReact className="IconStack"></FaReact>
                <DiCss3 className="IconStack"></DiCss3>
                <FaGit className="IconStack"></FaGit>
                <SiTypescript className="IconStack"></SiTypescript>
                </div>
                
                </a>
              
            </div>
            <div id="card" className="atomics">
                <a href="https://atomics.cl">
                <h2>atomics.cl</h2>
                <h4>Servicios Informáticos a Medida.</h4>
               <div>
                <SiJavascript className="IconStack"></SiJavascript>
                <DiCss3 className="IconStack"></DiCss3>
               </div>
               </a>

                </div>
            </div>


            <div id="down">


            <div id="card" className="beproductive">
                <a href="https://vastien.github.io/be-productive-website/">
                <h2>Be Productive</h2>
                <h4>Administrador de Tareas del Sistema.</h4>
                <div>
                <SiJavascript className="IconStack"></SiJavascript>
                <DiCss3 className="IconStack"></DiCss3>
                <DiPython className="IconStack"></DiPython>
               </div>
               </a>
            </div>
    

            <div id="card" className="qr">
                <a href="https://github.com/vastien/qr-generator">
                <h2>Sistema de Ingreso QR</h2>
                <h4>Generador de Códigos QR y Almacenamiento de Información en una Base de Datos.</h4>
                
                <div>
                <DiPython className="IconStack"></DiPython>  
                <SiMysql className="IconStack"></SiMysql>
               </div>
               </a>

                </div>


            <div id="card" className="qr">
                <a href="https://github.com/vastien/intranet-webapp">

                <h2>Nube de Documentos</h2>
                <h4>Almacenamiento de Archivos en una Base de Datos.</h4>
                <div>
            
                <DiPostgresql className="IconStack"></DiPostgresql>
                <SiJavascript className="IconStack"></SiJavascript>
                <DiCss3 className="IconStack"></DiCss3>
                <FaVuejs className="IconStack"></FaVuejs>
                <SiSpring className="IconStack"></SiSpring>

               </div>
               </a>

                </div>




            </div>
            


            </div>
        </AllProjects>
    )
}



const AllProjects = styled.div`
#projects {
    width: 100vw;
    color: white;
    background-color: #0b0b0f;
    padding-top: 25vh;
    height: 75vh;	
    
}
.IconStack{
    font-size: 32px;
    display: inline;
    margin: 5px;
}

h4{
    width: 300px;
    margin: 1vh;
}

#up{
    display:flex;
    flex-direction: row;
    margin-bottom: 10vh;
}
#down{
    display:flex;
    flex-direction: row;
}

#card{
    padding: 2vh;
    border-radius: 5px;
    -webkit-box-shadow: -2px 6px 15px 7px rgba(0,0,0,0.69);
    -moz-box-shadow: -2px 6px 15px 7px rgba(0,0,0,0.69);
    box-shadow: -2px 6px 15px 7px rgba(0,0,0,0.69);
    justify-content: center;
    align-items: center;
    text-align:center;
    position:relative;
    display:flex;
    margin: 0 auto;
    background-color: #FFF0DF;
    display:block;

}
a{
    text-decoration: none;
    color:black;
    cursor:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>🚀</text></svg>") 16 0,auto; /*!emojicursor.app*/  }

}

#card:hover{
    cursor:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>🚀</text></svg>") 16 0,auto; /*!emojicursor.app*/  }
`

export default Projects;

