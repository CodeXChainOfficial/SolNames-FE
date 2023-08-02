import React from "react";

import { Button, Img, Text } from "components";

type SolnamesCheckOutRowsolcounterProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "userurl"
  | "userstorage"
  | "edit"
  | "weburlOne"
  | "filesizeOne"
  | "editOne"
  | "solcounter"
  | "solcounterone"
> &
  Partial<{
    userurl: string;
    userstorage: string;
    edit: string;
    weburlOne: string;
    filesizeOne: string;
    editOne: string;
    solcounter: string;
    solcounterone: string;
  }>;

const SolnamesCheckOutRowsolcounter: React.FC<
  SolnamesCheckOutRowsolcounterProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-6 items-center justify-start w-auto">
          <Img
            className="h-10 md:h-auto rounded-[50%] w-10"
            src="images/img_frame163262.png"
            alt="frame163262"
          />
          <div className="flex flex-col gap-2 items-start justify-start w-auto">
            <Text
              className="text-white-A700 text-xl w-auto"
              size="txtInterBold20"
            >
              {props?.userurl}
            </Text>
            <div className="flex flex-row gap-6 items-center justify-center w-auto">
              <Text
                className="text-gray-500 text-xl w-auto"
                size="txtInterMedium20"
              >
                {props?.userstorage}
              </Text>
              <Text
                className="text-light_green-A700 text-sm underline w-auto"
                size="txtInterMedium14LightgreenA700"
              >
                {props?.edit}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-6 items-center justify-start w-auto">
          <Img
            className="h-10 md:h-auto rounded-[50%] w-10"
            src="images/img_frame163262.png"
            alt="frame163262_One"
          />
          <div className="flex flex-col gap-2 items-start justify-start w-auto">
            <Text
              className="text-white-A700 text-xl w-auto"
              size="txtInterBold20"
            >
              {props?.weburlOne}
            </Text>
            <div className="flex flex-row gap-6 items-center justify-center w-auto">
              <Text
                className="text-gray-500 text-xl w-auto"
                size="txtInterMedium20"
              >
                {props?.filesizeOne}
              </Text>
              <Text
                className="text-light_green-A700 text-sm underline w-auto"
                size="txtInterMedium14LightgreenA700"
              >
                {props?.editOne}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-auto">
          <Text
            className="text-white-A700 text-xl w-auto"
            size="txtInterSemiBold20"
          >
            {props?.solcounter}
          </Text>
        </div>
        <div className="flex flex-col items-center justify-start w-auto">
          <Text
            className="text-white-A700 text-xl w-auto"
            size="txtInterSemiBold20"
          >
            {props?.solcounterone}
          </Text>
        </div>
        <Button className="bg-gray-900_02 flex h-8 items-center justify-center p-1 rounded-[50%] w-8">
          <Img
            className="h-6"
            src="images/img_closeremove.svg"
            alt="closeremove"
          />
        </Button>
        <Button className="bg-gray-900_02 flex h-8 items-center justify-center p-1 rounded-[50%] w-8">
          <Img
            className="h-6"
            src="images/img_closeremove.svg"
            alt="closeremove_One"
          />
        </Button>
      </div>
    </>
  );
};

SolnamesCheckOutRowsolcounter.defaultProps = {
  userurl: "Jamalmusa.solana",
  userstorage: "Storage 10KB",
  edit: "Edit",
  weburlOne: "Jamalmusa.solana",
  filesizeOne: "Storage 10KB",
  editOne: "Edit",
  solcounter: "25 SOL",
  solcounterone: "25 SOL",
};

export default SolnamesCheckOutRowsolcounter;
