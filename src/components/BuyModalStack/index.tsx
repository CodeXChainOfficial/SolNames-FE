import React from "react";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";

type BuyModalStackProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "buynow"
  | "registred"
  | "unregistred"
  | "length"
  | "digitcounter"
  | "digitcounterOne"
  | "digitcounterTwo"
  | "digitcounterThree"
  | "digitcounterFour"
  | "digitcounterFive"
  | "digitcounterSix"
  | "p7digit"
  | "price"
  | "expiration"
  | "duration"
  | "durationOne"
  | "durationTwo"
  | "durationThree"
  | "resetFilter"
  | "domains"
  | "expiration1"
  | "price1"
  | "date"
  | "weburl"
  | "duration1"
  | "solcounter"
  | "buynow1"
  | "weburl1"
  | "duration2"
  | "solcounter1"
  | "buynow2"
  | "weburl2"
  | "duration3"
  | "solcounter2"
  | "buynow3"
  | "weburl3"
  | "duration4"
  | "solcounter3"
  | "buyNow"
  | "weburl4"
  | "duration5"
  | "solcounter4"
  | "buynow1"
  | "weburl5"
  | "duration6"
  | "solcounter5"
  | "buynow2"
  | "weburl6"
  | "duration7"
  | "solcounter6"
  | "buynow3"
  | "weburl7"
  | "duration8"
  | "solcounter7"
  | "buynow4"
  | "activity"
  | "tabsales"
  | "taboffers"
  | "tablistings"
  | "tabtransfers"
  | "tabsalesOne"
  | "taboffersOne"
  | "tablistingsOne"
  | "tabtransfersOne"
  | "tabsales1"
  | "weburl8"
  | "price2"
  | "tabtransfers1"
  | "tabsales2"
  | "weburl9"
  | "price3"
  | "tabtransfers2"
  | "tabsales3"
  | "weburl10"
  | "price4"
  | "tabtransfers3"
  | "tabsales4"
  | "weburl11"
  | "price5"
  | "tabtransfers4"
  | "tabsales5"
  | "weburl12"
  | "price6"
  | "tabtransfers5"
  | "tabsales6"
  | "weburl13"
  | "price7"
  | "tabtransfers6"
  | "tabsales7"
  | "weburl14"
  | "price8"
  | "tabtransfers7"
  | "tabsales8"
  | "weburl15"
  | "price9"
  | "tabtransfers8"
  | "tabsales9"
  | "weburl16"
  | "price10"
  | "tabtransfers9"
  | "tabsales10"
  | "weburl17"
  | "price11"
  | "tabtransfers10"
  | "tabsales11"
  | "weburl18"
  | "price12"
  | "tabtransfers11"
  | "tabsales12"
  | "weburl19"
  | "price13"
  | "tabtransfers12"
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
  | "weburl20"
  | "weburlOne"
  | "weburlTwo"
  | "weburlThree"
  | "weburlFour"
  | "weburlFive"
  | "tradingOnBictoryIo"
  | "buynowOne"
  | "priceOne"
  | "total"
  | "p25sol"
  | "youllbeasked"
  | "connectWallet"
  | "nameproject"
  | "poweredbybictorOne"
  | "text"
> &
  Partial<{
    buynow: string;
    registred: string;
    unregistred: string;
    length: string;
    digitcounter: string;
    digitcounterOne: string;
    digitcounterTwo: string;
    digitcounterThree: string;
    digitcounterFour: string;
    digitcounterFive: string;
    digitcounterSix: string;
    p7digit: string;
    price: string;
    expiration: string;
    duration: JSX.Element | string;
    durationOne: string;
    durationTwo: string;
    durationThree: string;
    resetFilter: string;
    domains: string;
    expiration1: string;
    price1: string;
    date: string;
    weburl: JSX.Element | string;
    duration1: string;
    solcounter: string;
    buynow1: string;
    weburl1: JSX.Element | string;
    duration2: string;
    solcounter1: string;
    weburl2: JSX.Element | string;
    duration3: string;
    solcounter2: string;
    weburl3: JSX.Element | string;
    duration4: string;
    solcounter3: string;
    buyNow: string;
    weburl4: JSX.Element | string;
    duration5: string;
    solcounter4: string;
    weburl5: JSX.Element | string;
    duration6: string;
    solcounter5: string;
    weburl6: JSX.Element | string;
    duration7: string;
    solcounter6: string;
    weburl7: JSX.Element | string;
    duration8: string;
    solcounter7: string;
    buynow4: string;
    activity: string;
    tabsales: string;
    taboffers: string;
    tablistings: string;
    tabtransfers: string;
    tabsalesOne: string;
    taboffersOne: string;
    tablistingsOne: string;
    tabtransfersOne: string;
    tabsales1: string;
    weburl8: string;
    price2: string;
    tabtransfers1: string;
    tabsales2: string;
    weburl9: string;
    price3: string;
    tabtransfers2: string;
    tabsales3: string;
    weburl10: string;
    price4: string;
    tabtransfers3: string;
    tabsales4: string;
    weburl11: string;
    price5: string;
    tabtransfers4: string;
    tabsales5: string;
    weburl12: string;
    price6: string;
    tabtransfers5: string;
    tabsales6: string;
    weburl13: string;
    price7: string;
    tabtransfers6: string;
    tabsales7: string;
    weburl14: string;
    price8: string;
    tabtransfers7: string;
    tabsales8: string;
    weburl15: string;
    price9: string;
    tabtransfers8: string;
    tabsales9: string;
    weburl16: string;
    price10: string;
    tabtransfers9: string;
    tabsales10: string;
    weburl17: string;
    price11: string;
    tabtransfers10: string;
    tabsales11: string;
    weburl18: string;
    price12: string;
    tabtransfers11: string;
    tabsales12: string;
    weburl19: string;
    price13: string;
    tabtransfers12: string;
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
    weburl20: JSX.Element | string;
    weburlOne: JSX.Element | string;
    weburlTwo: JSX.Element | string;
    weburlThree: JSX.Element | string;
    weburlFour: JSX.Element | string;
    weburlFive: JSX.Element | string;
    tradingOnBictoryIo: string;
    buynowOne: string;
    priceOne: JSX.Element | string;
    total: string;
    p25sol: JSX.Element | string;
    youllbeasked: string;
    connectWallet: string;
    nameproject: string;
    poweredbybictorOne: string;
    text: string;
  }>;

const dropdownOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const BuyModalStack: React.FC<BuyModalStackProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="sm:h-[1497px] h-[1569px] md:h-[3950px] m-auto w-full">
          <div className="absolute bg-black-900_01 sm:h-[1123px] h-[1529px] md:h-[3950px] inset-[0] justify-center m-auto pt-[132px] w-full">
            <Img
              className="absolute bottom-[11%] h-[1123px] object-cover right-[0] rotate-[27deg] w-[63%]"
              src="images/img_ellipse165_1123x950.png"
              alt="ellipse165"
            />
            <div className="absolute backdrop-opacity-[0.5] bg-gradient1  blur-[484.00px] bottom-[0] h-[619px] inset-x-[0] mx-auto rounded-[673px] w-[90%]"></div>
            <div className="absolute bg-black-900_7f bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto pr-[17px] py-[17px] shadow-bs3 w-full">
              <div className="flex flex-col items-center justify-start mb-[149px] w-[95%] md:w-full">
                <div className="flex flex-col gap-3.5 justify-start w-full">
                  <div className="flex md:flex-col flex-row gap-[22px] items-center justify-end md:ml-[0] ml-[277px] w-[77%] md:w-full">
                    <Input
                      name="divmyTen"
                      placeholder="Search domain name"
                      className="font-roboto leading-[normal] p-0 placeholder:text-blue_gray-300 sm:pr-5 text-base text-blue_gray-300 text-left w-full"
                      wrapClassName="bg-gray-900_04 flex pb-3.5 pl-5 pr-[30px] pt-[18px] rounded-[16px] w-[76%] md:w-full"
                      suffix={
                        <Img
                          className="h-6 ml-[35px] my-auto"
                          src="images/img_search_blue_gray_300.svg"
                          alt="search"
                        />
                      }
                    ></Input>
                    <Input
                      name="divmyTen_One"
                      placeholder="Price"
                      className="font-roboto leading-[normal] p-0 placeholder:text-blue_gray-300 sm:pr-5 text-base text-blue_gray-300 text-left w-full"
                      wrapClassName="bg-gray-900_04 flex pb-4 pl-5 pr-[26px] pt-5 rounded-[16px] w-[23%] md:w-full"
                      suffix={
                        <div className="mt-[3px] mb-1.5 ml-[35px] sm:w-full sm:mx-0 w-[2%] bg-blue_gray-300">
                          <Img
                            className="my-auto"
                            src="images/img_checkmark.svg"
                            alt="checkmark"
                          />
                        </div>
                      }
                    ></Input>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                    <div className="bg-black-900_7f_01 flex md:flex-1 flex-col items-center justify-end p-[31px] sm:px-5 rounded-[25px] w-1/5 md:w-full">
                      <div className="flex flex-col gap-[25px] items-center justify-start mb-2 mt-[43px] w-full">
                        <div className="flex flex-col items-center justify-start w-[89%] md:w-full">
                          <div className="flex flex-row items-start justify-between w-[96%] md:w-full">
                            <Text
                              className="mt-0.5 text-center text-sm text-white-A700 tracking-[-0.28px]"
                              size="txtInterRegular14"
                            >
                              {props?.buynow}
                            </Text>
                            <div className="border-2 border-solid border-white-A700 flex flex-col h-5 items-center justify-start p-1 rounded-[3px] w-5">
                              <div className="bg-light_green-A700 h-3 w-3"></div>
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-between mt-4 w-[96%] md:w-full">
                            <Text
                              className="mt-0.5 text-sm text-white-A700 tracking-[-0.28px]"
                              size="txtInterRegular14"
                            >
                              {props?.registred}
                            </Text>
                            <div className="border-2 border-solid border-white-A700 h-5 rounded-[3px] w-5"></div>
                          </div>
                          <div className="flex flex-row items-start justify-between mt-[15px] w-[96%] md:w-full">
                            <Text
                              className="mt-[3px] text-sm text-white-A700 tracking-[-0.28px]"
                              size="txtInterRegular14"
                            >
                              {props?.unregistred}
                            </Text>
                            <div className="h-5 relative w-5">
                              <div className="absolute bg-light_green-A700 h-3 inset-[0] justify-center m-auto w-3"></div>
                              <div className="absolute border-2 border-solid border-white-A700 h-5 inset-[0] justify-center m-auto rounded-[3px] w-5"></div>
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-start mt-[22px] w-[93%] md:w-full">
                            <div className="bg-blue_gray-100_02 h-[19px] mb-0.5 w-[13%]"></div>
                            <Text
                              className="ml-[9px] text-base text-white-A700 tracking-[-0.32px]"
                              size="txtInterBold16WhiteA700"
                            >
                              {props?.length}
                            </Text>
                            <Img
                              className="h-px ml-[90px] mt-[13px] w-0.5"
                              src="images/img_arrow7.svg"
                              alt="arrowSeven"
                            />
                          </div>
                          <div className="flex flex-row items-end justify-between mt-2.5 w-[97%] md:w-full">
                            <Text
                              className="mt-1.5 text-center text-sm text-white-A700_cc tracking-[-0.28px]"
                              size="txtInterRegular14WhiteA700cc"
                            >
                              {props?.digitcounter}
                            </Text>
                            <div className="h-5 md:h-[23px] mb-[3px] relative w-5">
                              <div className="absolute bg-light_green-A700 h-3 inset-[0] justify-center m-auto w-3"></div>
                              <div className="absolute border-2 border-solid border-white-A700 h-5 inset-[0] justify-center m-auto rounded-[3px] w-5"></div>
                            </div>
                          </div>
                          <div className="flex flex-row items-end justify-between w-[98%] md:w-full">
                            <Text
                              className="mt-1.5 text-sm text-white-A700_cc tracking-[-0.28px]"
                              size="txtInterRegular14WhiteA700cc"
                            >
                              {props?.digitcounterOne}
                            </Text>
                            <div className="h-5 md:h-[23px] mb-[3px] relative w-5">
                              <div className="absolute bg-light_green-A700 h-3 inset-[0] justify-center m-auto w-3"></div>
                              <div className="absolute border-2 border-solid border-white-A700 h-5 inset-[0] justify-center m-auto rounded-[3px] w-5"></div>
                            </div>
                          </div>
                          <div className="flex flex-row items-end justify-between w-[98%] md:w-full">
                            <Text
                              className="mt-[5px] text-center text-sm text-white-A700_cc tracking-[-0.28px]"
                              size="txtInterRegular14WhiteA700cc"
                            >
                              {props?.digitcounterTwo}
                            </Text>
                            <div className="border-2 border-solid border-white-A700 h-5 mb-0.5 rounded-[3px] w-5"></div>
                          </div>
                          <div className="flex flex-row items-end justify-between w-[98%] md:w-full">
                            <Text
                              className="mt-[5px] text-center text-sm text-white-A700_cc tracking-[-0.28px]"
                              size="txtInterRegular14WhiteA700cc"
                            >
                              {props?.digitcounterThree}
                            </Text>
                            <div className="h-5 md:h-[22px] mb-0.5 relative w-5">
                              <div className="absolute bg-light_green-A700 h-3 inset-[0] justify-center m-auto w-3"></div>
                              <div className="absolute border-2 border-solid border-white-A700 h-5 inset-[0] justify-center m-auto rounded-[3px] w-5"></div>
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-between w-[98%] md:w-full">
                            <Text
                              className="mt-1 text-center text-sm text-white-A700_cc tracking-[-0.28px]"
                              size="txtInterRegular14WhiteA700cc"
                            >
                              {props?.digitcounterFour}
                            </Text>
                            <div className="border-2 border-solid border-white-A700 h-5 rounded-[3px] w-5"></div>
                          </div>
                          <div className="flex flex-row items-start justify-between mt-0.5 w-[98%] md:w-full">
                            <Text
                              className="mt-1 text-center text-sm text-white-A700_cc tracking-[-0.28px]"
                              size="txtInterRegular14WhiteA700cc"
                            >
                              {props?.digitcounterFive}
                            </Text>
                            <div className="border-2 border-solid border-white-A700 h-5 rounded-[3px] w-5"></div>
                          </div>
                          <div className="flex flex-row items-start justify-between mt-0.5 w-[98%] md:w-full">
                            <Text
                              className="mt-[3px] text-center text-sm text-white-A700_cc tracking-[-0.28px]"
                              size="txtInterRegular14WhiteA700cc"
                            >
                              {props?.digitcounterSix}
                            </Text>
                            <div className="h-5 relative w-5">
                              <div className="absolute bg-light_green-A700 h-3 inset-[0] justify-center m-auto w-3"></div>
                              <div className="absolute border-2 border-solid border-white-A700 h-5 inset-[0] justify-center m-auto rounded-[3px] w-5"></div>
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-between mt-[3px] w-[98%] md:w-full">
                            <Text
                              className="mt-[3px] text-sm text-white-A700_cc tracking-[-0.28px]"
                              size="txtInterRegular14WhiteA700cc"
                            >
                              {props?.p7digit}
                            </Text>
                            <div className="border-2 border-solid border-white-A700 h-5 rounded-[3px] w-5"></div>
                          </div>
                          <div className="flex flex-row gap-[18px] items-center justify-between mt-[11px] w-full">
                            <Text
                              className="text-base text-center text-white-A700 tracking-[-0.32px]"
                              size="txtInterBold16WhiteA700"
                            >
                              {props?.price}
                            </Text>
                            <div className="bg-blue_gray-900_66 h-[29px] rounded-[10px] w-[71%]"></div>
                          </div>
                          <div className="flex flex-row items-start justify-start mt-[13px] w-[94%] md:w-full">
                            <Input
                              name="rectangle2296"
                              placeholder=""
                              className="p-0 w-full"
                              wrapClassName="bg-blue_gray-100_02 flex h-[19px] mb-0.5 w-[13%]"
                            ></Input>
                            <Text
                              className="ml-[9px] text-base text-white-A700 tracking-[-0.32px]"
                              size="txtInterBold16WhiteA700"
                            >
                              {props?.expiration}
                            </Text>
                            <Img
                              className="h-px ml-[68px] mt-[13px] w-0.5"
                              src="images/img_arrow7.svg"
                              alt="arrowEight"
                            />
                          </div>
                          <div className="flex flex-row items-end justify-between mt-3.5 w-[98%] md:w-full">
                            <Text
                              className="mt-[5px] text-sm text-white-A700_cc tracking-[-0.28px]"
                              size="txtInterRegular14WhiteA700cc"
                            >
                              {props?.duration}
                            </Text>
                            <div className="h-5 md:h-[22px] mb-0.5 relative w-5">
                              <div className="absolute bg-light_green-A700 h-3 inset-[0] justify-center m-auto w-3"></div>
                              <div className="absolute border-2 border-solid border-white-A700 h-5 inset-[0] justify-center m-auto rounded-[3px] w-5"></div>
                            </div>
                          </div>
                          <div className="flex flex-row items-end justify-between w-[98%] md:w-full">
                            <Text
                              className="mt-[5px] text-sm text-white-A700_cc tracking-[-0.28px]"
                              size="txtInterRegular14WhiteA700cc"
                            >
                              {props?.durationOne}
                            </Text>
                            <div className="h-5 md:h-[22px] mb-0.5 relative w-5">
                              <div className="absolute bg-light_green-A700 h-3 inset-[0] justify-center m-auto w-3"></div>
                              <div className="absolute border-2 border-solid border-white-A700 h-5 inset-[0] justify-center m-auto rounded-[3px] w-5"></div>
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-between w-[98%] md:w-full">
                            <Text
                              className="mt-1 text-sm text-white-A700_cc tracking-[-0.28px]"
                              size="txtInterRegular14WhiteA700cc"
                            >
                              {props?.durationTwo}
                            </Text>
                            <div className="border-2 border-solid border-white-A700 h-5 rounded-[3px] w-5"></div>
                          </div>
                          <div className="flex flex-row items-start justify-between w-[98%] md:w-full">
                            <Text
                              className="mt-1 text-sm text-white-A700_cc tracking-[-0.28px]"
                              size="txtInterRegular14WhiteA700cc"
                            >
                              {props?.durationThree}
                            </Text>
                            <div className="border-2 border-solid border-white-A700 h-5 rounded-[3px] w-5"></div>
                          </div>
                        </div>
                        <Button className="border border-light_green-A700 border-solid cursor-pointer font-inter font-semibold py-3 rounded-[23px] text-center text-lg text-light_green-A700 tracking-[-0.36px] w-[218px]">
                          {props?.resetFilter}
                        </Button>
                      </div>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[30px] items-start justify-start ml-2 md:ml-[0] w-auto md:w-full">
                      <List
                        className="border-b border-gray-900_07 border-solid sm:flex-col flex-row sm:gap-5 grid sm:grid-cols-1 grid-cols-4 justify-start w-auto md:w-full"
                        orientation="horizontal"
                      >
                        <div className="flex flex-col items-start justify-start sm:ml-[0] p-[9px] w-full">
                          <Text
                            className="my-1.5 text-base text-blue_gray-200"
                            size="txtPlusJakartaSansSemiBold16Bluegray200"
                          >
                            {props?.domains}
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-end sm:ml-[0] p-3 w-full">
                          <Text
                            className="mt-[5px] text-base text-blue_gray-200"
                            size="txtPlusJakartaSansSemiBold16Bluegray200"
                          >
                            {props?.expiration1}
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-end sm:ml-[0] p-3.5 w-full">
                          <Text
                            className="mt-0.5 text-base text-blue_gray-200"
                            size="txtPlusJakartaSansSemiBold16Bluegray200"
                          >
                            {props?.price1}
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-end sm:ml-[0] p-3.5 w-full">
                          <Text
                            className="mt-0.5 text-base text-blue_gray-200"
                            size="txtPlusJakartaSansSemiBold16Bluegray200"
                          >
                            {props?.date}
                          </Text>
                        </div>
                      </List>
                      <List
                        className="flex flex-col gap-6 items-start w-auto"
                        orientation="vertical"
                      >
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start my-0 w-auto md:w-full">
                          <div className="flex flex-col items-center justify-start p-[3px] w-1/4 md:w-full">
                            <div className="h-7 md:h-[33px] my-2 relative w-[146px]">
                              <Img
                                className="absolute h-4 inset-y-[0] left-[0] my-auto object-cover w-[34px]"
                                src="images/img_image16.png"
                                alt="imageSixteen"
                              />
                              <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-auto">
                                {props?.weburl}
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-end p-4">
                            <Text
                              className="text-sm text-white-A700"
                              size="txtPlusJakartaSansSemiBold14"
                            >
                              {props?.duration1}
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-end p-4">
                            <Text
                              className="text-sm text-white-A700"
                              size="txtPlusJakartaSansSemiBold14"
                            >
                              {props?.solcounter}
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start p-[3px] w-1/4 md:w-full">
                            <div className="bg-light_green-A700 flex flex-col items-center justify-center px-4 py-2 rounded-[23px] w-auto">
                              <Text
                                className="text-black-900_01 text-center text-lg tracking-[-0.36px] w-auto"
                                size="txtInterSemiBold18Black90001"
                              >
                                {props?.buynow1}
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start my-0 w-auto md:w-full">
                          <div className="flex flex-col items-center justify-start p-[3px] w-1/4 md:w-full">
                            <div className="h-7 md:h-[33px] my-2 relative w-[146px]">
                              <Img
                                className="absolute h-4 inset-y-[0] left-[0] my-auto object-cover w-[34px]"
                                src="images/img_image16.png"
                                alt="imageSixteen"
                              />
                              <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-auto">
                                {props?.weburl1}
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-end p-4">
                            <Text
                              className="text-sm text-white-A700"
                              size="txtPlusJakartaSansSemiBold14"
                            >
                              {props?.duration2}
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-end p-4">
                            <Text
                              className="text-sm text-white-A700"
                              size="txtPlusJakartaSansSemiBold14"
                            >
                              {props?.solcounter1}
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start p-[3px] w-1/4 md:w-full">
                            <div className="bg-light_green-A700 flex flex-col items-center justify-center px-4 py-2 rounded-[23px] w-auto">
                              <Text
                                className="text-black-900_01 text-center text-lg tracking-[-0.36px] w-auto"
                                size="txtInterSemiBold18Black90001"
                              >
                                {props?.buynow1}
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start my-0 w-auto md:w-full">
                          <div className="flex flex-col items-center justify-start p-[3px] w-1/4 md:w-full">
                            <div className="h-7 md:h-[33px] my-2 relative w-[146px]">
                              <Img
                                className="absolute h-4 inset-y-[0] left-[0] my-auto object-cover w-[34px]"
                                src="images/img_image16.png"
                                alt="imageSixteen"
                              />
                              <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-auto">
                                {props?.weburl2}
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-end p-4">
                            <Text
                              className="text-sm text-white-A700"
                              size="txtPlusJakartaSansSemiBold14"
                            >
                              {props?.duration3}
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-end p-4">
                            <Text
                              className="text-sm text-white-A700"
                              size="txtPlusJakartaSansSemiBold14"
                            >
                              {props?.solcounter2}
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start p-[3px] w-1/4 md:w-full">
                            <div className="bg-light_green-A700 flex flex-col items-center justify-center px-4 py-2 rounded-[23px] w-auto">
                              <Text
                                className="text-black-900_01 text-center text-lg tracking-[-0.36px] w-auto"
                                size="txtInterSemiBold18Black90001"
                              >
                                {props?.buynow1}
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start my-0 w-auto md:w-full">
                          <div className="flex flex-col items-center justify-start p-[3px] w-1/4 md:w-full">
                            <div className="h-7 md:h-[33px] my-2 relative w-[146px]">
                              <Img
                                className="absolute h-4 inset-y-[0] left-[0] my-auto object-cover w-[34px]"
                                src="images/img_image16.png"
                                alt="imageSixteen"
                              />
                              <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-auto">
                                {props?.weburl3}
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-end p-4">
                            <Text
                              className="text-sm text-white-A700"
                              size="txtPlusJakartaSansSemiBold14"
                            >
                              {props?.duration4}
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-end p-4">
                            <Text
                              className="text-sm text-white-A700"
                              size="txtPlusJakartaSansSemiBold14"
                            >
                              {props?.solcounter3}
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start p-[3px] w-1/4 md:w-full">
                            <Button className="bg-light_green-A700 cursor-pointer font-inter font-semibold min-w-[105px] py-3 rounded-[23px] text-black-900_01 text-center text-lg tracking-[-0.36px]">
                              {props?.buyNow}
                            </Button>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start my-0 w-auto md:w-full">
                          <div className="flex flex-col items-center justify-start p-[3px] w-1/4 md:w-full">
                            <div className="h-7 md:h-[33px] my-2 relative w-[146px]">
                              <Img
                                className="absolute h-4 inset-y-[0] left-[0] my-auto object-cover w-[34px]"
                                src="images/img_image16.png"
                                alt="imageSixteen"
                              />
                              <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-auto">
                                {props?.weburl4}
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-end p-4">
                            <Text
                              className="text-sm text-white-A700"
                              size="txtPlusJakartaSansSemiBold14"
                            >
                              {props?.duration5}
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-end p-4">
                            <Text
                              className="text-sm text-white-A700"
                              size="txtPlusJakartaSansSemiBold14"
                            >
                              {props?.solcounter4}
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start p-[3px] w-1/4 md:w-full">
                            <Button className="bg-light_green-A700 cursor-pointer font-inter font-semibold min-w-[105px] py-3 rounded-[23px] text-black-900_01 text-center text-lg tracking-[-0.36px]">
                              {props?.buynow1}
                            </Button>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start my-0 w-auto md:w-full">
                          <div className="flex flex-col items-center justify-start p-[3px] w-1/4 md:w-full">
                            <div className="h-7 md:h-[33px] my-2 relative w-[146px]">
                              <Img
                                className="absolute h-4 inset-y-[0] left-[0] my-auto object-cover w-[34px]"
                                src="images/img_image16.png"
                                alt="imageSixteen"
                              />
                              <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-auto">
                                {props?.weburl5}
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-end p-4">
                            <Text
                              className="text-sm text-white-A700"
                              size="txtPlusJakartaSansSemiBold14"
                            >
                              {props?.duration6}
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-end p-4">
                            <Text
                              className="text-sm text-white-A700"
                              size="txtPlusJakartaSansSemiBold14"
                            >
                              {props?.solcounter5}
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start p-[3px] w-1/4 md:w-full">
                            <Button className="bg-light_green-A700 cursor-pointer font-inter font-semibold min-w-[105px] py-3 rounded-[23px] text-black-900_01 text-center text-lg tracking-[-0.36px]">
                              {props?.buynow1}
                            </Button>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start my-0 w-auto md:w-full">
                          <div className="flex flex-col items-center justify-start p-[3px] w-1/4 md:w-full">
                            <div className="h-7 md:h-[33px] my-2 relative w-[146px]">
                              <Img
                                className="absolute h-4 inset-y-[0] left-[0] my-auto object-cover w-[34px]"
                                src="images/img_image16.png"
                                alt="imageSixteen"
                              />
                              <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-auto">
                                {props?.weburl6}
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-end p-4">
                            <Text
                              className="text-sm text-white-A700"
                              size="txtPlusJakartaSansSemiBold14"
                            >
                              {props?.duration7}
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-end p-4">
                            <Text
                              className="text-sm text-white-A700"
                              size="txtPlusJakartaSansSemiBold14"
                            >
                              {props?.solcounter6}
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start p-[3px] w-1/4 md:w-full">
                            <Button className="bg-light_green-A700 cursor-pointer font-inter font-semibold min-w-[105px] py-3 rounded-[23px] text-black-900_01 text-center text-lg tracking-[-0.36px]">
                              {props?.buynow1}
                            </Button>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start my-0 w-auto md:w-full">
                          <div className="flex flex-col items-center justify-start p-[3px] w-1/4 md:w-full">
                            <div className="h-7 md:h-[33px] my-2 relative w-[146px]">
                              <Img
                                className="absolute h-4 inset-y-[0] left-[0] my-auto object-cover w-[34px]"
                                src="images/img_image16.png"
                                alt="imageSixteen"
                              />
                              <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-auto">
                                {props?.weburl7}
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-end p-4">
                            <Text
                              className="text-sm text-white-A700"
                              size="txtPlusJakartaSansSemiBold14"
                            >
                              {props?.duration8}
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-end p-4">
                            <Text
                              className="text-sm text-white-A700"
                              size="txtPlusJakartaSansSemiBold14"
                            >
                              {props?.solcounter7}
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start p-[3px] w-1/4 md:w-full">
                            <Button className="bg-light_green-A700 cursor-pointer font-inter font-semibold min-w-[105px] py-3 rounded-[23px] text-black-900_01 text-center text-lg tracking-[-0.36px]">
                              {props?.buynow4}
                            </Button>
                          </div>
                        </div>
                      </List>
                    </div>
                    <div className="h-[665px] sm:h-[905px] ml-10 md:ml-[0] relative w-[33%] md:w-full">
                      <div className="absolute backdrop-opacity-[0.5] bg-gradient2  blur-[118.00px] bottom-[11%] h-[450px] inset-x-[0] mx-auto rotate-[-180deg] rounded-[50%] w-[450px]"></div>
                      <div className="absolute bg-black-900_7f_01 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[21px] sm:px-5 w-full">
                        <div className="flex flex-col gap-[19px] items-start justify-start mb-4 w-auto sm:w-full">
                          <div className="flex flex-row gap-2 items-center justify-start w-auto">
                            <Img
                              className="h-9 w-6"
                              src="images/img_minimize.svg"
                              alt="minimize"
                            />
                            <Text
                              className="text-white-A700 text-xl w-auto"
                              size="txtInterSemiBold20"
                            >
                              {props?.activity}
                            </Text>
                          </div>
                          <div className="border-b border-blue_gray-800_72 border-solid flex sm:flex-col flex-row gap-[58px] items-start justify-start pb-5 md:pr-10 sm:pr-5 pr-[487.39px] pt-[3px] w-[397px] sm:w-full">
                            <Text
                              className="text-lg text-light_green-A700"
                              size="txtPlusJakartaSansSemiBold18LightgreenA700"
                            >
                              {props?.tabsales}
                            </Text>
                            <Text
                              className="text-blue_gray-400 text-center text-lg w-auto"
                              size="txtPlusJakartaSansSemiBold18Bluegray400"
                            >
                              {props?.taboffers}
                            </Text>
                            <Text
                              className="text-blue_gray-400 text-center text-lg w-auto"
                              size="txtPlusJakartaSansSemiBold18Bluegray400"
                            >
                              {props?.tablistings}
                            </Text>
                            <Text
                              className="text-blue_gray-400 text-center text-lg w-auto"
                              size="txtPlusJakartaSansSemiBold18Bluegray400"
                            >
                              {props?.tabtransfers}
                            </Text>
                          </div>
                          <div className="flex flex-col gap-[19px] items-start justify-start w-auto sm:w-full">
                            <div className="flex flex-row gap-[81px] h-[29px] md:h-auto items-start justify-start pb-5 md:pr-10 sm:pr-5 pr-[487.39px] pt-[3px] w-[397px] sm:w-full">
                              <Text
                                className="text-light_green-A700 text-xs w-auto"
                                size="txtPlusJakartaSansSemiBold12"
                              >
                                {props?.tabsalesOne}
                              </Text>
                              <Text
                                className="text-blue_gray-400 text-center text-xs w-auto"
                                size="txtPlusJakartaSansSemiBold12Bluegray400"
                              >
                                {props?.taboffersOne}
                              </Text>
                              <Text
                                className="text-blue_gray-400 text-center text-xs w-auto"
                                size="txtPlusJakartaSansSemiBold12Bluegray400"
                              >
                                {props?.tablistingsOne}
                              </Text>
                              <Text
                                className="text-blue_gray-400 text-center text-xs w-auto"
                                size="txtPlusJakartaSansSemiBold12Bluegray400"
                              >
                                {props?.tabtransfersOne}
                              </Text>
                            </div>
                            <List
                              className="flex flex-col gap-2 items-start w-auto"
                              orientation="vertical"
                            >
                              <div className="flex flex-row gap-20 h-[29px] md:h-auto items-start justify-start my-0 pb-5 md:pr-10 sm:pr-5 pr-[487.39px] pt-[3px] w-[398px] sm:w-full">
                                <Text
                                  className="text-blue_gray-400 text-center text-xs w-auto"
                                  size="txtPlusJakartaSansSemiBold12Bluegray400"
                                >
                                  {props?.tabsales1}
                                </Text>
                                <Text
                                  className="text-blue_gray-400 text-center text-xs w-auto"
                                  size="txtPlusJakartaSansSemiBold12Bluegray400"
                                >
                                  {props?.weburl8}
                                </Text>
                                <Text
                                  className="text-blue_gray-400 text-center text-xs w-auto"
                                  size="txtPlusJakartaSansSemiBold12Bluegray400"
                                >
                                  {props?.price2}
                                </Text>
                                <Text
                                  className="text-blue_gray-400 text-center text-xs w-auto"
                                  size="txtPlusJakartaSansSemiBold12Bluegray400"
                                >
                                  {props?.tabtransfers1}
                                </Text>
                              </div>
                              <div className="flex flex-row gap-20 h-[29px] md:h-auto items-start justify-start my-0 pb-5 md:pr-10 sm:pr-5 pr-[487.39px] pt-[3px] w-[398px] sm:w-full">
                                <Text
                                  className="text-blue_gray-400 text-center text-xs w-auto"
                                  size="txtPlusJakartaSansSemiBold12Bluegray400"
                                >
                                  {props?.tabsales2}
                                </Text>
                                <Text
                                  className="text-blue_gray-400 text-center text-xs w-auto"
                                  size="txtPlusJakartaSansSemiBold12Bluegray400"
                                >
                                  {props?.weburl9}
                                </Text>
                                <Text
                                  className="text-blue_gray-400 text-center text-xs w-auto"
                                  size="txtPlusJakartaSansSemiBold12Bluegray400"
                                >
                                  {props?.price3}
                                </Text>
                                <Text
                                  className="text-blue_gray-400 text-center text-xs w-auto"
                                  size="txtPlusJakartaSansSemiBold12Bluegray400"
                                >
                                  {props?.tabtransfers2}
                                </Text>
                              </div>
                              <div className="flex flex-row gap-20 h-[29px] md:h-auto items-start justify-start my-0 pb-5 md:pr-10 sm:pr-5 pr-[487.39px] pt-[3px] w-[398px] sm:w-full">
                                <Text
                                  className="text-blue_gray-400 text-center text-xs w-auto"
                                  size="txtPlusJakartaSansSemiBold12Bluegray400"
                                >
                                  {props?.tabsales3}
                                </Text>
                                <Text
                                  className="text-blue_gray-400 text-center text-xs w-auto"
                                  size="txtPlusJakartaSansSemiBold12Bluegray400"
                                >
                                  {props?.weburl10}
                                </Text>
                                <Text
                                  className="text-blue_gray-400 text-center text-xs w-auto"
                                  size="txtPlusJakartaSansSemiBold12Bluegray400"
                                >
                                  {props?.price4}
                                </Text>
                                <Text
                                  className="text-blue_gray-400 text-center text-xs w-auto"
                                  size="txtPlusJakartaSansSemiBold12Bluegray400"
                                >
                                  {props?.tabtransfers3}
                                </Text>
                              </div>
                              <div className="flex flex-row gap-20 h-[29px] md:h-auto items-start justify-start my-0 pb-5 md:pr-10 sm:pr-5 pr-[487.39px] pt-[3px] w-[398px] sm:w-full">
                                <Text
                                  className="text-blue_gray-400 text-center text-xs w-auto"
                                  size="txtPlusJakartaSansSemiBold12Bluegray400"
                                >
                                  {props?.tabsales4}
                                </Text>
                                <Text
                                  className="text-blue_gray-400 text-center text-xs w-auto"
                                  size="txtPlusJakartaSansSemiBold12Bluegray400"
                                >
                                  {props?.weburl11}
                                </Text>
                                <Text
                                  className="text-blue_gray-400 text-center text-xs w-auto"
                                  size="txtPlusJakartaSansSemiBold12Bluegray400"
                                >
                                  {props?.price5}
                                </Text>
                                <Text
                                  className="text-blue_gray-400 text-center text-xs w-auto"
                                  size="txtPlusJakartaSansSemiBold12Bluegray400"
                                >
                                  {props?.tabtransfers4}
                                </Text>
                              </div>
                              <div className="flex flex-row gap-20 h-[29px] md:h-auto items-start justify-start my-0 pb-5 md:pr-10 sm:pr-5 pr-[487.39px] pt-[3px] w-[398px] sm:w-full">
                                <Text
                                  className="text-blue_gray-400 text-center text-xs w-auto"
                                  size="txtPlusJakartaSansSemiBold12Bluegray400"
                                >
                                  {props?.tabsales5}
                                </Text>
                                <Text
                                  className="text-blue_gray-400 text-center text-xs w-auto"
                                  size="txtPlusJakartaSansSemiBold12Bluegray400"
                                >
                                  {props?.weburl12}
                                </Text>
                                <Text
                                  className="text-blue_gray-400 text-center text-xs w-auto"
                                  size="txtPlusJakartaSansSemiBold12Bluegray400"
                                >
                                  {props?.price6}
                                </Text>
                                <Text
                                  className="text-blue_gray-400 text-center text-xs w-auto"
                                  size="txtPlusJakartaSansSemiBold12Bluegray400"
                                >
                                  {props?.tabtransfers5}
                                </Text>
                              </div>
                              <div className="flex flex-row gap-20 h-[29px] md:h-auto items-start justify-start my-0 pb-5 md:pr-10 sm:pr-5 pr-[487.39px] pt-[3px] w-[398px] sm:w-full">
                                <Text
                                  className="text-blue_gray-400 text-center text-xs w-auto"
                                  size="txtPlusJakartaSansSemiBold12Bluegray400"
                                >
                                  {props?.tabsales6}
                                </Text>
                                <Text
                                  className="text-blue_gray-400 text-center text-xs w-auto"
                                  size="txtPlusJakartaSansSemiBold12Bluegray400"
                                >
                                  {props?.weburl13}
                                </Text>
                                <Text
                                  className="text-blue_gray-400 text-center text-xs w-auto"
                                  size="txtPlusJakartaSansSemiBold12Bluegray400"
                                >
                                  {props?.price7}
                                </Text>
                                <Text
                                  className="text-blue_gray-400 text-center text-xs w-auto"
                                  size="txtPlusJakartaSansSemiBold12Bluegray400"
                                >
                                  {props?.tabtransfers6}
                                </Text>
                              </div>
                              <div className="flex flex-row gap-20 h-[29px] md:h-auto items-start justify-start my-0 pb-5 md:pr-10 sm:pr-5 pr-[487.39px] pt-[3px] w-[398px] sm:w-full">
                                <Text
                                  className="text-blue_gray-400 text-center text-xs w-auto"
                                  size="txtPlusJakartaSansSemiBold12Bluegray400"
                                >
                                  {props?.tabsales7}
                                </Text>
                                <Text
                                  className="text-blue_gray-400 text-center text-xs w-auto"
                                  size="txtPlusJakartaSansSemiBold12Bluegray400"
                                >
                                  {props?.weburl14}
                                </Text>
                                <Text
                                  className="text-blue_gray-400 text-center text-xs w-auto"
                                  size="txtPlusJakartaSansSemiBold12Bluegray400"
                                >
                                  {props?.price8}
                                </Text>
                                <Text
                                  className="text-blue_gray-400 text-center text-xs w-auto"
                                  size="txtPlusJakartaSansSemiBold12Bluegray400"
                                >
                                  {props?.tabtransfers7}
                                </Text>
                              </div>
                              <div className="flex flex-row gap-20 h-[29px] md:h-auto items-start justify-start my-0 pb-5 md:pr-10 sm:pr-5 pr-[487.39px] pt-[3px] w-[398px] sm:w-full">
                                <Text
                                  className="text-blue_gray-400 text-center text-xs w-auto"
                                  size="txtPlusJakartaSansSemiBold12Bluegray400"
                                >
                                  {props?.tabsales8}
                                </Text>
                                <Text
                                  className="text-blue_gray-400 text-center text-xs w-auto"
                                  size="txtPlusJakartaSansSemiBold12Bluegray400"
                                >
                                  {props?.weburl15}
                                </Text>
                                <Text
                                  className="text-blue_gray-400 text-center text-xs w-auto"
                                  size="txtPlusJakartaSansSemiBold12Bluegray400"
                                >
                                  {props?.price9}
                                </Text>
                                <Text
                                  className="text-blue_gray-400 text-center text-xs w-auto"
                                  size="txtPlusJakartaSansSemiBold12Bluegray400"
                                >
                                  {props?.tabtransfers8}
                                </Text>
                              </div>
                              <div className="flex flex-row gap-20 h-[29px] md:h-auto items-start justify-start my-0 pb-5 md:pr-10 sm:pr-5 pr-[487.39px] pt-[3px] w-[398px] sm:w-full">
                                <Text
                                  className="text-blue_gray-400 text-center text-xs w-auto"
                                  size="txtPlusJakartaSansSemiBold12Bluegray400"
                                >
                                  {props?.tabsales9}
                                </Text>
                                <Text
                                  className="text-blue_gray-400 text-center text-xs w-auto"
                                  size="txtPlusJakartaSansSemiBold12Bluegray400"
                                >
                                  {props?.weburl16}
                                </Text>
                                <Text
                                  className="text-blue_gray-400 text-center text-xs w-auto"
                                  size="txtPlusJakartaSansSemiBold12Bluegray400"
                                >
                                  {props?.price10}
                                </Text>
                                <Text
                                  className="text-blue_gray-400 text-center text-xs w-auto"
                                  size="txtPlusJakartaSansSemiBold12Bluegray400"
                                >
                                  {props?.tabtransfers9}
                                </Text>
                              </div>
                              <div className="flex flex-row gap-20 h-[29px] md:h-auto items-start justify-start my-0 pb-5 md:pr-10 sm:pr-5 pr-[487.39px] pt-[3px] w-[398px] sm:w-full">
                                <Text
                                  className="text-blue_gray-400 text-center text-xs w-auto"
                                  size="txtPlusJakartaSansSemiBold12Bluegray400"
                                >
                                  {props?.tabsales10}
                                </Text>
                                <Text
                                  className="text-blue_gray-400 text-center text-xs w-auto"
                                  size="txtPlusJakartaSansSemiBold12Bluegray400"
                                >
                                  {props?.weburl17}
                                </Text>
                                <Text
                                  className="text-blue_gray-400 text-center text-xs w-auto"
                                  size="txtPlusJakartaSansSemiBold12Bluegray400"
                                >
                                  {props?.price11}
                                </Text>
                                <Text
                                  className="text-blue_gray-400 text-center text-xs w-auto"
                                  size="txtPlusJakartaSansSemiBold12Bluegray400"
                                >
                                  {props?.tabtransfers10}
                                </Text>
                              </div>
                              <div className="flex flex-row gap-20 h-[29px] md:h-auto items-start justify-start my-0 pb-5 md:pr-10 sm:pr-5 pr-[487.39px] pt-[3px] w-[398px] sm:w-full">
                                <Text
                                  className="text-blue_gray-400 text-center text-xs w-auto"
                                  size="txtPlusJakartaSansSemiBold12Bluegray400"
                                >
                                  {props?.tabsales11}
                                </Text>
                                <Text
                                  className="text-blue_gray-400 text-center text-xs w-auto"
                                  size="txtPlusJakartaSansSemiBold12Bluegray400"
                                >
                                  {props?.weburl18}
                                </Text>
                                <Text
                                  className="text-blue_gray-400 text-center text-xs w-auto"
                                  size="txtPlusJakartaSansSemiBold12Bluegray400"
                                >
                                  {props?.price12}
                                </Text>
                                <Text
                                  className="text-blue_gray-400 text-center text-xs w-auto"
                                  size="txtPlusJakartaSansSemiBold12Bluegray400"
                                >
                                  {props?.tabtransfers11}
                                </Text>
                              </div>
                              <div className="flex flex-row gap-20 h-[29px] md:h-auto items-start justify-start my-0 pb-5 md:pr-10 sm:pr-5 pr-[487.39px] pt-[3px] w-[398px] sm:w-full">
                                <Text
                                  className="text-blue_gray-400 text-center text-xs w-auto"
                                  size="txtPlusJakartaSansSemiBold12Bluegray400"
                                >
                                  {props?.tabsales12}
                                </Text>
                                <Text
                                  className="text-blue_gray-400 text-center text-xs w-auto"
                                  size="txtPlusJakartaSansSemiBold12Bluegray400"
                                >
                                  {props?.weburl19}
                                </Text>
                                <Text
                                  className="text-blue_gray-400 text-center text-xs w-auto"
                                  size="txtPlusJakartaSansSemiBold12Bluegray400"
                                >
                                  {props?.price13}
                                </Text>
                                <Text
                                  className="text-blue_gray-400 text-center text-xs w-auto"
                                  size="txtPlusJakartaSansSemiBold12Bluegray400"
                                >
                                  {props?.tabtransfers12}
                                </Text>
                              </div>
                            </List>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[9%] w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-80 items-center justify-end p-[13px] rounded-[13px] w-full"
                style={{
                  backgroundImage: "url('images/img_frame163262_1.png')",
                }}
              >
                <div className="flex flex-col items-center justify-start mt-[11px] w-[91%] md:w-full">
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
                    <div className="flex flex-col gap-3 items-center justify-start">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="text-base text-center text-light_green-A700"
                            size="txtInterBold16LightgreenA700"
                          >
                            {props?.topcollections}
                          </Text>
                        </div>
                        <SelectBox
                          className="bg-gray-700_33 border border-solid font-roboto leading-[normal] px-2 py-1 rounded-lg text-base text-left text-white-A700 w-[24%] sm:w-full white_A700_38_white_A700_00_border4"
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
                        <div className="bg-gray-700_33 border border-solid flex flex-row items-start justify-center p-2 rounded-lg w-auto white_A700_38_white_A700_00_border5">
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
                            backgroundImage:
                              "url('images/img_frame163262_1.png')",
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
                            {props?.weburl20}
                            {props?.weburlOne}
                            {props?.weburlTwo}
                            {props?.weburlThree}
                            {props?.weburlFour}
                            {props?.weburlFive}
                          </div>
                        </div>
                        <div className="sm:h-[219px] md:h-[227px] h-[231px] sm:mt-0 mt-2 relative w-[67%] sm:w-full">
                          <Img
                            className="absolute bottom-[0] h-[219px] left-[0] object-cover w-[79%]"
                            src="images/img_image140.png"
                            alt="image140"
                          />
                          <Button className="absolute bg-gray-700_33 border border-solid cursor-pointer font-bold font-inter min-w-[158px] py-[13px] right-[0] rounded-lg text-amber-600 text-center text-sm top-[0] white_A700_38_white_A700_00_border6">
                            {props?.tradingOnBictoryIo}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-black-900_0c_01 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[482px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start mt-5 w-[88%] md:w-full">
              <div className="bg-gray-900_02 flex flex-col h-[575px] md:h-auto items-center justify-center md:px-10 sm:px-5 px-[61px] py-[39px] rounded-[16px] w-[477px] sm:w-full">
                <div className="flex flex-col gap-8 items-center justify-center w-auto">
                  <div className="flex flex-col gap-4 items-center justify-start w-auto">
                    <div className="flex flex-col items-center justify-start w-auto">
                      <div className="flex flex-row gap-4 items-center justify-center w-auto">
                        <Img
                          className="h-6 w-6"
                          src="images/img_lock.svg"
                          alt="lock"
                        />
                        <Text
                          className="text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[-1.20px] w-auto"
                          size="txtInterBold24"
                        >
                          {props?.buynowOne}
                        </Text>
                      </div>
                    </div>
                    {props?.priceOne}
                  </div>
                  <div className="border border-solid flex flex-col items-center justify-center light_green_A700_white_A700_00_border sm:px-5 px-[39px] py-[22px] rounded-[16px] w-[349px]">
                    <div className="flex flex-row gap-[66px] items-start justify-start w-auto">
                      <Img
                        className="h-[89px] md:h-auto object-cover w-[100px]"
                        src="images/img_image17.png"
                        alt="imageSeventeen"
                      />
                      <div className="flex flex-col gap-[22px] items-end justify-start w-auto">
                        <Text
                          className="text-lg text-white-A700 w-auto"
                          size="txtInterRegular18"
                        >
                          {props?.total}
                        </Text>
                        {props?.p25sol}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-6 items-center justify-center w-auto sm:w-full">
                    <div className="flex sm:flex-col flex-row gap-2 items-center justify-start w-auto sm:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_warning.svg"
                        alt="warning"
                      />
                      <Text
                        className="text-base text-gray-600 tracking-[-0.80px] w-auto"
                        size="txtInterMedium16Gray600"
                      >
                        {props?.youllbeasked}
                      </Text>
                    </div>
                    <Button className="bg-light_green-A700 cursor-pointer font-inter font-semibold h-[72px] py-[25px] rounded-[33px] text-black-900_01 text-center text-lg tracking-[-0.36px] w-[397px]">
                      {props?.connectWallet}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <header className="absolute flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-center mx-auto shadow-bs top-[0] w-full">
          <div className="flex mb-[29px] md:ml-[0] ml-[59px] md:mt-0 mt-[26px] relative w-[13%] md:w-full">
            <Img
              className="h-[65px] ml-[undefinedpx] my-auto object-cover w-[45%] z-[1]"
              src="images/img_logo.png"
              alt="logo"
            />
            <Text
              className="ml-[-0.4px] mr-3.5 mt-[11px] text-white-A700 text-xl tracking-[-0.40px] z-[1]"
              size="txtInterSemiBold20"
            >
              {props?.nameproject}
            </Text>
            <Text
              className="mb-[9px] ml-[-0.4px] mt-auto text-white-A700 text-xs tracking-[-0.24px] z-[1]"
              size="txtInterSemiBold12"
            >
              {props?.poweredbybictorOne}
            </Text>
          </div>
          <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[1001px] mr-[31px] md:mt-0 my-[34px] w-[15%] md:w-full">
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
                      {props?.text}
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
        </header>
      </div>
    </>
  );
};

