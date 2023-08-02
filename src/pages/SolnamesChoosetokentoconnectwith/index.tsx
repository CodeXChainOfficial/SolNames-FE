import React from "react";

import { Img, Line, List, Text } from "components";
import Header from "components/Header";
import SolnamesChooseTokenToConnectWithColumnordersummary from "components/SolnamesChooseTokenToConnectWithColumnordersummary";
import SolnamesChooseTokenToConnectWithListphantom from "components/SolnamesChooseTokenToConnectWithListphantom";
import SolnamesChooseTokenToConnectWithRow from "components/SolnamesChooseTokenToConnectWithRow";

const SolnamesChoosetokentoconnectwithPage: React.FC = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-inter gap-[13px] items-center justify-start mx-auto overflow-auto pb-[127px] w-full">
        <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs w-full" />
        <div className="flex flex-col items-start max-w-[1586px] mx-auto md:px-5 px-[170px] w-full">
          <div className="flex flex-row gap-4 items-center justify-center w-auto">
            <div className="bg-gray-900_02 flex flex-col items-center justify-center sm:px-5 px-[23px] py-1.5 rounded-[5px] w-[47px]">
              <Img
                className="h-6 w-6"
                src="images/img_directionright.svg"
                alt="directionright"
              />
            </div>
            <Text
              className="text-white-A700 text-xl w-auto"
              size="txtInterSemiBold20"
            >
              Return to cart
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-10 items-center justify-start max-w-[1586px] mx-auto md:px-5 w-full">
          <SolnamesChooseTokenToConnectWithRow className="flex md:flex-col flex-row gap-10 items-start justify-start p-2.5 w-auto md:w-full" />
          <div className="bg-gradient  border border-solid flex flex-col green_A400_51_lime_500_28_border9 h-[597px] md:h-auto items-center justify-start max-w-[1246px] px-10 sm:px-5 py-[41px] rounded-[32px] w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[146px] items-center justify-between w-auto">
              <div className="flex flex-col gap-10 items-start justify-start w-auto">
                <Text
                  className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl w-auto"
                  size="txtInterSemiBold24"
                >
                  Select a wallet on Solana
                </Text>
                <SolnamesChooseTokenToConnectWithListphantom className="flex flex-col gap-[34px] items-start w-auto" />
              </div>
              <div className="bg-gradient  flex flex-col items-center justify-center px-5 py-[38px] rounded-[16px] w-auto">
                <div className="flex flex-col gap-10 items-center justify-start w-auto">
                  <SolnamesChooseTokenToConnectWithColumnordersummary className="flex flex-col gap-10 items-start justify-start w-auto" />
                  <div className="bg-light_green-A700_4c flex flex-row gap-2.5 items-center justify-center sm:px-5 px-6 py-4 rounded-[13px] w-[270px]">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SolnamesChoosetokentoconnectwithPage;
