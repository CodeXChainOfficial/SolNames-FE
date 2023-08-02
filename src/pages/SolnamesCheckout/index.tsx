import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Header from "components/Header";
import SolnamesCheckOutRowsolcounter from "components/SolnamesCheckOutRowsolcounter";
import SolnamesChooseTokenToConnectWithColumnordersummary from "components/SolnamesChooseTokenToConnectWithColumnordersummary";

const SolnamesCheckoutPage: React.FC = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[85px] items-center justify-start mx-auto pb-16 w-full">
        <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs w-full" />
        <div className="flex flex-col items-center justify-start max-w-[1245px] mx-auto md:px-5 w-full">
          <div className="bg-gradient  border border-solid flex flex-col green_A400_51_lime_500_28_border10 items-end justify-end sm:pl-5 pl-[35px] pt-[35px] rounded-[32px] w-full">
            <div className="flex flex-col items-start justify-start w-[98%] md:w-full">
              <div className="bg-gray-900_01 flex sm:flex-col flex-row md:gap-10 gap-[769px] items-center justify-start ml-0.5 md:ml-[0] p-2 rounded-[37px] w-[95%] md:w-full">
                <Text
                  className="sm:ml-[0] ml-[59px] text-center text-white-A700 text-xl"
                  size="txtInterRegular20"
                >
                  Jamesyy
                </Text>
                <Button className="bg-light_green-A700 cursor-pointer font-bold py-5 rounded-[28px] text-center text-gray-900_02 text-sm w-[190px]">
                  Search domain
                </Button>
              </div>
              <div className="flex flex-row md:gap-10 items-center justify-between mt-8 w-[92%] md:w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
                  size="txtInterBold32WhiteA700"
                >
                  Your cart
                </Text>
                <Text className="text-gray-500 text-xl" size="txtInterMedium20">
                  Empty cart
                </Text>
              </div>
              <div className="h-[486px] sm:h-[655px] md:h-[955px] ml-0.5 md:ml-[0] mt-[54px] relative w-full">
                <div className="absolute bg-gradient  flex flex-col h-full inset-y-[0] items-center justify-center my-auto px-5 py-[38px] right-[5%] rounded-[16px] w-auto">
                  <div className="flex flex-col gap-10 items-center justify-start w-auto">
                    <SolnamesChooseTokenToConnectWithColumnordersummary className="flex flex-col gap-10 items-start justify-start w-auto" />
                    <div className="bg-light_green-A700_4c flex flex-row gap-2.5 items-center justify-center sm:px-5 px-6 py-4 w-[270px]">
                      <Text
                        className="text-base text-center text-gray-900_02 w-auto"
                        size="txtInterBold16"
                      >
                        Check Out
                      </Text>
                      <Text
                        className="text-base text-center text-gray-900_02 w-auto"
                        size="txtInterBold16"
                      >
                        Check Out
                      </Text>
                    </div>
                  </div>
                </div>
                <List
                  className="absolute flex flex-col gap-[33px] inset-x-[0] items-center mx-auto overflow-auto top-[0] w-auto"
                  orientation="vertical"
                >
                  <SolnamesCheckOutRowsolcounter className="flex md:flex-col flex-row md:gap-10 gap-[173px] items-center justify-between my-0 w-auto md:w-full" />
                  <Line className="self-center h-px bg-gray-900_08 w-[58%]" />
                  <SolnamesCheckOutRowsolcounter className="flex md:flex-col flex-row md:gap-10 gap-[173px] items-center justify-between my-0 w-auto md:w-full" />
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SolnamesCheckoutPage;
