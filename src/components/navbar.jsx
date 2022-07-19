import React from "react";
import unitedstates from "../icons/united-states 1.svg";
import vietnam from "../icons/vietnam 1.svg";
import baycungban from "../icons/Baycungban.svg";

const NavBar = ({
  language,
  setLanguage,
  listNavItems,
  selectedNavItem,
  setSelectedNavItem,
}) => {
  return (
    <section>
      <main>
        <div className="container px-[20px] xl:px-0 mx-auto ">
          <div className="sm:flex md:space-x-[74px] xl:space-x-[148px] space-y-[20px] sm:space-y-[0px] pt-[24px] lg:pt-[48px]">
            <div className="flex space-x-[10px] items-center">
              <div>
                <img src={baycungban} alt="bay cung ban"></img>
              </div>
              <div className="self-center">
                <img
                  className={
                    language === "vietnamese"
                      ? "border-[2px] border-[#4D46FA] rounded-[100px]"
                      : ""
                  }
                  src={vietnam}
                  alt="viet nam"
                  onClick={() => setLanguage("vietnamese")}
                />
              </div>
              <div className="self-center">
                <img
                  className={
                    language === "english"
                      ? "border-[2px] border-[#4D46FA] rounded-[100px]"
                      : ""
                  }
                  src={unitedstates}
                  alt="united states"
                  onClick={() => setLanguage("english")}
                ></img>
              </div>
            </div>

            <div className="sm:flex justify-between space-y-[20px] sm:space-y-[0px] flex-grow">
              <div className="sm:flex sm:space-x-[15px] xl:space-x-[30px] font-[400] text-[14px] leading-[21px] tracking-[0.05em]">
                {listNavItems.map((item) => (
                  <div
                    className={`px-[15px] py-[10px] ${
                      selectedNavItem === item
                        ? "bg-[rgba(255, 255, 255, 0.1)]"
                        : ""
                    }`}
                    onClick={() => setSelectedNavItem(item)}
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div>
                <div>
                  <div className="bg-[#4D46FA] hover:bg-[#130ea0] text-[#fff] font-[600] leading-[21px] max-w-[120px] py-[10px] px-[16px] rounded-[12px]">
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
