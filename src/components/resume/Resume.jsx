import { useState } from 'react'
// import { ImportantDevicesRounded, SchoolRounded, SatelliteOutlned } from "@material-ui/icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faCogs, faSpaceShuttle } from '@fortawesome/free-solid-svg-icons'
import "./Resume.scss"

function Resume() {

  const [currSlide, setCurrSlide] = useState(0)

  const data = [
    {
      type: "Experience", //h1
      time: "October 2021 - Present", //h2
      title: "Backend Developer at WSC Sports", //h3
      description :["End-to-end development using leading frameworks, technology and cloud services (Azure, AWS)","Developing high-quality & scalable code for new features and components, as well as maintaining existing code","Deployment with CI/CD pipelines","Working as part of a team in an agile environment, collaborating with product managers, UX designers, QA engineers and other developers"], //span
    },
    {
      type: "Experience", //h1
      time: "February 2021 - October 2021", //h2
      title: "Security Researcher at Accenture", //h3
      description :["Cryptography & Blockchain security research of vulnerability, exploits and network security","Smart-contracts vulnerability research","End-to-end design & development of attacking and detection tools", "Delivering Blockchain workshops to teams around the world"], //span
    },
    {
      type: "Education", //h1
      time: "October 2017 - August 2021", //h2
      title: "B.Sc. in Computer Science from Bar-Ilan University", //h3
      description :["Final Degree Project under the supervision of Computer Science Prof. Onn Shehory (Grade: 100)", "Self learning of React, NodeJS, ExpressJS, MongoDB & Firestore via Udemy"], //span
    },
    {
      type: "National Service", //h1
      time: "March 2012 - June 2014", //h2
      title: "IDF Intelligence Corps - Unit 9900", //h3
      description :["Shchakim program", "Satellite Operator in the Image Processing Team","In charge of processing raw satellite feeds into visual satellite imagery using simultaneous image processing systems","An extensive 6-month course including physics, space and satellite communication engineering","Cooperation with aerospace industries and military authorities"], //span
    },
  ]

  const handleClick = (direction) => {
    direction === "left" ? setCurrSlide(currSlide > 0 ? currSlide-1 : data.length-1) : 
    setCurrSlide(currSlide < data.length-1 ? currSlide+1 : 0 )
  }

  return (
    <div className='resume' id='resume'>
      <div className="slider" style={{transform: `translateX(-${currSlide * 100}vw)`}}>
      {data.map((d,i)=>(
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer" key={i}>
                <div className="imgContainer">
                  {d.type === "Experience" ? <FontAwesomeIcon icon = {faCogs} size="2xl" /> : d.type === "Education" ? <FontAwesomeIcon icon = {faGraduationCap} size="2xl" /> : <FontAwesomeIcon icon = {faSpaceShuttle} size="2xl" />}&nbsp;&nbsp;&nbsp;&nbsp;
                  <h1>{d.type}</h1>
                </div>
                <h2>{d.time}</h2>
                <h3>{d.title}</h3>
                
                {d.description.map((line) =>(
                  <span>
                     {`⮞  ${line}`}
                    <br />
                  </span>
                ))}
                
            </div>   
            </div>
          </div>
        </div>
        ))}
      </div>
      <img src="assets/arrow.png" className="arrow left" onClick={() => handleClick("left")} />
      <img src="assets/arrow.png" className="arrow right" onClick={() => handleClick()} />
    </div>
  )
}

export default Resume