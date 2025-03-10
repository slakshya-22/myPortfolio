import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const formRef = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r8v7d3q",
        "template_c0p0c46",
        formRef.current,
        "fvGDGRA53A12Osoj7"
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          Swal.fire({
            title: "Success!",
            text: "Message sent successfully",
            icon: "success",
            confirmButtonColor: "#4CAF50",
          });
          setIsSent(true);
          formRef.current.reset();
        },
        (error) => {
          console.error("Error:", error.text);
          Swal.fire({
            title: "Error!",
            text: error.text,
            icon: "error",
            confirmButtonColor: "#D32F2F",
          });
        }
      );
  };

  return (
    <div id="contact" className="flex flex-col items-center justify-center min-h-screen p-8 w-full">
      <h2 className="text-4xl font-semibold text-white mb-6">Contact Me</h2>
      <form ref={formRef} onSubmit={sendEmail} className="w-full max-w-2xl bg-gray-900 p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="text-white block mb-2">Your Name</label>
          <input type="text" name="user_name" required className="w-full p-3 rounded bg-gray-800 text-white outline-none" />
        </div>
        <div className="mb-4">
          <label className="text-white block mb-2">Your Email</label>
          <input type="email" name="user_email" required className="w-full p-3 rounded bg-gray-800 text-white outline-none" />
        </div>
        <div className="mb-4">
          <label className="text-white block mb-2">Your Message</label>
          <textarea name="message" rows="5" required className="w-full p-3 rounded bg-gray-800 text-white outline-none"></textarea>
        </div>
        <button type="submit" className="cursor-pointer w-full bg-gradient-to-r from-blue-500 to-pink-500 text-white p-3 rounded-md hover:opacity-90 transition-all duration-200">
          Send Message
        </button>
        {isSent && <p className="text-green-500 mt-4">Message sent successfully!</p>}
      </form>
    </div>
  );
};

export default Contact;
