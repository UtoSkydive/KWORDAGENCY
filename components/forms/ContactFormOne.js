import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import Alert from "./Alert";
import Input from "./Input";

const ContactFormOne = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "default_service",
        "template_lx68pja",
        form.current,
        'G68Oxc-dViNzPY_6F'
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
      <Input  name="from_name" id="from_name" label="Nombre" isClear={isMessageSent} />
      <Input  name="email_id" label="Email"  type="email" isClear={isMessageSent} />
      
      <Input name="phone" label="Teléfono" isClear={isMessageSent} />
      <div className="form-group">
        <button className="axil-button btn-large btn-transparent w-100">
          <span className="button-text">Obtén los precios ahora</span>
          <span className="button-icon" />
        </button>
      </div>
      {showAlert && (
        <Alert
          message={
            isMessageSent
              ? "Your message was sent successfully"
              : "Something went wrong"
          }
          type={isMessageSent ? "success" : "danger"}
        />
      )}
    </form>
  );
};

export default ContactFormOne;
