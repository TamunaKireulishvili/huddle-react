import Fb from '../image/fb.png'
import Twitter from '../image/twitter.png'
import Instagram from '../image/instragram.png'

export function Footer(){
    return(
        <footer className="footer">
            <img className="Fb" src={Fb} alt="fb-icon"></img>
            <img className="Twitter" src={Twitter} alt="twitter-icon"></img>
            <img className="Instagram" src={Instagram} alt="instagram-icon"></img>
             
        </footer>
    )
}