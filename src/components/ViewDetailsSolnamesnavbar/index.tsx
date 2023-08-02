import React from "react";

import { Img, Text } from "components";

type ViewDetailsSolnamesnavbarProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "username" | "poweredby" | "domains" | "resources" | "usertext"
> &
  Partial<{
    username: string;
    poweredby: string;
    domains: string;
    resources: string;
    usertext: string;
  }>;

const ViewDetailsSolnamesnavbar: React.FC<ViewDetailsSolnamesnavbarProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mb-1 w-full">
          <Img
            className="md:flex-1 h-[65px] sm:h-auto object-cover w-[7%] md:w-full"
            src="images/img_logo.png"
            alt="logo"
          />
          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[33px]">
            <Text
              className="text-white-A700 text-xl tracking-[-0.40px]"
              size="txtInterSemiBold20"
            >
              {props?.username}
            </Text>
            <Text
              className="mt-1 text-white-A700 text-xs tracking-[-0.24px]"
              size="txtInterSemiBold12"
            >
              {props?.poweredby}
            </Text>
          </div>
          <div className="flex flex-row gap-[50px] items-start justify-start md:ml-[0] ml-[676px] w-auto">
            <Text
              className="text-base text-center text-white-A700 w-auto"
              size="txtInterRegular16"
            >
              {props?.domains}
            </Text>
            <Text
              className="text-base text-center text-white-A700 w-auto"
              size="txtInterRegular16"
            >
              {props?.resources}
            </Text>
          </div>
          <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[62px] w-[17%] md:w-full">
            <div className="flex flex-col items-start justify-start sm:pr-5 pr-[25px] w-[225px]">
              <div className="border border-light_green-A700 border-solid flex flex-col items-center justify-start px-[18px] py-2.5 rounded-lg shadow-bs1 w-[225px]">
                <div className="flex flex-row gap-4 items-center justify-start w-auto">
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <Img
                      className="h-[31px] md:h-auto rounded-[50%] w-[31px]"
                      src="images/img_rectangle2057.png"
                      alt="rectangle2057"
                    />
                    <Text
                      className="text-base text-blue_gray-100 w-auto"
                      size="txtInterMedium16"
                    >
                      {props?.usertext}
                    </Text>
                  </div>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ViewDetailsSolnamesnavbar.defaultProps = {
  username: "SolNames",
  poweredby: "Powered by Bictory",
  domains: "Domains",
  resources: "Resources",
  usertext: "0G345Bv...8hU",
};

export default ViewDetailsSolnamesnavbar;
