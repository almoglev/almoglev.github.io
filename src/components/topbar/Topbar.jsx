import "./Topbar.scss"
import {Phone, Mail, LinkedIn, GitHub} from '@material-ui/icons'

function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">portfolio.</a>
          <div className="itemContainer">
            <Phone className="icon" />
            <span>+972 544266287</span>
          </div>

          <div className="itemContainer">
            <Mail className="icon" />
            <span>almoglev3@gmail.com</span>
          </div>

          <div className="itemContainer">
            <a href="https://linkedin.com/in/almoglev" className="ahref" target="_blank" rel="noreferrer">
              <LinkedIn className="icon" />
              <span>linkedin.com/in/almoglev</span>
            </a>
          </div>
          
          <div className="itemContainer">
            <a href="https://github.com/almoglev" className="ahref" target="_blank" rel="noreferrer">
              <GitHub className="icon" />
              <span>github.com/almoglev</span>
            </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar