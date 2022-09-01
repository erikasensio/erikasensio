import "./Header.css"
// import Menu from "./Menu"
import hamMenu from "../img/hamMenu.svg"

function Header() {

    const handleNavHome = () => {
        console.log("handleNavHome")
    }

    const handleOpenMenu = () => {
        console.log("handleNavMenu");
       // <Menu />
    }

    return <div className="header">
        <a className="logo" href="#" onClick={handleNavHome}>Erik Asensio - Full Stack Developer</a>
        {/* <img className="hamburgerMenu" src={hamMenu} alt="" onClick={handleOpenMenu} /> */}
    </div>
}

export default Header