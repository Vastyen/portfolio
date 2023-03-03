import { Fragment } from "react"
import './Home.css'
import {FaReact,FaNode,FaDocker,FaGit,FaVuejs} from 'react-icons/fa';
import {DiJava,DiCss3,DiPostgresql} from 'react-icons/di';
import {SiTypescript, SiSpring,SiJavascript, SiMysql, SiPython} from 'react-icons/si';


const Me = () => {
    return (
        <Fragment>
            <div id="me">
                <div className="Left">
                        <div className="typing-demo">¡Hola!</div>
                        <div className="typing-demo2">Soy Bastián Escribano</div>
                        <div className="typing-demo3">Desarrollador Full-Stack Semi-Senior</div>
                        <img className="Memoji" src='../../public/Memoji.png'></img>          
                </div>
                <div className="Right">
                    <label className="TituloSobre">Mi Perfil</label>
                    <label className="Sobre">Férvido por la computación y la resolución de problemas. En el desarrollo de software me encuentro en constante aprendizaje de nuevas tecnologías que llamen mi atención. "En el proceso de desarrollo de software, el primer paso es entender el problema". Interesado en ingeniería de software, arquitecturas, paradigmas, principios SOLID y patrones de diseño.</label>
                    <label className="TituloStack">Mi Stack</label>
                    <div className="Stack">
                    <FaReact    className="Icon"></FaReact> 
                    <SiSpring   className="Icon"></SiSpring>
                    <SiJavascript     className="Icon"></SiJavascript>
                    <FaNode       className="Icon"></FaNode>
                    <DiJava       className="Icon"></DiJava>
                    <SiTypescript  className="Icon"></SiTypescript>
                    </div>
                    <div className="Stack">
                    <FaDocker   className="Icon"></FaDocker>
                    <FaGit      className="Icon"></FaGit>
                    <DiCss3       className="Icon"></DiCss3>
                    <FaVuejs    className="Icon"></FaVuejs>
                    <DiPostgresql  className="Icon"></DiPostgresql>
                    <SiMysql       className="Icon"></SiMysql>
                    <SiPython     className="Icon"></SiPython>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Me;