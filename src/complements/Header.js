import "./style.css"
import logo from "../assets/logotipo.png"

function Header() {
    return(
        <header>
            <img src={logo}/>
            <a id="item_nav"><h3>Personagens</h3></a>
            <a id="item_nav"><h3>Campanhas de RPG</h3></a>
            <a id="item_nav"><h3>SAC</h3></a>


            
        </header>
    )
}

export default Header