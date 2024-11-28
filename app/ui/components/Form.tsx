"use client";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Form() {
  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    fetch("/api/sendMessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: form.name.valueOf,
        mail: form.mail.value,
        phone: form.phone.value,
        message: form.message.value,
      }),
    })
      .then(() => {
        console.log("mail envoyé");
        toast.success("Message envoyé !");
      })
      .catch((err) => console.log({ err }));
  };
  return (
    <article className="contactArticle">
      <h2>Contactez moi</h2>
      <div className="form_container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage(e);
          }}
        >
          <label htmlFor="name">Votre Nom*</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Nom et prénom"
            autoComplete="name"
          />
          <label htmlFor="mail">Adresse Email*</label>
          <input
            id="mail"
            type="mail"
            name="mail"
            placeholder="Adresse Email"
            autoComplete="email"
          />
          <label htmlFor="phone">Numéro de Téléphone*</label>
          <input
            id="phone"
            type="phone"
            name="phone"
            placeholder="Téléphone"
            autoComplete="tel"
          />
          <label htmlFor="message">Votre Message*</label>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
          ></textarea>
          <button className="mainButton">Envoyer un message</button>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            theme="light"
          />
        </form>
      </div>
    </article>
  );
}
