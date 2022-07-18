import React from "react";
import facebook from "../icons/facebook-3 1.svg";
import instagram from "../icons/instagram-4 1.svg";
import phonecall from "../icons/phone-call-4 1.svg";
import email from "../icons/email-4 1.svg";

const Footer = () => {
  return (
    <section className="bg-[#F4F2F9]">
      <main>
        <div className="container px-[20px] xl:px-[0px] mx-auto">
          <div className="md:flex justify-between space-y-[20px] md:space-y-[0px] pt-[25px] xl:pt-[50px] pb-[20px] xl:pb-[40px] tracking-[0.1em]">
            <div className="md:flex md:space-x-[15px] xl:space-x-[30px] space-y-[20px] md:space-y-[0px]">
              <div>
                <img
                  className="inline-block mr-[5px]"
                  src={phonecall}
                  alt="phone call"
                />{" "}
                Call us: +84 908 02 02 58
              </div>
              <div>
                <img
                  className="inline-block mr-[5px]"
                  src={email}
                  alt="email"
                />
                Email: chucinog@gmail.com
              </div>
            </div>
            <div className="flex space-x-[5px] xl:space-x-[10px]">
              <div>Follow us</div>
              <div className="w-[40px] h-[1px] self-center bg-[#000]"></div>
              <div>
                <img src={facebook} alt="facebook icon" />
              </div>
              <div>
                <img src={instagram} alt="instagram icon" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Footer;
