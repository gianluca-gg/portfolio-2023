import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from 'emailjs-com';
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_m7gn3zj', 'template_1d7zfwl', formRef.current, 'ni4QnIoEDhlJ2kYXe')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });

  }
  return ( 
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
      <h1 className="c-title">Parliamone.</h1>
      <div className="c-info">
      <div className="c-info-item">
        <img src={Phone} alt="" className="c-icon" />
        +39 3336938907
      </div>
      <div className="c-info-item">
        <img src={Email} alt="" className="c-icon" />
        gianlucagattuso7@gmail.com 
      </div>
      <div className="c-info-item">
        <img src={Address} alt="" className="c-icon" />
        Via Ada Negri 2 20141 Milano
      </div>
        </div>

      </div>
        <div className="c-right">
        <p className="c-desc">
            <b>Vuoi contattarmi?</b> Invia un messaggio col form qui sotto.
          </p>
      <form ref={formRef} onSubmit={handleSubmit}>
        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
        <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message"></textarea>
        <button>Invia</button>
        {done && "Grazie..."}
      </form>
        </div>
      </div>
    </div>
  )
}

export default Contact