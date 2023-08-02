import React from "react";

import { Button, Img, Text } from "components";

type DomainClickOverViewRowsaveOneProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "userurl" | "duration" | "solcounter" | "link10kclub" | "buynow"
> &
  Partial<{
    userurl: string;
    duration: string;
    solcounter: string;
    link10kclub: string;
    buynow: string;
  }>;

const DomainClickOverViewRowsaveOne: React.FC<
  DomainClickOverViewRowsaveOneProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-4 md:mt-0 my-[15px] w-4"
          src="images/img_save.svg"
          alt="save_One"
        />
        <div className="flex flex-col items-center justify-start mb-1 md:ml-[0] ml-[7px] w-[9%] md:w-full">
          <Img
            className="h-[42px] md:h-auto object-cover w-full"
            src="images/img_image16.png"
            alt="imageSixteen"
          />
        </div>
        <div className="flex flex-col items-center justify-start mb-2 md:mt-0 mt-[13px] w-auto">
          <Text
            className="text-white-A700 text-xl w-[170px]"
            size="txtRobotoSemiBold20"
          >
            {props?.userurl}
          </Text>
        </div>
        <Text
          className="md:ml-[0] ml-[60px] md:mt-0 my-2.5 text-white-A700 text-xl"
          size="txtRobotoSemiBold20"
        >
          {props?.duration}
        </Text>
        <Text
          className="md:ml-[0] ml-[141px] md:mt-0 my-2.5 text-center text-white-A700 text-xl"
          size="txtRobotoSemiBold20"
        >
          {props?.solcounter}
        </Text>
        <Text
          className="ml-40 md:ml-[0] md:mt-0 my-2.5 text-white-A700 text-xl"
          size="txtRobotoSemiBold20"
        >
          {props?.link10kclub}
        </Text>
        <Button className="bg-light_green-A700 cursor-pointer font-inter font-semibold min-w-[105px] md:ml-[0] ml-[134px] py-3 rounded-[23px] text-black-900_01 text-center text-lg tracking-[-0.36px]">
          {props?.buynow}
        </Button>
      </div>
    </>
  );
};

DomainClickOverViewRowsaveOne.defaultProps = {
  userurl: "Jamalmusa.solana",
  duration: "1 Year",
  solcounter: "25 SOL",
  link10kclub: "-",
};

export default DomainClickOverViewRowsaveOne;
