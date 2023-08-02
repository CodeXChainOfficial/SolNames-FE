import React from "react";

import { Img, Text } from "components";

type DomainClickOverViewDivmy10Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "domainsOne" | "expiration" | "price" | "lastsale"
> &
  Partial<{
    domainsOne: string;
    expiration: string;
    price: string;
    lastsale: string;
  }>;

const DomainClickOverViewDivmy10: React.FC<DomainClickOverViewDivmy10Props> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-4 md:ml-[0] ml-[42px] w-4"
          src="images/img_save.svg"
          alt="save"
        />
        <Text
          className="ml-10 md:ml-[0] text-base text-center text-white-A700"
          size="txtInterMedium16WhiteA700"
        >
          {props?.domainsOne}
        </Text>
        <div className="flex flex-row gap-[137px] items-start justify-between md:ml-[0] ml-[223px] w-auto sm:w-full">
          <Text
            className="text-base text-center text-white-A700 w-auto"
            size="txtInterMedium16WhiteA700"
          >
            {props?.expiration}
          </Text>
          <Text
            className="text-base text-center text-white-A700 w-auto"
            size="txtInterMedium16WhiteA700"
          >
            {props?.price}
          </Text>
          <Text
            className="text-base text-center text-white-A700 w-auto"
            size="txtInterMedium16WhiteA700"
          >
            {props?.lastsale}
          </Text>
        </div>
      </div>
    </>
  );
};

DomainClickOverViewDivmy10.defaultProps = {
  domainsOne: "Domains",
  expiration: "Expiration",
  price: "Price",
  lastsale: "Last Sale",
};

export default DomainClickOverViewDivmy10;
