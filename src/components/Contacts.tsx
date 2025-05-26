import React from "react";
import './styles/Contacts.css'

const Contacts: React.FC = () =>{
    return(
        <section className="Contacts" id="Contacts">
            <h1>
            ContactUS    
            </h1>
            <div className="mail-id">
                <p>E-mail us at</p>
                <p><strong>hacksphere2025@gmail.com</strong></p>
            </div>
            <div className="phone-no">
                <p>Connect to us via Phone/Whatsapp at</p>
                <p><strong>+91 1234567890</strong></p>
            </div>
        </section>

    );
};

export default Contacts;