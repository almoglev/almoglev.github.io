import "./Intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from 'react'

function Intro() {
  const textRef = useRef()

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["am a Software Engineer", "graduated with a B.Sc. in Computer Science", "love learning new technologies", "love solving riddles & puzzles"],
    })
  }, [])
  
  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src="assets/me.png" alt="Almog Lev" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Almog Lev</h1>
          <h3>I <span ref={textRef}></span></h3>
        </div>
        <a href="#projects">
          <img src="assets/down.png" />
        </a>
      </div>
    </div>
  )
}

export default Intro