import React from "react";

import { Button, Img, Text } from "components";

type SolnamesViewDomainColumnProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "userurl" | "userurlone"
> &
  Partial<{ userurl: string; userurlone: string }>;

const SolnamesViewDomainColumn: React.FC<SolnamesViewDomainColumnProps> = (
  props,
) => {
  return (
    <>
      <div
        className={props.className}
        style={{ backgroundImage: "url('images/img_frame163262_1.png')" }}
      >
        <Button className="bg-gray-800_33 flex h-7 items-center justify-center p-1.5 rounded-[50%] w-7">
          <Img className="h-4" src="images/img_star.svg" alt="star" />
        </Button>
        <div className="md:h-[119px] h-[25px] mb-[94px] relative w-[57%]">
          <Text
            className="absolute h-full inset-[0] justify-center m-auto text-white-A700 text-xl w-max"
            size="txtInterBold20"
          >
            {props?.userurl}
          </Text>
          <Text
            className="absolute h-full inset-[0] justify-center m-auto text-white-A700 text-xl w-max"
            size="txtInterBold20"
          >
            {props?.userurlone}
          </Text>
        </div>
      </div>
    </>
  );
};

SolnamesViewDomainColumn.defaultProps = {
  userurl: "Jamalmusa.meta",
  userurlone: "Jamalmusa.meta",
};

export default SolnamesViewDomainColumn;
