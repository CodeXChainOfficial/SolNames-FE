import React from "react";

import { Button, Img, Text } from "components";

type DomainClickOverViewColumnbuyNowOneProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "domainavailable" | "weburl" | "description" | "solcounter" | "buynow"
> &
  Partial<{
    domainavailable: string;
    weburl: string;
    description: JSX.Element | string;
    solcounter: string;
    buynow: string;
  }>;

const DomainClickOverViewColumnbuyNowOne: React.FC<
  DomainClickOverViewColumnbuyNowOneProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
          <div className="flex flex-row gap-2.5 items-end justify-start w-auto">
            <Img
              className="h-6 w-6"
              src="images/img_trash.svg"
              alt="trash_One"
            />
            <Text
              className="text-center text-light_green-A700 text-sm w-auto"
              size="txtInterBold14"
            >
              {props?.domainavailable}
            </Text>
          </div>
          <div className="flex flex-col gap-2 items-start justify-start w-auto md:w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 w-auto"
              size="txtInterMedium32"
            >
              {props?.weburl}
            </Text>
            <Text
              className="leading-[140.00%] max-w-[599px] md:max-w-full text-gray-500 text-xl"
              size="txtInterMedium20"
            >
              {props?.description}
            </Text>
          </div>
          <Text
            className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
            size="txtInterSemiBold24"
          >
            {props?.solcounter}
          </Text>
        </div>
        <Button className="bg-light_green-A700 cursor-pointer font-bold font-inter py-[18px] rounded-[28px] text-base text-center text-gray-900_02 w-[270px]">
          {props?.buynow}
        </Button>
      </div>
    </>
  );
};

DomainClickOverViewColumnbuyNowOne.defaultProps = {
  domainavailable: "Domain Available",
  weburl: "Jamalmusa.solana",
  description: (
    <>
      Whether you&#39;re an individual, a business, or a creator,
      Jamalmusa.solana empowers you to shape your online identity and engage
      with the global web3 community. Establish
    </>
  ),
  solcounter: "25 SOL",
};

export default DomainClickOverViewColumnbuyNowOne;
