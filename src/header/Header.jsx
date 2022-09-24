import Logo from '../image/logo.svg'
import Background from '../image/bg-desktop.svg'

export function Header(){
    return(
        <header className="Header">
            <img className="Logo" src={Logo} alt="logo"/>
            <img className="Background" src={Background} alt="background-design"></img>

        </header>

    )
}