import React from "react";
import form from "../images/form.png";
import { Facebook, Instagram, Whatsapp } from "iconsax-react"; 

function Footer() {
  const whatsappPhoneNumber = '9841154066';  // Replace with your WhatsApp phone number

  const whatsappLink = `https://wa.me/${whatsappPhoneNumber}`;
  return (
    <div className="w-full">
      <div className="flex justify-center flex-col items-center gap-4 mt-20">
        <div className="flex justify-center gap-6">
          <a href="https://www.instagram.com/sakshyam_9448/">
            <Instagram size={40} variant="Bulk" />
          </a>

          <a href="https://www.facebook.com/sakshyam.acharya.3">
            <Facebook size={40} variant="Bulk" />
          </a>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <Whatsapp size={40} variant="Bulk" />
      </a>
        </div>
        <p> Copyright © 2024 Sakshyam </p>
      </div>
      <img src={form} alt="" className="w-full" />
    </div>
  );
}

export default Footer;
