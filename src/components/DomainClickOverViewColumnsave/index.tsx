import React from "react";

import { Button, Img, Line, Text } from "components";

type DomainClickOverViewColumnsaveProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "userurl" | "useravailability" | "userprice" | "userlink" | "userbutton"
> &
  Partial<{
    userurl: string;
    useravailability: string;
    userprice: string;
    userlink: string;
    userbutton: string;
  }>;

const DomainClickOverViewColumnsave: React.FC<
  DomainClickOverViewColumnsaveProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-[97%] md:w-full">
          <Img
            className="h-4 md:mt-0 my-[15px] w-4"
            src="images/img_save.svg"
            alt="save"
          />
          <Img
            className="h-[42px] sm:h-auto mb-1 md:ml-[0] ml-[7px] object-cover w-[9%] md:w-full"
            src="images/img_image16.png"
            alt="imageSixteen"
          />
          <div className="flex flex-col items-center justify-start mb-2 md:mt-0 mt-[13px] w-auto">
            <Text
              className="text-white-A700 text-xl w-[159px]"
              size="txtRobotoSemiBold20"
            >
              {props?.userurl}
            </Text>
          </div>
          <Text
            className="md:ml-[0] ml-[71px] md:mt-0 my-2.5 text-white-A700 text-xl"
            size="txtRobotoSemiBold20"
          >
            {props?.useravailability}
          </Text>
          <Text
            className="mb-[7px] md:ml-[0] ml-[109px] md:mt-0 mt-3.5 text-white-A700 text-xl"
            size="txtRobotoSemiBold20"
          >
            {props?.userprice}
          </Text>
          <Text
            className="md:ml-[0] ml-[163px] md:mt-0 my-2.5 text-white-A700 text-xl"
            size="txtRobotoSemiBold20"
          >
            {props?.userlink}
          </Text>
          <Button className="bg-light_green-A700 cursor-pointer font-inter font-semibold min-w-[105px] md:ml-[0] ml-[134px] py-3 rounded-[23px] text-black-900_01 text-center text-lg tracking-[-0.36px]">
            {props?.userbutton}
          </Button>
        </div>
        <Line className="bg-gray-700_0a h-px w-full" />
      </div>
    </>
  );
};

DomainClickOverViewColumnsave.defaultProps = {
  userurl: "Jamalmus.solana",
  useravailability: "Available",
  userprice: "$241/yr",
  userlink: "-",
  userbutton: "Buy now",
};

export default DomainClickOverViewColumnsave;
