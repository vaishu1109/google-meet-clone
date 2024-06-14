import "./Navbar.css";
import Screenshare from "./cast.png"
function Navbar({name}) {
  return (
    <div className="navbar-presenting">
        <div className="left">
            <img src={Screenshare} alt="scrren" className="share-screen-logo"/>
            <span className="presenter-name">{name}(You, presenting)</span>
        </div>
        <div className="right">
            <button className="stop-prenting-btn">Stop presenting</button>
        </div>
    </div>
  )
}

export default Navbar