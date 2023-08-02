import React from "react";

import { Button, Img, Text } from "components";

type SolnamesViewDomainColumnstarProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "userweburl" | "userweburlone"
> &
  Partial<{ userweburl: string; userweburlone: string }>;

const SolnamesViewDomainColumnstar: React.FC<
  SolnamesViewDomainColumnstarProps
> = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ backgroundImage: "url('images/img_frame163262_242x315.png')" }}
      >
        <div className="bg-gray-800_33 h-7 relative rounded-[50%] w-7">
          <Img
            className="absolute h-4 inset-[0] justify-center m-auto w-4"
            src="images/img_star.svg"
            alt="star"
          />
          <Button className="absolute bg-gray-800_33 flex h-7 inset-[0] items-center justify-center m-auto p-1.5 rounded-[50%] w-7">
            <Img className="h-4" src="images/img_star.svg" alt="star_One" />
          </Button>
        </div>
        <div className="md:h-[118px] h-[25px] mb-[93px] relative w-[65%]">
          <Text
            className="absolute h-full inset-[0] justify-center m-auto text-white-A700 text-xl w-max"
            size="txtInterBold20"
          >
            {props?.userweburl}
          </Text>
          <Text
            className="absolute h-full inset-[0] justify-center m-auto text-white-A700 text-xl w-max"
            size="txtInterBold20"
          >
            {props?.userweburlone}
          </Text>
        </div>
      </div>
    </>
  );
};

SolnamesViewDomainColumnstar.defaultProps = {
  userweburl: "Jamalmusa.solana",
  userweburlone: "Jamalmusa.solana",
};

export default SolnamesViewDomainColumnstar;
