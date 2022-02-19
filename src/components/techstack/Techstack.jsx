import "./Techstack.scss"

function Techstack() {
  const data = [
    {
      top: "Frontend", // h2
      center: [
        {lang: "React + Redux", img: "assets/react.png"},
        {lang: "JavaScript", img: "assets/javascript.png"},
        {lang: "HTML", img: "assets/html.png"},
        {lang: "CSS", img: "assets/css.png"},
      ], // p
    },
    {
      top: "Backend",
      center: [
        {lang: "C# (.NET Core)", img: "assets/csharp.png"},
        {lang: "Java", img: "assets/java.png"},
        {lang: "Python", img: "assets/python.png"},
        {lang: "NodeJS + ExpressJS", img: "assets/nodejs.png"},
      ]
    },
    {
      top: "Database",
      center: [
        {lang: "Microsoft SQL Server", img: "assets/ssms.png"},
        {lang: "MongoDB", img: "assets/mongodb.png"},
        {lang: "CosmosDB", img: "assets/cosmosdb.png"},
        {lang: "Firebase", img: "assets/firebase.png"},
      ]
    },
  ]
  return (
    <div className='techstack' id='techstack'>
      <h1>Tech Stack</h1>
      <div className="container">
        {data.map((d, i) => (
          <div className="card" key={i}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <h2>{d.top}</h2>
            </div>
            <div className="center">
              {d.center.map((c, j)=>(
                <div key={j}>
                    <img src={c.img} alt="" width="35px"/>
                    <span>{c.lang}</span><br />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Techstack