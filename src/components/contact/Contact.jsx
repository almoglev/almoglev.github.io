import { useState, useRef } from "react"
import "./Contact.scss"
import emailjs from 'emailjs-com'

function Contact() {
  const formRef = useRef()
  const [done, setDone] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setDone(false)
    emailjs.sendForm(
      "service_93dax6c",
      "template_1whvzvl",
      formRef.current,
      "user_SrGhZTkKZsKEmmNHiq4WV"
    )
    .then(
      (result) => {
        console.log(result.text)
        setDone(true)
      },
      (error) => {
        console.log(error.text)
      })
  }

  return (
    <div className="c">
      <div className="c-wrapper">
        <div className="c-left">
          <img src="assets/shake.svg" alt="" />
        </div>
        <div className="c-right">
          <h2>Get In Touch</h2>
          <form onSubmit={handleSubmit} ref={formRef}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="email" placeholder="Email" name="user_email" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <textarea placeholder="Message" rows="6" name="message"></textarea>
            <button type="submit">Send Me</button>
            {done ? <span className="isDone"><br /><br/>Thank you, I'll reply asap.</span> : <></>}
         </form>
        </div>
      </div>
    </div>
    // <div className='contact' id='contact'>
    //   <div className="left">
    //     <img src="assets/shake.svg" alt="" />
    //   </div>
    //   <div className="right">
    //     <h2>Keep In Touch</h2>
    //     <form onSubmit={handleSubmit}>
    //       <input type="email" placeholder="Email" />
    //       <textarea placeholder="Message"></textarea>
    //       <button type="submit">Send</button>
    //       {msg ? <span>Thanks, I'll reply ASAP.</span> : <></>}
    //     </form>
    //   </div>
    // </div>
  )
}

export default Contact