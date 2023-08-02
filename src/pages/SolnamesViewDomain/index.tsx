import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";
import Header from "components/Header";
import SolnamesViewDomainColumn from "components/SolnamesViewDomainColumn";
import SolnamesViewDomainColumnTwo from "components/SolnamesViewDomainColumnTwo";
import SolnamesViewDomainColumnjamalmusa404 from "components/SolnamesViewDomainColumnjamalmusa404";
import SolnamesViewDomainColumnstar from "components/SolnamesViewDomainColumnstar";
import SolnamesViewDomainColumntrash from "components/SolnamesViewDomainColumntrash";
import SolnamesViewDomainColumntrash1 from "components/SolnamesViewDomainColumntrash1";
import SolnamesViewDomainColumntrashTwo from "components/SolnamesViewDomainColumntrashTwo";
import SolnamesViewDomainRowcloudlightning from "components/SolnamesViewDomainRowcloudlightning";

const SolnamesViewDomainPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black-900 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[72px] items-center justify-start mx-auto pb-[125px] w-full">
        <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs w-full" />
        <div className="flex flex-col md:gap-10 gap-16 items-center justify-start max-w-[1251px] mx-auto md:px-5 w-full">
          <div className="bg-gradient  border border-solid flex flex-col gap-8 green_A400_51_lime_500_28_border2 items-center justify-start md:px-10 sm:px-5 px-[62px] py-[35px] rounded-[32px] w-auto md:w-full">
            <div className="bg-gray-900_01 flex flex-row md:gap-10 items-center justify-between p-2 rounded-[37px] w-full">
              <Text
                className="ml-[59px] text-center text-white-A700 text-xl"
                size="txtInterRegular20"
              >
                Jamesyy
              </Text>
              <Button className="bg-light_green-A700 cursor-pointer font-bold mr-[3px] py-5 rounded-[28px] text-center text-gray-900_02 text-sm w-[190px]">
                Search domain
              </Button>
            </div>
            <div className="h-[563px] md:h-[994px] relative w-[93%] md:w-full">
              <div className="absolute flex md:flex-col flex-row gap-[51px] h-full inset-[0] items-center justify-between m-auto w-auto">
                <div className="bg-gradient  border border-solid flex flex-col gap-[11px] green_A400_51_lime_500_28_border3 items-center justify-end pt-[21px] sm:px-5 px-[21px] rounded-[16px] w-[37%] md:w-full">
                  <SolnamesViewDomainColumnstar
                    className="bg-cover bg-no-repeat flex flex-col md:gap-10 gap-[65px] h-[242px] items-center justify-start mt-[27px] p-[15px] rounded-[13px] w-[96%] md:w-full"
                    style={{
                      backgroundImage:
                        "url('images/img_frame163262_242x315.png')",
                    }}
                  />
                  <div className="flex flex-col items-center justify-start w-auto">
                    <SolnamesViewDomainColumntrash className="bg-gray-900_03 flex flex-col gap-2.5 items-start justify-start sm:px-5 px-6 py-4 rounded-[16px] w-auto" />
                  </div>
                </div>
                <div className="flex flex-col gap-6 items-start justify-center w-auto md:w-full">
                  <SolnamesViewDomainColumntrashTwo className="flex flex-col gap-4 items-start justify-start w-auto md:w-full" />
                  <div
                    className="common-pointer bg-light_green-A700 flex flex-row gap-2.5 items-center justify-center sm:px-5 px-6 py-4 rounded-[28px] w-[270px]"
                    onClick={() => navigate("/buymodal")}
                  >
                    <Text
                      className="text-base text-center text-gray-900_02 w-auto"
                      size="txtInterBold16"
                    >
                      Buy Now
                    </Text>
                    <Text
                      className="text-base text-center text-gray-900_02 w-auto"
                      size="txtInterBold16"
                    >
                      Buy Now
                    </Text>
                  </div>
                </div>
              </div>
              <div className="absolute flex flex-row items-start justify-evenly right-[0] top-[13%] w-[11%]">
                <Text
                  className="text-light_green-A700 text-sm"
                  size="txtInterBold14"
                >
                  View full page
                </Text>
                <Img
                  className="h-[5px] mt-0.5 w-[5px]"
                  src="images/img_arrow3.svg"
                  alt="arrowThree"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10 items-center justify-start w-auto md:w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 gap-[856px] items-center justify-between w-auto md:w-full">
              <div className="flex flex-col items-start justify-start w-auto">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-100_01 w-auto"
                  size="txtInterBold32"
                >
                  Great Alternatives
                </Text>
              </div>
              <div className="flex flex-row gap-4 items-center justify-start w-auto">
                <a
                  href="javascript:"
                  className="text-lg text-white-A700 w-auto"
                >
                  <Text size="txtInterSemiBold18">View all</Text>
                </a>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowright.svg"
                  alt="arrowright"
                />
              </div>
            </div>
            <List
              className="sm:flex-col flex-row md:gap-10 gap-16 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-auto md:w-full"
              orientation="horizontal"
            >
              <div className="bg-gradient  border border-solid flex flex-col gap-[11px] green_A400_51_lime_500_28_border4 items-center justify-end pt-[21px] sm:px-5 px-[21px] rounded-[16px] w-full">
                <SolnamesViewDomainColumnTwo
                  className="bg-cover bg-no-repeat flex flex-col md:gap-10 gap-[67px] h-[242px] items-center justify-start mt-[27px] p-[13px] rounded-[13px] w-[96%] md:w-full"
                  style={{
                    backgroundImage:
                      "url('images/img_frame163262_242x315.png')",
                  }}
                />
                <div className="flex flex-col gap-[17px] items-center justify-start w-auto">
                  <SolnamesViewDomainRowcloudlightning className="flex flex-row gap-2 items-center justify-center w-[199px]" />
                  <SolnamesViewDomainColumntrash1 className="bg-gray-900_03 flex flex-col gap-2.5 items-start justify-start sm:px-5 px-6 py-4 rounded-[16px] w-auto" />
                </div>
              </div>
              <div className="bg-gradient  border border-solid flex flex-col gap-[11px] green_A400_51_lime_500_28_border5 items-center justify-end pt-[21px] sm:px-5 px-[21px] rounded-[16px] w-full">
                <SolnamesViewDomainColumn
                  className="bg-cover bg-no-repeat flex flex-col md:gap-10 gap-[66px] h-[242px] items-center justify-start mt-[27px] p-3.5 rounded-[13px] w-[96%] md:w-full"
                  style={{
                    backgroundImage: "url('images/img_frame163262_1.png')",
                  }}
                />
                <div className="flex flex-col gap-[17px] items-center justify-start w-auto">
                  <SolnamesViewDomainRowcloudlightning className="flex flex-row gap-2 items-center justify-center w-[199px]" />
                  <SolnamesViewDomainColumntrash1 className="bg-gray-900_03 flex flex-col gap-2.5 items-start justify-start sm:px-5 px-6 py-4 rounded-[16px] w-auto" />
                </div>
              </div>
              <div className="bg-gradient  border border-solid flex flex-col gap-[11px] green_A400_51_lime_500_28_border6 items-center justify-end pt-[21px] sm:px-5 px-[21px] rounded-[16px] w-full">
                <SolnamesViewDomainColumnjamalmusa404
                  className="bg-cover bg-no-repeat flex flex-col gap-[57px] h-[242px] items-center justify-start mt-[27px] p-[17px] rounded-[13px] w-[96%] md:w-full"
                  style={{
                    backgroundImage: "url('images/img_frame163262_2.png')",
                  }}
                />
                <div className="flex flex-col gap-[17px] items-center justify-start w-auto">
                  <SolnamesViewDomainRowcloudlightning className="flex flex-row gap-2 items-center justify-center w-[199px]" />
                  <SolnamesViewDomainColumntrash1 className="bg-gray-900_03 flex flex-col gap-2.5 items-start justify-start sm:px-5 px-6 py-4 rounded-[16px] w-auto" />
                </div>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default SolnamesViewDomainPage;
