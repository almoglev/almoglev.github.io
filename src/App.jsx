import { useState } from "react"
import Topbar from "./components/topbar/Topbar"
import Intro from "./components/intro/Intro"
import Projects from "./components/projects/Projects"
import Resume from "./components/resume/Resume"
import Techstack from "./components/techstack/Techstack"
import Contact from "./components/contact/Contact"
import Menu from "./components/menu/Menu"

// styles
import "./App.scss"

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <Techstack />
        <Projects />
        <Resume />
        <Contact />
      </div>
    </div>
  );
}

export default App;
