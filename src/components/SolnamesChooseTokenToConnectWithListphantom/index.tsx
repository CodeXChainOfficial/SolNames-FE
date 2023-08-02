import React from "react";

import { Img, List, Text } from "components";

type SolnamesChooseTokenToConnectWithListphantomProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "phantom" | "phantom1"
> &
  Partial<{ phantom: string; phantom1: string }>;

const SolnamesChooseTokenToConnectWithListphantom: React.FC<
  SolnamesChooseTokenToConnectWithListphantomProps
> = (props) => {
  return (
    <>
      <List className={props.className} orientation="vertical">
        <div className="flex flex-col items-center justify-start w-auto md:w-full">
          <div className="bg-gray-900_19 border border-gray-800 border-solid flex flex-col h-[58px] md:h-auto items-center justify-start sm:pl-5 pl-6 py-4 rounded-[29px] w-[201px] md:w-full">
            <div className="flex flex-row gap-4 items-center justify-start w-auto">
              <Img
                className="h-6 md:h-auto object-cover w-6"
                src="images/img_image96.png"
                alt="imageNinetySix"
              />
              <Text
                className="text-lg text-white-A700 w-auto"
                size="txtInterRegular18"
              >
                {props?.phantom}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-auto md:w-full">
          <div className="bg-gray-900_19 border border-gray-800 border-solid flex flex-col h-[58px] md:h-auto items-center justify-start sm:pl-5 pl-6 py-4 rounded-[29px] w-[201px] md:w-full">
            <div className="flex flex-row gap-4 items-center justify-start w-auto">
              <Img
                className="h-6 md:h-auto object-cover w-6"
                src="images/img_image96.png"
                alt="imageNinetySix"
              />
              <Text
                className="text-lg text-white-A700 w-auto"
                size="txtInterRegular18"
              >
                {props?.phantom1}
              </Text>
            </div>
          </div>
        </div>
      </List>
    </>
  );
};

SolnamesChooseTokenToConnectWithListphantom.defaultProps = {
  phantom: "Phantom",
  phantom1: "Phantom",
};

export default SolnamesChooseTokenToConnectWithListphantom;
