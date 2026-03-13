import React from "react";
import emailjs from "emailjs-com";
function Contact() {
  const sendEmail = () => {
    emailjs
      .send(
        "service_fa140mc", // <-- Replace with your actual Service ID
        "template_jcci7b5", // <-- Replace with your actual Template ID
        {
          to_name: "User",
          message: "Hello", // The message you want to send
          to_email: "manishasinghbca89@gmail.com", // Receiver's email
        },
        "your_public_key", // <-- Replace with your Public Key
      )
      .then(() => {
        alert("Email sent!");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <>
      <section className="contact" id="contact">
        <h2 className="section-title">Contact Me 💬</h2>
        <p className="contact-text">
          I’d love to hear from you! Whether you have a question, a project
          idea, or just want to say hello — feel free to reach out.
        </p>
        <div className="contact-info">
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:manishasinghbca89@gmail.com">
              manishasinghbca89@gmail.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+911234567890">+91 1234567890</a>
          </p>
          <p>
            <strong>Location:</strong> Gurugram, Haryana
          </p>
        </div>
        <a href="mailto:manishasinghbca89@gmail.com" className="contact-button">
          📧 Say Hello
        </a>
        <button onClick={sendEmail} className="contact-button">
          📩 Send Hello via EmailJS
        </button>
      </section>
      ;
    </>
  );
}
export default Contact;
