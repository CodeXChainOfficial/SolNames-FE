import React from "react";

import { Img, Text } from "components";

type SolnamesViewDomainColumntrashTwoProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "domaintext"
  | "domaintext1"
  | "weburltext"
  | "descriptiontext"
  | "weburltexttwo"
  | "descriptiontexttwo"
  | "solcounterone"
  | "solcountertwo"
> &
  Partial<{
    domaintext: string;
    domaintext1: string;
    weburltext: string;
    descriptiontext: JSX.Element | string;
    weburltexttwo: string;
    descriptiontexttwo: JSX.Element | string;
    solcounterone: string;
    solcountertwo: string;
  }>;

const SolnamesViewDomainColumntrashTwo: React.FC<
  SolnamesViewDomainColumntrashTwoProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
          <Img
            className="h-6 w-6"
            src="images/img_trash.svg"
            alt="trash_Three"
          />
          <Text
            className="text-center text-light_green-A700 text-sm w-auto"
            size="txtInterBold14"
          >
            {props?.domaintext1}
          </Text>
        </div>
        <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
          <Img
            className="h-6 w-6"
            src="images/img_trash.svg"
            alt="trash_Three"
          />
          <Text
            className="text-center text-light_green-A700 text-sm w-auto"
            size="txtInterBold14"
          >
            {props?.domaintext1}
          </Text>
        </div>
        <div className="flex flex-col gap-2 items-start justify-start w-auto md:w-full">
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 w-auto"
            size="txtInterMedium32"
          >
            {props?.weburltext}
          </Text>
          <Text
            className="leading-[140.00%] max-w-[599px] md:max-w-full text-gray-500 text-xl"
            size="txtInterMedium20"
          >
            {props?.descriptiontext}
          </Text>
        </div>
        <div className="flex flex-col gap-2 items-start justify-start w-auto md:w-full">
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 w-auto"
            size="txtInterMedium32"
          >
            {props?.weburltexttwo}
          </Text>
          <Text
            className="leading-[140.00%] max-w-[599px] md:max-w-full text-gray-500 text-xl"
            size="txtInterMedium20"
          >
            {props?.descriptiontexttwo}
          </Text>
        </div>
        <Text
          className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
          size="txtInterSemiBold24"
        >
          {props?.solcounterone}
        </Text>
        <Text
          className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
          size="txtInterSemiBold24"
        >
          {props?.solcountertwo}
        </Text>
      </div>
    </>
  );
};

SolnamesViewDomainColumntrashTwo.defaultProps = {
  domaintext: "Domain Available",
  domaintext1: "Domain Available",
  weburltext: "Jamalmusa.solana",
  descriptiontext: (
    <>
      Whether you&#39;re an individual, a business, or a creator,
      Jamalmusa.solana empowers you to shape your online identity and engage
      with the global web3 community. Establish
    </>
  ),
  weburltexttwo: "Jamalmusa.solana",
  descriptiontexttwo: (
    <>
      Whether you&#39;re an individual, a business, or a creator,
      Jamalmusa.solana empowers you to shape your online identity and engage
      with the global web3 community. Establish
    </>
  ),
  solcounterone: "25 SOL",
  solcountertwo: "25 SOL",
};

export default SolnamesViewDomainColumntrashTwo;
