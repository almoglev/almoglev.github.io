import { useState, useEffect } from "react"
import Category from "./Category"
import "./Projects.scss"
import {featuredPortfolio, fullstackPortfolio, frontendPortfolio, backendPortfolio} from "../../projects.js"
import {Reply} from '@material-ui/icons'

function Projects() {
  const [selected, setSelected] = useState("featured")
  const [data, setData] = useState([])
  const catogories = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "fullstack",
      title: "Fullstack",
    },    
    {
      id: "frontend",
      title: "Frontend",
    },    
    {
      id: "backend",
      title: "Backend",
    },
  ]

  useEffect(() => {
    switch(selected) {
      case "featured": 
        setData(featuredPortfolio)
        break
      case "fullstack": 
        setData(fullstackPortfolio)
        break      
      case "frontend": 
        setData(frontendPortfolio)
        break      
      case "backend": 
        setData(backendPortfolio)
        break
      default: 
        setData(featuredPortfolio)
    }
  }, [selected])
  

  return (
    <div className='projects' id='projects'>
      <h1>My Projects</h1>

      <ul>
        {catogories.map((item)=> (
          <Category
           key={item.id} 
           id={item.id}
           title={item.title} 
           isActive={selected === item.id} s
           setSelected={setSelected}/>
        ))}
      </ul>
      
      <div className="container">
        {data.map(d=>(
          <div className="item" key={d.id}>
            <img src={d.img} width="200px" />
            <h3>{d.title}</h3>
            <br />
            <span>{d.techstack}</span>
            <br />
            <a href={d.deployLink} target="_blank" rel="noreferrer"><Reply className="icon"/></a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects