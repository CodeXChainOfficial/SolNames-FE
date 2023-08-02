import React from "react";

import { Img, Text } from "components";

type ViewDetailsColumntrashTwoProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "pricetext" | "solcountertext" | "priceamounttext"
> &
  Partial<{
    pricetext: string;
    solcountertext: string;
    priceamounttext: string;
  }>;

const ViewDetailsColumntrashTwo: React.FC<ViewDetailsColumntrashTwoProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[145px] items-center justify-between w-auto">
          <div className="flex flex-col gap-2 items-start justify-start w-auto">
            <Text
              className="text-sm text-white-A700 w-auto"
              size="txtInterMedium14"
            >
              {props?.pricetext}
            </Text>
            <div className="flex flex-row gap-3.5 items-center justify-start w-auto">
              <Text
                className="text-white-A700 text-xl w-auto"
                size="txtInterSemiBold20"
              >
                {props?.solcountertext}
              </Text>
              <Text
                className="text-sm text-white-A700 w-auto"
                size="txtInterRegular14"
              >
                {props?.priceamounttext}
              </Text>
            </div>
          </div>
          <Img className="h-6 w-6" src="images/img_trash.svg" alt="trash_Two" />
        </div>
      </div>
    </>
  );
};

ViewDetailsColumntrashTwo.defaultProps = {
  pricetext: "Price",
  solcountertext: "25 SOL",
  priceamounttext: "$20",
};

export default ViewDetailsColumntrashTwo;
