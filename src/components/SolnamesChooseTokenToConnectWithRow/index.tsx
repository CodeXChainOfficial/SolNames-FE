import React from "react";

import { List, Text } from "components";

type SolnamesChooseTokenToConnectWithRowProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "walletnumber"
  | "walletname"
  | "tokennumber"
  | "tokenname"
  | "reviewnumber"
  | "reviewname"
  | "reviewtokennumber"
  | "reviewtokenname"
  | "frame163307"
  | "reviewitem"
  | "frame1633071"
  | "reviewitem1"
> &
  Partial<{
    walletnumber: string;
    walletname: string;
    tokennumber: string;
    tokenname: string;
    reviewnumber: string;
    reviewname: string;
    reviewtokennumber: string;
    reviewtokenname: string;
    frame163307: string;
    reviewitem: string;
    frame1633071: string;
    reviewitem1: string;
  }>;

const SolnamesChooseTokenToConnectWithRow: React.FC<
  SolnamesChooseTokenToConnectWithRowProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <List
          className="sm:flex-col flex-row gap-10 grid sm:grid-cols-1 grid-cols-2 w-[35%] md:w-full"
          orientation="horizontal"
        >
          <div className="flex flex-row gap-[9px] items-start justify-start w-auto">
            <Text
              className="bg-light_green-A700 flex h-6 items-center justify-center rounded-[50%] text-center text-gray-900_02 text-xs w-6"
              size="txtInterBold12Gray90002"
            >
              {props?.walletnumber}
            </Text>
            <Text
              className="text-center text-lg text-white-A700 w-auto"
              size="txtInterSemiBold18"
            >
              {props?.walletname}
            </Text>
          </div>
          <div className="flex flex-row gap-[9px] items-start justify-start w-auto">
            <Text
              className="bg-light_green-A700 flex h-6 items-center justify-center rounded-[50%] text-center text-gray-900_02 text-xs w-6"
              size="txtInterBold12Gray90002"
            >
              {props?.tokennumber}
            </Text>
            <Text
              className="text-center text-lg text-white-A700 w-auto"
              size="txtInterSemiBold18"
            >
              {props?.tokenname}
            </Text>
          </div>
        </List>
        <List
          className="sm:flex-col flex-row gap-10 grid md:grid-cols-1 grid-cols-2 w-[41%] md:w-full"
          orientation="horizontal"
        >
          <div className="flex flex-row gap-[9px] items-start justify-start w-auto">
            <Text
              className="bg-light_green-A700_35 flex h-6 items-center justify-center rounded-[50%] text-center text-gray-900_02 text-xs w-6"
              size="txtInterBold12Gray90002"
            >
              {props?.reviewnumber}
            </Text>
            <Text
              className="text-center text-lg text-white-A700 w-auto"
              size="txtInterSemiBold18"
            >
              {props?.reviewname}
            </Text>
          </div>
          <div className="flex flex-row gap-[9px] items-start justify-start w-auto">
            <Text
              className="bg-light_green-A700_35 flex h-6 items-center justify-center rounded-[50%] text-center text-gray-900_02 text-xs w-6"
              size="txtInterBold12Gray90002"
            >
              {props?.reviewtokennumber}
            </Text>
            <Text
              className="text-center text-lg text-white-A700 w-auto"
              size="txtInterSemiBold18"
            >
              {props?.reviewtokenname}
            </Text>
          </div>
        </List>
        <List
          className="sm:flex-col flex-row gap-10 grid grid-cols-2 w-[21%] md:w-full"
          orientation="horizontal"
        >
          <div className="flex flex-row gap-[9px] items-start justify-start w-auto">
            <Text
              className="bg-light_green-A700_35 flex h-6 items-center justify-center rounded-[50%] text-center text-gray-900_02 text-xs w-6"
              size="txtInterBold12Gray90002"
            >
              {props?.frame163307}
            </Text>
            <Text
              className="text-center text-lg text-white-A700 w-auto"
              size="txtInterSemiBold18"
            >
              {props?.reviewitem}
            </Text>
          </div>
          <div className="flex flex-row gap-[9px] items-start justify-start w-auto">
            <Text
              className="bg-light_green-A700_35 flex h-6 items-center justify-center rounded-[50%] text-center text-gray-900_02 text-xs w-6"
              size="txtInterBold12Gray90002"
            >
              {props?.frame1633071}
            </Text>
            <Text
              className="text-center text-lg text-white-A700 w-auto"
              size="txtInterSemiBold18"
            >
              {props?.reviewitem1}
            </Text>
          </div>
        </List>
      </div>
    </>
  );
};

SolnamesChooseTokenToConnectWithRow.defaultProps = {
  walletnumber: "1",
  walletname: "Select a wallet on Solana",
  tokennumber: "1",
  tokenname: "Select a wallet on Solana",
  reviewnumber: "2",
  reviewname: "Choose token to connect with",
  reviewtokennumber: "2",
  reviewtokenname: "Choose token to connect with",
  frame163307: "3",
  reviewitem: "Review item",
  frame1633071: "3",
  reviewitem1: "Review item",
};

export default SolnamesChooseTokenToConnectWithRow;
