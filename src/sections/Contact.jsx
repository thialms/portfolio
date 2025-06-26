import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";

const Contact = ({ theme }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("Form submitted:", formData);
      await emailjs.send(
        "service_p14zl0c",
        "template_3ei3ztg",
        {
          from_name: formData.name,
          to_name: "Thiago Almeida",
          from_email: formData.email,
          to_email: "alms.thiago@gmail.com",
          message: formData.message,
        },
        "SNAkPH-qXC3FyOUVj"
      );
      setIsLoading(false);
      showAlertMessage(
        "success",
        "Mensagem enviada com sucesso! Em breve entrarei em contato."
      );
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setIsLoading(false);
      console.log("Error sending email:", error);
      showAlertMessage(
        "danger",
        "Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde."
      );
    }

    //service_p14zl0c
    //template_3ei3ztg
  };
  return (
    <section
      id="contact"
      className="relative flex items-center c-space section-spacing"
    >
      <Particles
        className="absolute inset-0 10"
        quantity={100}
        ease={80}
        color={theme === "light" ? "#000000" : "#ffffff"}
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 bg-black/10 rounded-2xl">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Vamos Conversar</h2>
          <p className="font-normal">
            Seja para construir um novo site, aprimorar sua plataforma atual ou
            dar vida a um projeto inovador, estou aqui para ajudar.
          </p>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="field-label">
              Nome
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder="Sarah Louise"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="name" className="field-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus"
              placeholder="SarahLouise@gmail.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="name" className="field-label">
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              type="text"
              rows="4"
              className="field-input field-input-focus"
              placeholder="Compartilhe suas ideias, dúvidas ou solicitações..."
              autoComplete="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
          >
            {!isLoading ? "Enviar" : "Enviando..."}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
