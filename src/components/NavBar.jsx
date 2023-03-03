import { Fragment } from "react"
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
    return(
        <Fragment>
        <div id="NavBar">
            <div id="Logo">
                <a className="LinkGato" href="https://github.com/vastien">
                    <img className="Logo" src='../public/Profile.png'></img>
                    <p className="SubLogo">vastien</p>
                </a>
            </div>
            <div id="Links">
                <Link className="Link" to="/">SOBRE MÍ</Link>
                <Link className="Link" to="/proyectos">PROYECTOS</Link>
                <Link className="Link" to="https://github.com/vastien">GITHUB</Link>
                <Link className="Link" to="https://vastien.dev/public/cv.pdf">CURRÍCULUM</Link>        
                <Link className="Link" to="https://www.linkedin.com/in/vastien/">LINKEDIN</Link>
                <Link className="Link" to="/contacto">CONTACTO</Link>
            </div>
        </div>
        </Fragment>
    )
}

export default NavBar;