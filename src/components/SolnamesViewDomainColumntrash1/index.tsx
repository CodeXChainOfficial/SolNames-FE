import React from "react";

import { Img, Text } from "components";

type SolnamesViewDomainColumntrash1Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "price" | "solcounter" | "priceone" | "pricetwo"
> &
  Partial<{
    price: string;
    solcounter: string;
    priceone: string;
    pricetwo: string;
  }>;

const SolnamesViewDomainColumntrash1: React.FC<
  SolnamesViewDomainColumntrash1Props
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[145px] items-center justify-between w-auto">
          <div className="flex flex-col gap-2 items-start justify-start w-auto">
            <Text
              className="text-sm text-white-A700 w-auto"
              size="txtInterMedium14"
            >
              {props?.price}
            </Text>
            <div className="flex flex-row gap-3.5 items-center justify-start w-auto">
              <Text
                className="text-white-A700 text-xl w-auto"
                size="txtInterSemiBold20"
              >
                {props?.solcounter}
              </Text>
              <Text
                className="text-sm text-white-A700 w-auto"
                size="txtInterRegular14"
              >
                {props?.priceone}
              </Text>
            </div>
          </div>
          <Img className="h-6 w-6" src="images/img_trash.svg" alt="trash" />
        </div>
        <div className="flex flex-row gap-[145px] items-center justify-between w-auto">
          <div className="flex flex-col items-start justify-start w-auto">
            <Text
              className="text-sm text-white-A700 w-auto"
              size="txtInterMedium14"
            >
              {props?.pricetwo}
            </Text>
          </div>
          <Img
            className="h-[13px] w-6"
            src="images/img_trash.svg"
            alt="trash_One"
          />
        </div>
      </div>
    </>
  );
};

SolnamesViewDomainColumntrash1.defaultProps = {
  price: "Price",
  solcounter: "25 SOL",
  priceone: "$20",
  pricetwo: "Price",
};

export default SolnamesViewDomainColumntrash1;
