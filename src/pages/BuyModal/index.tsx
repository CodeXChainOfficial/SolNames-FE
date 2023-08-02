import React from "react";
import { Text } from "components";
import BuyModalStack from "components/BuyModalStack";

const dropdownOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const BuyModalPage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-start mx-auto pb-2.5 w-full">
        <BuyModalStack
          className="sm:h-[1497px] h-[1569px] md:h-[3950px] pr-0.5 md:px-5 relative w-full"
          weburl={<Text className="text-white-A700 font-roboto text-left font-normal">Jamalmusa<span className="text-white-A700 font-roboto text-left">.solana</span></Text>}
          weburl1={<Text className="text-white-A700 font-roboto text-left font-normal">Jamalmusa<span className="text-white-A700 font-roboto text-left">.solana</span></Text>}
          weburl2={<Text className="text-white-A700 font-roboto text-left font-normal">Jamalmusa<span className="text-white-A700 font-roboto text-left">.solana</span></Text>}
          weburl3={<Text className="text-white-A700 font-roboto text-left font-normal">Jamalmusa<span className="text-white-A700 font-roboto text-left">.solana</span></Text>}
          weburl4={<Text className="text-white-A700 font-roboto text-left font-normal">Jamalmusa<span className="text-white-A700 font-roboto text-left">.solana</span></Text>}
          weburl5={<Text className="text-white-A700 font-roboto text-left font-normal">Jamalmusa<span className="text-white-A700 font-roboto text-left">.solana</span></Text>}
          weburl6={<Text className="text-white-A700 font-roboto text-left font-normal">Jamalmusa<span className="text-white-A700 font-roboto text-left">.solana</span></Text>}
          weburl7={<Text className="text-white-A700 font-roboto text-left font-normal">Jamalmusa<span className="text-white-A700 font-roboto text-left">.solana</span></Text>}
          priceOne={
            <Text className="text-white-A700 font-inter font-normal text-center">
              You are about to buy 25. worth of SOL for $20.00 a year.
            </Text>
          }
          p25sol={
            <Text className="text-white-A700 font-bold text-[32px] md:text-3xl">
              <span className="text-sm font-normal">25</span> Sol
            </Text>
          }
        />
      </div>
    </>
  );
};

export default BuyModalPage;
