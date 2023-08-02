import React from "react";

import { Line, List, Text } from "components";

type SolnamesChooseTokenToConnectWithColumnordersummaryProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "ordersummary"
  | "subtotaltext"
  | "subtotalvalue"
  | "gastoll"
  | "gastollvalue"
  | "total"
  | "totalpricevalue"
  | "totalsolcountervalue"
  | "subtotaltext1"
  | "subtotalvalue1"
  | "gastoll1"
  | "gastollvalue1"
  | "line140"
  | "total1"
  | "totalpricevalue1"
  | "totalsolcountervalue1"
> &
  Partial<{
    ordersummary: string;
    subtotaltext: string;
    subtotalvalue: string;
    gastoll: string;
    gastollvalue: string;
    total: string;
    totalpricevalue: string;
    totalsolcountervalue: string;
    subtotaltext1: string;
    subtotalvalue1: string;
    gastoll1: string;
    gastollvalue1: string;
    line140: string;
    total1: string;
    totalpricevalue1: string;
    totalsolcountervalue1: string;
  }>;

const SolnamesChooseTokenToConnectWithColumnordersummary: React.FC<
  SolnamesChooseTokenToConnectWithColumnordersummaryProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text className="text-white-A700 text-xl w-auto" size="txtInterBold20">
          {props?.ordersummary}
        </Text>
        <List
          className="flex flex-col gap-[39px] items-center w-full"
          orientation="vertical"
        >
          <div className="flex md:flex-1 flex-col gap-4 items-center justify-start w-auto md:w-full">
            <Line className="bg-gray-900_08 h-px w-[98%]" />
            <div className="flex flex-col gap-4 items-start justify-start p-2.5 w-auto md:w-full">
              <div className="flex flex-row gap-[213px] items-start justify-between w-auto">
                <Text
                  className="text-base text-gray-500 w-auto"
                  size="txtInterMedium16Gray500"
                >
                  {props?.subtotaltext}
                </Text>
                <Text
                  className="text-white-A700 text-xl"
                  size="txtInterSemiBold20"
                >
                  {props?.subtotalvalue}
                </Text>
              </div>
              <div className="flex flex-row gap-[106px] items-start justify-start w-[311px]">
                <Text
                  className="text-base text-gray-500 w-auto"
                  size="txtInterMedium16Gray500"
                >
                  {props?.gastoll}
                </Text>
                <Text
                  className="text-right text-white-A700 text-xl w-auto"
                  size="txtInterSemiBold20"
                >
                  {props?.gastollvalue}
                </Text>
              </div>
            </div>
            <Line className="bg-gray-900_08 h-px w-[98%]" />
            <div className="flex flex-row items-center justify-between w-[311px]">
              <Text
                className="text-base text-gray-500 w-auto"
                size="txtInterMedium16Gray500"
              >
                {props?.total}
              </Text>
              <div className="flex flex-col gap-4 items-end justify-start w-auto">
                <Text
                  className="text-white-A700 text-xl w-auto"
                  size="txtInterSemiBold20"
                >
                  {props?.totalpricevalue}
                </Text>
                <Text
                  className="text-right text-white-A700 text-xl w-auto"
                  size="txtInterSemiBold20"
                >
                  {props?.totalsolcountervalue}
                </Text>
              </div>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col gap-4 items-center justify-start w-auto md:w-full">
            <Line className="bg-gray-900_08 h-px w-[98%]" />
            <div className="flex flex-col gap-4 items-start justify-start p-2.5 w-auto md:w-full">
              <div className="flex flex-row gap-[213px] items-start justify-between w-auto">
                <Text
                  className="text-base text-gray-500 w-auto"
                  size="txtInterMedium16Gray500"
                >
                  {props?.subtotaltext1}
                </Text>
                <Text
                  className="text-white-A700 text-xl"
                  size="txtInterSemiBold20"
                >
                  {props?.subtotalvalue1}
                </Text>
              </div>
              <div className="flex flex-row gap-[106px] items-start justify-start w-[311px]">
                <Text
                  className="text-base text-gray-500 w-auto"
                  size="txtInterMedium16Gray500"
                >
                  {props?.gastoll1}
                </Text>
                <Text
                  className="text-right text-white-A700 text-xl w-auto"
                  size="txtInterSemiBold20"
                >
                  {props?.gastollvalue1}
                </Text>
              </div>
            </div>
            {!!props?.line140 ? (
              <Line className="bg-gray-900_08 h-px w-[98%]" />
            ) : null}
            <div className="flex flex-row items-center justify-between w-[311px]">
              <Text
                className="text-base text-gray-500 w-auto"
                size="txtInterMedium16Gray500"
              >
                {props?.total1}
              </Text>
              <div className="flex flex-col gap-4 items-end justify-start w-auto">
                <Text
                  className="text-white-A700 text-xl w-auto"
                  size="txtInterSemiBold20"
                >
                  {props?.totalpricevalue1}
                </Text>
                <Text
                  className="text-right text-white-A700 text-xl w-auto"
                  size="txtInterSemiBold20"
                >
                  {props?.totalsolcountervalue1}
                </Text>
              </div>
            </div>
          </div>
        </List>
      </div>
    </>
  );
};

SolnamesChooseTokenToConnectWithColumnordersummary.defaultProps = {
  ordersummary: "Order Summary",
  subtotaltext: "Subtotal",
  subtotalvalue: "25 ",
  gastoll: "Gas toll",
  gastollvalue: "0.07 SOL",
  total: "Total",
  totalpricevalue: "25 USDC",
  totalsolcountervalue: "0.07 SOL",
  subtotaltext1: "Subtotal",
  subtotalvalue1: "25 ",
  gastoll1: "Gas toll",
  gastollvalue1: "0.07 SOL",
  total1: "Total",
  totalpricevalue1: "25 USDC",
  totalsolcountervalue1: "0.07 SOL",
};

export default SolnamesChooseTokenToConnectWithColumnordersummary;
