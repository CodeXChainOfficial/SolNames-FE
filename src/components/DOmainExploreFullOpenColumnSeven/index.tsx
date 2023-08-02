import React from "react";

import { Button, Img, Line, List, SelectBox, Text } from "components";

type DOmainExploreFullOpenColumnSevenProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "solnamessolana"
  | "bictoryisbuildiOne"
  | "link10kclub"
  | "totalvolume"
  | "link10kclub1"
  | "totalvolume1"
  | "link10kclub2"
  | "totalvolume2"
  | "link10kclub3"
  | "totalvolume3"
  | "link10kclub4"
  | "totalvolume4"
  | "link10kclubone"
  | "totalvolumeOne"
  | "topcollections"
  | "viewmore"
  | "clubcounter"
  | "volume"
  | "floor"
  | "weburlEight"
  | "weburlNine"
  | "weburlTen"
  | "weburlEleven"
  | "weburlTwelve"
  | "weburlThirteen"
  | "tradeOnBictoryIo"
> &
  Partial<{
    solnamessolana: string;
    bictoryisbuildiOne: string;
    link10kclub: string;
    totalvolume: string;
    link10kclub1: string;
    totalvolume1: string;
    link10kclub2: string;
    totalvolume2: string;
    link10kclub3: string;
    totalvolume3: string;
    link10kclub4: string;
    totalvolume4: string;
    link10kclubone: string;
    totalvolumeOne: string;
    topcollections: string;
    viewmore: string;
    clubcounter: string;
    volume: string;
    floor: string;
    weburlEight: JSX.Element | string;
    weburlNine: JSX.Element | string;
    weburlTen: JSX.Element | string;
    weburlEleven: JSX.Element | string;
    weburlTwelve: JSX.Element | string;
    weburlThirteen: JSX.Element | string;
    tradeOnBictoryIo: string;
  }>;

const dropdownOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const DOmainExploreFullOpenColumnSeven: React.FC<
  DOmainExploreFullOpenColumnSevenProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div
          className="bg-cover bg-no-repeat flex flex-col h-80 items-center justify-end p-[13px] rounded-[13px] w-full"
          style={{ backgroundImage: "url('images/img_frame163262_1.png')" }}
        >
          <div className="flex flex-col items-center justify-start mt-[11px] w-[90%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between w-full">
              <Img
                className="h-[158px] md:h-auto mb-[119px] md:mt-0 mt-1.5 object-cover w-[158px]"
                src="images/img_image137.png"
                alt="image137"
              />
              <div className="flex flex-col items-start justify-start mb-[123px] md:mt-0 mt-3.5">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                  size="txtInterBold36"
                >
                  {props?.solnamessolana}
                </Text>
                <div className="flex flex-col items-start justify-start mt-3 md:pr-10 sm:pr-5 pr-[98px] w-auto md:w-full">
                  <Text
                    className="text-base text-blue_gray-300 w-auto"
                    size="txtRobotoRegular16"
                  >
                    {props?.bictoryisbuildiOne}
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-5 items-center justify-start mt-6 w-auto sm:w-full">
                  <div className="flex flex-col items-center justify-start w-auto">
                    <Text
                      className="text-white-A700 text-xl w-auto"
                      size="txtRobotoSemiBold20"
                    >
                      {props?.link10kclubone}
                    </Text>
                    <Text
                      className="text-center text-sm text-white-A700 tracking-[-0.28px] w-auto"
                      size="txtInterRegular14"
                    >
                      {props?.totalvolumeOne}
                    </Text>
                  </div>
                  <List
                    className="sm:flex-col flex-row gap-5 grid grid-cols-4 w-[66%] sm:w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col items-center justify-start w-auto">
                      <Text
                        className="text-white-A700 text-xl w-auto"
                        size="txtRobotoSemiBold20"
                      >
                        {props?.link10kclubone}
                      </Text>
                      <Text
                        className="text-center text-sm text-white-A700 tracking-[-0.28px] w-auto"
                        size="txtInterRegular14"
                      >
                        {props?.totalvolumeOne}
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start w-auto">
                      <Text
                        className="text-white-A700 text-xl w-auto"
                        size="txtRobotoSemiBold20"
                      >
                        {props?.link10kclubone}
                      </Text>
                      <Text
                        className="text-center text-sm text-white-A700 tracking-[-0.28px] w-auto"
                        size="txtInterRegular14"
                      >
                        {props?.totalvolumeOne}
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start w-auto">
                      <Text
                        className="text-white-A700 text-xl w-auto"
                        size="txtRobotoSemiBold20"
                      >
                        {props?.link10kclubone}
                      </Text>
                      <Text
                        className="text-center text-sm text-white-A700 tracking-[-0.28px] w-auto"
                        size="txtInterRegular14"
                      >
                        {props?.totalvolumeOne}
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start w-auto">
                      <Text
                        className="text-white-A700 text-xl w-auto"
                        size="txtRobotoSemiBold20"
                      >
                        {props?.link10kclubone}
                      </Text>
                      <Text
                        className="text-center text-sm text-white-A700 tracking-[-0.28px] w-auto"
                        size="txtInterRegular14"
                      >
                        {props?.totalvolumeOne}
                      </Text>
                    </div>
                  </List>
                  <div className="flex flex-col items-center justify-start w-auto">
                    <Text
                      className="text-white-A700 text-xl w-auto"
                      size="txtRobotoSemiBold20"
                    >
                      {props?.link10kclubone}
                    </Text>
                    <Text
                      className="text-center text-sm text-white-A700 tracking-[-0.28px] w-auto"
                      size="txtInterRegular14"
                    >
                      {props?.totalvolumeOne}
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 justify-start">
                <div className="flex flex-row gap-2 items-center justify-start md:ml-[0] ml-[114px] w-auto">
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-base text-center text-light_green-A700"
                      size="txtInterBold16LightgreenA700"
                    >
                      {props?.topcollections}
                    </Text>
                  </div>
                  <SelectBox
                    className="bg-gray-700_33 border border-solid font-roboto leading-[normal] px-2 py-1 rounded-lg text-base text-left text-white-A700 w-[24%] sm:w-full white_A700_38_white_A700_00_border"
                    placeholderClassName="text-white-A700"
                    indicator={
                      <Img
                        className="h-6 w-6"
                        src="images/img_arrowup.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="dropdown"
                    options={dropdownOptionsList}
                    isSearchable={false}
                    placeholder="24h"
                  />
                  <div className="bg-gray-700_33 border border-solid flex flex-row items-start justify-center p-2 rounded-lg w-auto white_A700_38_white_A700_00_border2">
                    <Text
                      className="text-center text-light_green-A700 text-xs w-auto"
                      size="txtInterBold12"
                    >
                      {props?.viewmore}
                    </Text>
                    <Img
                      className="h-2 w-2"
                      src="images/img_upload.svg"
                      alt="upload"
                    />
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row gap-[21px] items-start justify-between w-full">
                  <div
                    className="bg-cover bg-no-repeat flex sm:flex-1 flex-col gap-2 h-[214px] items-start justify-center p-[3px] rounded-[20px] shadow-bs2 w-[30%] sm:w-full"
                    style={{
                      backgroundImage: "url('images/img_frame163262_1.png')",
                    }}
                  >
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[9px] mt-3.5">
                      <Text
                        className="text-white-A700 text-xl"
                        size="txtInterMedium20WhiteA700"
                      >
                        {props?.clubcounter}
                      </Text>
                      <Text
                        className="mt-[3px] text-center text-sm text-white-A700_cc"
                        size="txtInterRegular14WhiteA700cc"
                      >
                        {props?.volume}
                      </Text>
                      <Text
                        className="ml-0.5 md:ml-[0] text-center text-sm text-white-A700_cc"
                        size="txtInterRegular14WhiteA700cc"
                      >
                        {props?.floor}
                      </Text>
                    </div>
                    <Line className="bg-gray-50_7f h-px w-[96%]" />
                    <div className="flex flex-col items-start justify-start mb-2 md:ml-[0] ml-[11px]">
                      {props?.weburlEight}
                      {props?.weburlNine}
                      {props?.weburlTen}
                      {props?.weburlEleven}
                      {props?.weburlTwelve}
                      {props?.weburlThirteen}
                    </div>
                  </div>
                  <div className="sm:h-[219px] md:h-[227px] h-[231px] sm:mt-0 mt-2 relative w-[66%] sm:w-full">
                    <Img
                      className="absolute bottom-[0] h-[219px] left-[0] object-cover w-[82%]"
                      src="images/img_image140.png"
                      alt="image140"
                    />
                    <Button className="absolute bg-gray-700_33 border border-solid cursor-pointer font-bold font-inter min-w-[145px] py-[13px] right-[0] rounded-lg text-amber-600 text-center text-sm top-[0] white_A700_38_white_A700_00_border3">
                      {props?.tradeOnBictoryIo}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DOmainExploreFullOpenColumnSeven.defaultProps = {
  solnamessolana: "SolNames .solana Name Service",
  bictoryisbuildiOne:
    "BICTORY is building a global name service network that connects peopel...",
  link10kclub: "20,776",
  totalvolume: "Listed",
  link10kclub1: "20,776",
  totalvolume1: "Listed",
  link10kclub2: "20,776",
  totalvolume2: "Listed",
  link10kclub3: "20,776",
  totalvolume3: "Listed",
  link10kclub4: "20,776",
  totalvolume4: "Listed",
  link10kclubone: "20,776",
  totalvolumeOne: "Listed",
  topcollections: "Top Collections",
  viewmore: "View More",
  clubcounter: "999 Club",
  volume: "Volume",
  floor: "Floor",
  weburlEight: (
    <Text className="text-white-A700 text-xs" size="txtRobotoSemiBold12">
      <span className="text-white-A700 font-roboto text-left font-semibold">
        111.
      </span>
      <span className="text-deep_purple-400 font-roboto text-left font-semibold">
        NFT
      </span>
    </Text>
  ),
  weburlNine: (
    <Text
      className="mt-[3px] text-white-A700 text-xs"
      size="txtRobotoSemiBold12"
    >
      <span className="text-white-A700 font-roboto text-left font-semibold">
        777
      </span>
      <span className="text-white-A700 font-roboto text-left font-semibold">
        .
      </span>
      <span className="text-deep_purple-400 font-roboto text-left font-semibold">
        META
      </span>
    </Text>
  ),
  weburlTen: (
    <Text className="mt-0.5 text-white-A700 text-xs" size="txtRobotoSemiBold12">
      <span className="text-white-A700 font-roboto text-left font-semibold">
        1
      </span>
      <span className="text-white-A700 font-roboto text-left font-semibold">
        09
      </span>
      <span className="text-white-A700 font-roboto text-left font-semibold">
        .
      </span>
      <span className="text-deep_purple-400_01 font-roboto text-left font-semibold">
        SOLANA
      </span>
    </Text>
  ),
  weburlEleven: (
    <Text className="text-white-A700 text-xs" size="txtRobotoSemiBold12">
      <span className="text-white-A700 font-roboto text-left font-semibold">
        898
      </span>
      <span className="text-white-A700 font-roboto text-left font-semibold">
        .
      </span>
      <span className="text-deep_purple-400 font-roboto text-left font-semibold">
        FANTOM
      </span>
    </Text>
  ),
  weburlTwelve: (
    <Text
      className="mt-[3px] text-white-A700 text-xs"
      size="txtRobotoSemiBold12"
    >
      <span className="text-white-A700 font-roboto text-left font-semibold">
        367
      </span>
      <span className="text-white-A700 font-roboto text-left font-semibold">
        .
      </span>
      <span className="text-deep_purple-400 font-roboto text-left font-semibold">
        FTM
      </span>
    </Text>
  ),
  weburlThirteen: (
    <Text
      className="mt-[3px] text-white-A700 text-xs"
      size="txtRobotoSemiBold12"
    >
      <span className="text-white-A700 font-roboto text-left font-semibold">
        555
      </span>
      <span className="text-white-A700 font-roboto text-left font-semibold">
        .
      </span>
      <span className="text-deep_purple-400_01 font-roboto text-left font-semibold">
        MVX
      </span>
    </Text>
  ),
  tradeOnBictoryIo: "Trade on Bictory.io",
};

export default DOmainExploreFullOpenColumnSeven;
