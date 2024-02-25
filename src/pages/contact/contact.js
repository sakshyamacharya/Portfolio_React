import React, { useState } from "react";
import skills from "../../images/Skills.png";
import Alert from "antd/es/alert";
// import "antd/es/alert/style/css"; // Import Ant Design Alert CSS

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showAlert, setShowAlert] = useState(false); // State to control visibility of alert

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setShowAlert(true); // Show the alert when form is submitted
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="w-full flex flex-col items-center">
      {showAlert && ( // Render the alert when showAlert is true
        <Alert
          message="Form Status"
          description="Your message has been received."
          type="success"
          showIcon
          // className="bg-[#080]"
          onClose={() => setShowAlert(false)} // Handle close event
          closable
        />
      )}
      <div className="text-center my-[30px]">
        <h1 className="text-[30px] m-1">Projects</h1>
        <hr className="w-20 font-bold h-[10] mx-auto border border-black" />
      </div>
        <div className="flex w-[75%] justify-center mbl:flex-col mbl:w-[90%] mbl:items-center mbl:gap-8">
        <div className=" w-[55%]  flex flex-col items-center  mbl:w-[100%]">
          <h1 className="text-[32px] font-bold text-left mb-4  mbl:mb-2 mbl:text-[18px]">
            Let's work together
          </h1>
          <p className="w-[70%] text-justify opacity-[80%]  mbl:w-[90%] ">
            Are you ready to bring your vision to life? Let's join forces and
            turn your ideas into reality! Whether you're looking to build a
            stunning website, craft compelling content, or develop a winning
            marketing strategy, I'm here to help. With a focus on collaboration,
            creativity, and results, together, we can achieve greatness. Let's
            connect and embark on this exciting journey together. Reach out
            today, and let's work together to make your dreams a reality!
          </p>
        </div>
        <div className="w-[45%]  mbl:w-[100%] ">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-5"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="p-2 rounded-[4px] w-[60%] bg-[#F3F3F3]  mbl:w-[72%] "
            />
            <input
              type="text"
              required
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="border p-2 rounded-[4px] w-[60%] bg-[#F3F3F3]  mbl:w-[72%]"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="border p-2 rounded-[4px] w-[60%] bg-[#F3F3F3]  mbl:w-[72%]"
              cols="10"
              rows="6"
              placeholder="Type your message here"
            ></textarea>
            <button
              type="submit"
              className="inline-block px-4 py-2 text-white bg-[#D2B687] rounded-lg shadow-md focus:ring-opacity-50 font-bold  mbl:w-[72%]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div>
        <h1 className="text-center mt-20 text-[32px] font-bold">
          Tools and Technologies
        </h1>
        <img src={skills} alt="" />
      </div>
    </div>
  );
}

export default Contact;
