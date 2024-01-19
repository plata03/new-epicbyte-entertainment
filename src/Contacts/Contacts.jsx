import "./contactsstyle.css"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import emailjs from '@emailjs/browser'
import { useState } from "react";

const Contacts = () => {


    const [nome, setNome] = useState('');
    const [cognome, setCognome] = useState('');
    const [mess, setMess] = useState('');
    const [mail, setMail] = useState('');

    const handleChangeNome = event => {
        setNome(event.target.value);
    };

    const handleChangeCognome = event => {
        setCognome(event.target.value);
    };

    const handleChangeMail = event => {
        setMail(event.target.value);
    };

    const handleChangeMess = event => {
        setMess(event.target.value);
    };

    
    

    const sendEmail = (e) => {
        e.preventDefault();
        alert("Message Succesfully delivered!")
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_PUBLICK_KEY)
    }

    return (
        <>
            <Header />
            <div className="contacts-container">
                <h1 className="contacts-title">Got any questions or requests? <br /> CONTACT US!</h1>
                <div className="contacts-form-container">
                    <form onSubmit={sendEmail} className="form-style">
                        <input className="contact-inputs" type="text" id="name" name="name" placeholder="name" onChange={handleChangeNome} />
                        <input className="contact-inputs" type="text" id="surname" name="surname" placeholder="surname" onChange={handleChangeCognome} />
                        <input className="contact-inputs" type="email" id="email" name="email" placeholder="email" onChange={handleChangeMail} />
                        <textarea className="contact-inputs-msg" type="text" name="msg" id="msg" placeholder="your message" rows="8" onChange={handleChangeMess} />
                        <button type="submit" className="contact-button" disabled={!nome || !cognome || !mail || !mess} > Submit </button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contacts;