BuyModalStack.defaultProps = {
  buynow: "Buy Now",
  registred: "Registred",
  unregistred: "Unregistred",
  length: "Length",
  digitcounter: "1 digit",
  digitcounterOne: "2 digit",
  digitcounterTwo: "3 digit",
  digitcounterThree: "4 digit",
  digitcounterFour: "5 digit",
  digitcounterFive: "6 digit",
  digitcounterSix: "7 digit",
  p7digit: "7+ digit",
  price: "Price",
  expiration: "Expiration",
  duration: <>&lt; 3 Months</>,
  durationOne: "1 Year",
  durationTwo: "2 Years",
  durationThree: "3 Years",
  resetFilter: "Reset filter",
  domains: "Domains",
  expiration1: "Expiration",
  price1: "Price",
  date: "Date",
  weburl: (
    <Text className="text-sm text-white-A700 w-auto" size="txtRobotoSemiBold14">
      <span className="text-white-A700 font-roboto text-left font-normal">
        Jamalmusa
      </span>
      <span className="text-white-A700 font-roboto text-left font-semibold">
        .solana
      </span>
    </Text>
  ),
  duration1: "1 Year",
  solcounter: "25 Sol",
  buynow1: "Buy now",
  weburl1: (
    <Text className="text-sm text-white-A700 w-auto" size="txtRobotoSemiBold14">
      <span className="text-white-A700 font-roboto text-left font-normal">
        Jamalmusa
      </span>
      <span className="text-white-A700 font-roboto text-left font-semibold">
        .solana
      </span>
    </Text>
  ),
  duration2: "1 Year",
  solcounter1: "25 Sol",
  weburl2: (
    <Text className="text-sm text-white-A700 w-auto" size="txtRobotoSemiBold14">
      <span className="text-white-A700 font-roboto text-left font-normal">
        Jamalmusa
      </span>
      <span className="text-white-A700 font-roboto text-left font-semibold">
        .solana
      </span>
    </Text>
  ),
  duration3: "1 Year",
  solcounter2: "25 Sol",
  weburl3: (
    <Text className="text-sm text-white-A700 w-auto" size="txtRobotoSemiBold14">
      <span className="text-white-A700 font-roboto text-left font-normal">
        Jamalmusa
      </span>
      <span className="text-white-A700 font-roboto text-left font-semibold">
        .solana
      </span>
    </Text>
  ),
  duration4: "1 Year",
  solcounter3: "25 Sol",
  buyNow: "Buy now",
  weburl4: (
    <Text className="text-sm text-white-A700 w-auto" size="txtRobotoSemiBold14">
      <span className="text-white-A700 font-roboto text-left font-normal">
        Jamalmusa
      </span>
      <span className="text-white-A700 font-roboto text-left font-semibold">
        .solana
      </span>
    </Text>
  ),
  duration5: "1 Year",
  solcounter4: "25 Sol",
  weburl5: (
    <Text className="text-sm text-white-A700 w-auto" size="txtRobotoSemiBold14">
      <span className="text-white-A700 font-roboto text-left font-normal">
        Jamalmusa
      </span>
      <span className="text-white-A700 font-roboto text-left font-semibold">
        .solana
      </span>
    </Text>
  ),
  duration6: "1 Year",
  solcounter5: "25 Sol",
  weburl6: (
    <Text className="text-sm text-white-A700 w-auto" size="txtRobotoSemiBold14">
      <span className="text-white-A700 font-roboto text-left font-normal">
        Jamalmusa
      </span>
      <span className="text-white-A700 font-roboto text-left font-semibold">
        .solana
      </span>
    </Text>
  ),
  duration7: "1 Year",
  solcounter6: "25 Sol",
  weburl7: (
    <Text className="text-sm text-white-A700 w-auto" size="txtRobotoSemiBold14">
      <span className="text-white-A700 font-roboto text-left font-normal">
        Jamalmusa
      </span>
      <span className="text-white-A700 font-roboto text-left font-semibold">
        .solana
      </span>
    </Text>
  ),
  duration8: "1 Year",
  solcounter7: "25 Sol",
  buynow4: "Buy now",
  activity: "Activity",
  tabsales: "All",
  taboffers: "Listed",
  tablistings: "Sold",
  tabtransfers: "Registered",
  tabsalesOne: "Time",
  taboffersOne: "Domain",
  tablistingsOne: "Price",
  tabtransfersOne: "Buyer",
  tabsales1: "22s",
  weburl8: "jame.sol",
  price2: "$5.00",
  tabtransfers1: "0x17c6..",
  tabsales2: "22s",
  weburl9: "jame.sol",
  price3: "$5.00",
  tabtransfers2: "0x17c6..",
  tabsales3: "22s",
  weburl10: "jame.sol",
  price4: "$5.00",
  tabtransfers3: "0x17c6..",
  tabsales4: "22s",
  weburl11: "jame.sol",
  price5: "$5.00",
  tabtransfers4: "0x17c6..",
  tabsales5: "22s",
  weburl12: "jame.sol",
  price6: "$5.00",
  tabtransfers5: "0x17c6..",
  tabsales6: "22s",
  weburl13: "jame.sol",
  price7: "$5.00",
  tabtransfers6: "0x17c6..",
  tabsales7: "22s",
  weburl14: "jame.sol",
  price8: "$5.00",
  tabtransfers7: "0x17c6..",
  tabsales8: "22s",
  weburl15: "jame.sol",
  price9: "$5.00",
  tabtransfers8: "0x17c6..",
  tabsales9: "22s",
  weburl16: "jame.sol",
  price10: "$5.00",
  tabtransfers9: "0x17c6..",
  tabsales10: "22s",
  weburl17: "jame.sol",
  price11: "$5.00",
  tabtransfers10: "0x17c6..",
  tabsales11: "22s",
  weburl18: "jame.sol",
  price12: "$5.00",
  tabtransfers11: "0x17c6..",
  tabsales12: "22s",
  weburl19: "jame.sol",
  price13: "$5.00",
  tabtransfers12: "0x17c6..",
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
  weburl20: (
    <Text className="text-white-A700 text-xs" size="txtRobotoSemiBold12">
      <span className="text-white-A700 font-roboto text-left font-semibold">
        111.
      </span>
      <span className="text-deep_purple-400 font-roboto text-left font-semibold">
        NFT
      </span>
    </Text>
  ),
  weburlOne: (
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
  weburlTwo: (
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
  weburlThree: (
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
  weburlFour: (
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
  weburlFive: (
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
  tradingOnBictoryIo: "Trading on Bictory.io",
  buynowOne: "Buy Now",
  priceOne: (
    <Text
      className="leading-[137.52%] max-w-[326px] md:max-w-full text-base text-center text-white-A700 tracking-[-0.80px]"
      size="txtInterMedium16WhiteA700"
    >
      <span className="text-white-A700 font-inter font-normal">
        You are about to buy 25. worth of SOL for{" "}
      </span>
      <span className="text-white-A700 font-inter font-normal">
        $20.00 a year.
      </span>
    </Text>
  ),
  total: "Total",
  p25sol: (
    <Text
      className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
      size="txtSpaceGroteskBold32"
    >
      <span className="text-white-A700 font-inter text-left font-bold">25</span>
      <span className="text-white-A700 font-inter text-left text-sm font-normal">
        Sol
      </span>
    </Text>
  ),
  youllbeasked: "You’ll be asked to approve this purchase from your wallet.",
  connectWallet: "connect wallet",
  nameproject: "SolNames",
  poweredbybictorOne: "Powered by Bictory",
  text: "0G345Bv...8hU",
};

export default BuyModalStack;
