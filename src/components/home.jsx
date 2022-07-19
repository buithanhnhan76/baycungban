import React from "react";
import arrow from "../icons/arrow.svg";

const Home = () => {
  return (
    <section className="h-[803px] w-full relative">
      <main>
        <div className="container p-[20px] xl:p-[0px] mx-auto">
          <div className="text-[35px] xl:text-[72px] leading-[55px] xl:leading-[85px] pt-[10px] sm:pt-[155px]">
            <div>Hello !</div>
            <div className="max-w-[475px] xl:max-w-[400px]">
              Where are you <span className="text-[#4D46FA]">flying</span> to
              ...
            </div>
          </div>
          <div className="max-w-[1230px] w-full bg-[#fff] p-[15px] xl:p-[30px] pb-[25px] xl:pb-[50px] absolute bottom-0 left-[50%] translate-y-[15%] translate-x-[-50%] rounded-[30px]">
            <div className="relative">
              <div className="sm:flex sm:space-x-[50px] space-y-[20px] sm:space-y-[0px] mb-[20px]">
                <label className="block font-[600] leading-[21.22px]">
                  <input type="radio" name="type" value="oneway" />
                  {" Oneway / Round - trip "}
                </label>
                <label className="block font-[600] leading-[21.22px]">
                  <input type="radio" name="type" value="multycity" />
                  {" Multy-city "}
                </label>
                <select className="block font-[600] leading-[21.22px]">
                  <option>02 Adult, 01 Children</option>
                </select>
                <select className="block font-[600] leading-[21.22px]">
                  <option>Business class</option>
                </select>
              </div>
              <div className="md:flex space-y-[20px] md:space-y-[0px]">
                <div className="overflow-hidden">
                  <div className="py-[15px] px-[20px] xl:min-w-[300px] h-full border z-1 border-[#0000001a] rounded-[12px] relative left-frame ">
                    <div className="text-[12px] font-[600] leading-[18px]">
                      From
                    </div>
                    <div className="text-[24px] text-[#4D46FA] leading-[36px] font-[600]">
                      Da Nang
                    </div>
                    <div className="font-[600] leading-[21px]">
                      Quang Nam, Viet Nam
                    </div>
                  </div>
                </div>
                <div className="self-center">
                  <img src={arrow} alt="arrow" />
                </div>
                <div className="overflow-hidden">
                  <div className="pl-[20px] xl:pl-[40px] py-[15px] pr-[11px] xl:pr-[19px] xl:min-w-[300px] h-full relative border z-1 border-[#0000001a] rounded-[12px] right-frame ">
                    <div className="text-[12px] font-[600] leading-[18px]">
                      To
                    </div>
                    <div className="text-[24px] text-[#4D46FA] leading-[36px] font-[600]">
                      Ho Chi Minh
                    </div>
                    <div className="font-[600] leading-[21px]">Viet Nam</div>
                  </div>
                </div>
                <div className="flex space-x-[60px] xl:max-w-[530px] h-full border border-[#0000001a] rounded-[12px] py-[15px] px-[20px] md:ml-[20px]">
                  <div>
                    <div className="text-[12px] font-[600] leading-[18px]">
                      Departure
                    </div>
                    <div className="text-[24px] text-[#4D46FA] leading-[36px] font-[600]">
                      Fri,22 Mar, 2022
                    </div>
                    <div className="text-[12px] font-[600] leading-[18px]">
                      Pre Next
                    </div>
                  </div>
                  <div>
                    <div className="text-[12px] font-[600] leading-[18px]">
                      Return
                    </div>
                    <div className="text-[24px] text-[#4D46FA] leading-[36px] font-[600]">
                      Fri, 22 Mar, 2022
                    </div>
                    <div className="text-[12px] font-[600] leading-[18px]">
                      Prev Next
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute right-0 bottom-0 translate-y-[95%] rounded-[12px] text-white py-[15px] px-[20px] bg-[#4D46FA]">
                {"Search Flight >"}
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Home;
