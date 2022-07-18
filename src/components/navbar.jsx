import React from "react";
import unitedstates from "../icons/united-states 1.svg";
import vietnam from "../icons/vietnam 1.svg";
import baycungban from "../icons/Baycungban.svg";

const NavBar = () => {
  return (
    <section>
      <main>
        <div className="container px-[20px] xl:px-0 mx-auto ">
          <div className="sm:flex md:space-x-[74px] xl:space-x-[148px] space-y-[20px] sm:space-y-[0px] pt-[24px] lg:pt-[48px]">
            <div>
              <div className="flex space-x-[10px]">
                <div>
                  <img src={baycungban} alt="bay cung ban"></img>
                </div>
                <div className="self-center">
                  <img src={unitedstates} alt="united states"></img>
                </div>
                <div className="self-center">
                  <img src={vietnam} alt="viet nam" />
                </div>
              </div>
            </div>
            <div className="sm:flex justify-between space-y-[20px] sm:space-y-[0px] flex-grow">
              <div className="flex space-x-[30px] font-[400] text-[14px] leading-[21px] tracking-[0.05em]">
                <div>Promotion</div>
                <div>Flight Schedule</div>
                <div>About Us</div>
                <div>Payment Guide</div>
              </div>
              <div>
                <div>
                  <div className="bg-[#4D46FA] text-[#fff] font-[600] leading-[21px] max-w-[120px] py-[10px] px-[16px] rounded-[12px]">
                    Booking now
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default NavBar;
