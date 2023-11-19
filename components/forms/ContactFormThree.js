import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import Alert from "./Alert";
import Input from "./Input";

const ContactFormThree = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n13x0xu",
        "template_du2yo7s",
        form.current,
        'Ugh5dOBr-C24shgfl'
      )
      .then(
        (result) => {
          console.log(result);

          setShowAlert(true);
          setIsMessageSent(true);

          setTimeout(() => {
            setShowAlert(false);
          }, 4000);
        },
        (error) => {
          console.log(error.text);

          setIsMessageSent(false);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <Input name="from_name" id="from_name" label="Nombre" isClear={isMessageSent} required />
      <Input name="email_id" label="Email" type="email"  id="email_id "isClear={isMessageSent} required />
      <Input name="phone" label="Teléfono" isClear={isMessageSent} required/>
      <Input
        name="message"
        id="message"
        label="Tu Mensaje"
        type="textarea"
        
        isClear={isMessageSent}
        required
      />
      <div className="form-group">
        <input type="submit" value="Enviar Mensaje" />
        <p className="form-messege"></p>
      </div>
      {showAlert && (
        <Alert
          message={
            isMessageSent
              ? "Tu mensaje fue enviado satisfactoriamente."
              : "Algo salio mal!"
          }
          type={isMessageSent ? "success" : "danger"}
        />
      )}
    </form>
  );
};

export default ContactFormThree;
