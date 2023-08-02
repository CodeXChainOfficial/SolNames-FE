import React from "react";

import { Button, Img, Text } from "components";

type DomainClickOverViewColumnTwoProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "weburlOne" | "pricetext" | "solcountertext" | "pricetwotext"
> &
  Partial<{
    weburlOne: string;
    pricetext: string;
    solcountertext: string;
    pricetwotext: string;
  }>;

const DomainClickOverViewColumnTwo: React.FC<
  DomainClickOverViewColumnTwoProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div
          className="bg-cover bg-no-repeat flex flex-col md:gap-10 gap-[65px] h-[242px] items-center justify-start mt-[27px] p-[15px] rounded-[13px] w-[96%] md:w-full"
          style={{
            backgroundImage: "url('images/img_frame163262_242x315.png')",
          }}
        >
          <Button className="bg-gray-800_33 flex h-7 items-center justify-center p-1.5 rounded-[50%] w-7">
            <Img className="h-4" src="images/img_star.svg" alt="star" />
          </Button>
          <Text
            className="mb-[93px] text-white-A700 text-xl"
            size="txtInterBold20"
          >
            {props?.weburlOne}
          </Text>
        </div>
        <div className="flex flex-col items-center justify-start mb-0.5 w-auto">
          <div className="bg-gray-900_03 flex flex-col items-start justify-start sm:px-5 px-6 py-4 rounded-[16px] w-auto">
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
                    {props?.pricetwotext}
                  </Text>
                </div>
              </div>
              <Img className="h-6 w-6" src="images/img_trash.svg" alt="trash" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DomainClickOverViewColumnTwo.defaultProps = {
  weburlOne: "Jamalmusa.solana",
  pricetext: "Price",
  solcountertext: "25 SOL",
  pricetwotext: "$20",
};

export default DomainClickOverViewColumnTwo;
