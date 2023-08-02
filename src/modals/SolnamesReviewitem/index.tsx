import React from "react";
import { default as ModalProvider } from "react-modal";

import { Img, Text } from "components";

const SolnamesReviewitemModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[41%]"
      overlayClassName="bg-black-900_33 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-gray-900_09 flex flex-col gap-12 h-[751px] md:h-auto items-center justify-start md:px-5 px-[31px] py-8 rounded-[24px] w-[616px] md:w-full">
          <div className="flex flex-row sm:gap-10 h-[73px] md:h-auto items-center justify-between w-[543px] sm:w-full">
            <div className="flex flex-col items-center justify-center w-[248px]">
              <Text
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                size="txtInterSemiBold24"
              >
                Purchase Successful
              </Text>
            </div>
            <div className="bg-gray-900_02 flex flex-col items-center justify-center sm:px-5 px-[23px] py-1.5 rounded-[5px] w-auto">
              <Img
                className="h-6 w-6"
                src="images/img_closeremove.svg"
                alt="closeremove"
              />
            </div>
          </div>
          <Img
            className="h-[252px] w-[336px]"
            src="images/img_undrawastronautre8c33.svg"
            alt="undrawastronaut"
          />
          <div className="flex flex-col md:gap-10 gap-[108px] items-center justify-start w-auto sm:w-full">
            <div className="h-12 relative w-[74%] sm:w-full">
              <Text
                className="leading-[24.00px] m-auto text-center text-gray-500_01 text-sm w-full"
                size="txtInterMedium14Gray50001"
              >
                <span className="text-gray-500_01 font-inter font-medium">
                  This transfer was successfully done purchased{" "}
                </span>
                <span className="text-light_green-A700 font-inter font-medium">
                  Jamesmusa.solana.{" "}
                </span>
                <span className="text-gray-500_01 font-inter font-medium">
                  Click to continue.
                </span>
              </Text>
              <Text
                className="absolute h-full inset-[0] justify-center leading-[24.00px] m-auto text-center text-gray-500_01 text-sm w-full"
                size="txtInterMedium14Gray50001"
              >
                <span className="text-gray-500_01 font-inter font-medium">
                  This transfer was successfully done purchased{" "}
                </span>
                <span className="text-light_green-A700 font-inter font-medium">
                  Jamesmusa.solana.{" "}
                </span>
                <span className="text-gray-500_01 font-inter font-medium">
                  Click to continue.
                </span>
              </Text>
            </div>
            <div className="border border-light_green-A700 border-solid flex flex-row gap-2.5 h-[74px] md:h-auto items-center justify-center px-10 sm:px-5 py-4 rounded-[32px] w-[554px] sm:w-full">
              <Text
                className="text-center text-light_green-A700 text-xl w-auto"
                size="txtInterBold20LightgreenA700"
              >
                Continue{" "}
              </Text>
              <Text
                className="text-center text-light_green-A700 text-xl w-auto"
                size="txtInterBold20LightgreenA700"
              >
                Continue{" "}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default SolnamesReviewitemModal;
