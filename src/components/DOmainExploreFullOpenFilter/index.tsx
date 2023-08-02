import React from "react";

import { Button, Img, List, Text } from "components";

type DOmainExploreFullOpenFilterProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "filtermenu"
  | "buynow"
  | "buynowOne"
  | "buynowTwo"
  | "length"
  | "digitcounter"
  | "digitcounter1"
  | "digitcounter2"
  | "digitcounter3"
  | "digitcounter4"
  | "digitcounter5"
  | "buynow1"
  | "pricesol"
  | "min"
  | "to"
  | "max"
  | "lengthOne"
  | "duration"
  | "duration1"
  | "duration2"
  | "duration3"
  | "buttonoutline"
> &
  Partial<{
    filtermenu: string;
    buynow: string;
    buynowOne: string;
    buynowTwo: string;
    length: string;
    digitcounter: string;
    digitcounter1: string;
    digitcounter2: string;
    digitcounter3: string;
    digitcounter4: string;
    digitcounter5: string;
    buynow1: string;
    pricesol: string;
    min: string;
    to: string;
    max: string;
    lengthOne: string;
    duration: string;
    duration1: string;
    duration2: string;
    duration3: string;
    buttonoutline: string;
  }>;

const DOmainExploreFullOpenFilter: React.FC<
  DOmainExploreFullOpenFilterProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 items-center justify-start w-[87%] md:w-full">
          <div className="flex flex-row gap-[21px] items-center justify-between w-[186px]">
            <div className="flex flex-row gap-2 items-center justify-start w-auto">
              <Img
                className="h-6 w-6"
                src="images/img_filter.svg"
                alt="filter"
              />
              <Text
                className="text-center text-lg text-white-A700 tracking-[-0.36px] w-auto"
                size="txtInterBold18"
              >
                {props?.filtermenu}
              </Text>
            </div>
            <Button className="bg-gray-900_06 flex h-7 items-center justify-center p-0.5 rounded-[5px] w-7">
              <Img
                className="h-6"
                src="images/img_arrowdown.svg"
                alt="arrowleft"
              />
            </Button>
          </div>
          <div className="flex flex-col gap-2 items-start justify-start w-auto">
            <div className="flex flex-row items-center justify-between w-[183px]">
              <Text
                className="text-center text-sm text-white-A700_cc tracking-[-0.28px] w-auto"
                size="txtInterRegular14WhiteA700cc"
              >
                {props?.duration3}
              </Text>
              <div className="border-2 border-solid border-white-A700 flex flex-col items-start justify-start p-1 rounded-[3px] w-5">
                <div className="bg-light_green-A700 h-3 w-3"></div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between w-[183px]">
              <Text
                className="text-center text-sm text-white-A700_cc tracking-[-0.28px] w-auto"
                size="txtInterRegular14WhiteA700cc"
              >
                {props?.duration3}
              </Text>
              <div className="border-2 border-solid border-white-A700 h-5 rounded-[3px] w-5"></div>
            </div>
            <div className="flex flex-row items-center justify-between w-[183px]">
              <Text
                className="text-center text-sm text-white-A700_cc tracking-[-0.28px] w-auto"
                size="txtInterRegular14WhiteA700cc"
              >
                {props?.duration3}
              </Text>
              <div className="border-2 border-solid border-white-A700 flex flex-col items-start justify-start p-1 rounded-[3px] w-5">
                <div className="bg-light_green-A700 h-3 w-3"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center justify-start w-auto">
            <div className="flex flex-row items-center justify-between w-[187px]">
              <div className="flex flex-row gap-2 items-center justify-start w-auto">
                <Img
                  className="h-6 w-6"
                  src="images/img_clock.svg"
                  alt="clock"
                />
                <Text
                  className="text-base text-white-A700 tracking-[-0.32px] w-auto"
                  size="txtInterBold16WhiteA700"
                >
                  {props?.lengthOne}
                </Text>
              </div>
              <Img
                className="h-6 w-6"
                src="images/img_arrowup.svg"
                alt="arrowup"
              />
            </div>
            <div className="flex flex-col items-start justify-start w-auto">
              <List
                className="flex flex-col gap-2 items-center w-full"
                orientation="vertical"
              >
                <div className="flex flex-row items-center justify-between w-[183px]">
                  <Text
                    className="text-center text-sm text-white-A700_cc tracking-[-0.28px] w-auto"
                    size="txtInterRegular14WhiteA700cc"
                  >
                    {props?.duration3}
                  </Text>
                  <div className="border-2 border-solid border-white-A700 flex flex-col items-start justify-start p-1 rounded-[3px] w-5">
                    <div className="bg-light_green-A700 h-3 w-3"></div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between w-[183px]">
                  <Text
                    className="text-center text-sm text-white-A700_cc tracking-[-0.28px] w-auto"
                    size="txtInterRegular14WhiteA700cc"
                  >
                    {props?.duration3}
                  </Text>
                  <div className="border-2 border-solid border-white-A700 flex flex-col items-start justify-start p-1 rounded-[3px] w-5">
                    <div className="bg-light_green-A700 h-3 w-3"></div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between w-[183px]">
                  <Text
                    className="text-center text-sm text-white-A700_cc tracking-[-0.28px] w-auto"
                    size="txtInterRegular14WhiteA700cc"
                  >
                    {props?.duration3}
                  </Text>
                  <div className="border-2 border-solid border-white-A700 h-5 rounded-[3px] w-5"></div>
                </div>
                <div className="flex flex-row items-center justify-between w-[183px]">
                  <Text
                    className="text-center text-sm text-white-A700_cc tracking-[-0.28px] w-auto"
                    size="txtInterRegular14WhiteA700cc"
                  >
                    {props?.duration3}
                  </Text>
                  <div className="border-2 border-solid border-white-A700 flex flex-col items-start justify-start p-1 rounded-[3px] w-5">
                    <div className="bg-light_green-A700 h-3 w-3"></div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between w-[183px]">
                  <Text
                    className="text-center text-sm text-white-A700_cc tracking-[-0.28px] w-auto"
                    size="txtInterRegular14WhiteA700cc"
                  >
                    {props?.duration3}
                  </Text>
                  <div className="border-2 border-solid border-white-A700 flex flex-col items-start justify-start p-1 rounded-[3px] w-5">
                    <div className="bg-light_green-A700 h-3 w-3"></div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between w-[183px]">
                  <Text
                    className="text-center text-sm text-white-A700_cc tracking-[-0.28px] w-auto"
                    size="txtInterRegular14WhiteA700cc"
                  >
                    {props?.duration3}
                  </Text>
                  <div className="border-2 border-solid border-white-A700 flex flex-col items-start justify-start p-1 rounded-[3px] w-5">
                    <div className="bg-light_green-A700 h-3 w-3"></div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between w-[183px]">
                  <Text
                    className="text-center text-sm text-white-A700_cc tracking-[-0.28px] w-auto"
                    size="txtInterRegular14WhiteA700cc"
                  >
                    {props?.duration3}
                  </Text>
                  <div className="border-2 border-solid border-white-A700 flex flex-col items-start justify-start p-1 rounded-[3px] w-5">
                    <div className="bg-light_green-A700 h-3 w-3"></div>
                  </div>
                </div>
              </List>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-start justify-start w-auto">
            <Text
              className="text-base text-center text-white-A700 tracking-[-0.32px] w-auto"
              size="txtInterBold16WhiteA700"
            >
              {props?.pricesol}
            </Text>
            <div className="flex flex-row gap-[5px] items-center justify-between w-[188px]">
              <Button className="bg-blue_gray-900 border border-solid border-white-A700_7f cursor-pointer font-roboto py-1.5 rounded-[10px] text-center text-sm text-white-A700_7f tracking-[-0.28px] w-[79px]">
                {props?.min}
              </Button>
              <Text
                className="text-center text-sm text-white-A700 tracking-[-0.28px] w-auto"
                size="txtInterRegular14"
              >
                {props?.to}
              </Text>
              <Button className="bg-blue_gray-900 border border-solid border-white-A700_7f cursor-pointer font-roboto py-1.5 rounded-[10px] text-center text-sm text-white-A700_7f tracking-[-0.28px] w-[79px]">
                {props?.max}
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center justify-start w-auto">
            <div className="flex flex-row items-center justify-between w-[187px]">
              <div className="flex flex-row gap-2 items-center justify-start w-auto">
                <Img
                  className="h-6 w-6"
                  src="images/img_clock.svg"
                  alt="clock"
                />
                <Text
                  className="text-base text-white-A700 tracking-[-0.32px] w-auto"
                  size="txtInterBold16WhiteA700"
                >
                  {props?.lengthOne}
                </Text>
              </div>
              <Img
                className="h-6 w-6"
                src="images/img_arrowup.svg"
                alt="arrowup_One"
              />
            </div>
            <div className="flex flex-col items-start justify-start w-auto">
              <List
                className="flex flex-col gap-2 items-center w-full"
                orientation="vertical"
              >
                <div className="flex flex-row items-center justify-between w-[183px]">
                  <Text
                    className="text-center text-sm text-white-A700_cc tracking-[-0.28px] w-auto"
                    size="txtInterRegular14WhiteA700cc"
                  >
                    {props?.duration3}
                  </Text>
                  <div className="border-2 border-solid border-white-A700 flex flex-col items-start justify-start p-1 rounded-[3px] w-5">
                    <div className="bg-light_green-A700 h-3 w-3"></div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between w-[183px]">
                  <Text
                    className="text-center text-sm text-white-A700_cc tracking-[-0.28px] w-auto"
                    size="txtInterRegular14WhiteA700cc"
                  >
                    {props?.duration3}
                  </Text>
                  <div className="border-2 border-solid border-white-A700 flex flex-col items-start justify-start p-1 rounded-[3px] w-5">
                    <div className="bg-light_green-A700 h-3 w-3"></div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between w-[183px]">
                  <Text
                    className="text-center text-sm text-white-A700_cc tracking-[-0.28px] w-auto"
                    size="txtInterRegular14WhiteA700cc"
                  >
                    {props?.duration3}
                  </Text>
                  <div className="border-2 border-solid border-white-A700 h-5 rounded-[3px] w-5"></div>
                </div>
                <div className="flex flex-row items-center justify-between w-[183px]">
                  <Text
                    className="text-center text-sm text-white-A700_cc tracking-[-0.28px] w-auto"
                    size="txtInterRegular14WhiteA700cc"
                  >
                    {props?.duration3}
                  </Text>
                  <div className="border-2 border-solid border-white-A700 h-5 rounded-[3px] w-5"></div>
                </div>
              </List>
            </div>
          </div>
        </div>
        <Text
          className="border border-light_green-A700 border-solid pt-3 sm:px-5 px-[35px] rounded-[16px] text-[16.08px] text-center text-light_green-A700 tracking-[-0.32px] w-[218px]"
          size="txtInterSemiBold1608"
        >
          {props?.buttonoutline}
        </Text>
      </div>
    </>
  );
};

DOmainExploreFullOpenFilter.defaultProps = {
  filtermenu: "Filter Menu",
  buynow: "3 Years",
  buynowOne: "3 Years",
  buynowTwo: "3 Years",
  length: "Expiration",
  digitcounter: "3 Years",
  digitcounter1: "3 Years",
  digitcounter2: "3 Years",
  digitcounter3: "3 Years",
  digitcounter4: "3 Years",
  digitcounter5: "3 Years",
  buynow1: "3 Years",
  pricesol: "Price (SOL)",
  min: "Min",
  to: "to",
  max: "Max",
  lengthOne: "Expiration",
  duration: "3 Years",
  duration1: "3 Years",
  duration2: "3 Years",
  duration3: "3 Years",
};

export default DOmainExploreFullOpenFilter;
