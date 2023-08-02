import React from "react";

import { Button, Img, Text } from "components";

type SolnamesViewDomainColumnjamalmusa404Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "username" | "usernameoutsidemargin"
> &
  Partial<{ username: string; usernameoutsidemargin: string }>;

const SolnamesViewDomainColumnjamalmusa404: React.FC<
  SolnamesViewDomainColumnjamalmusa404Props
> = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ backgroundImage: "url('images/img_frame163262_2.png')" }}
      >
        <Button className="bg-gray-800_33 flex h-7 items-center justify-center mt-1.5 p-1.5 rounded-[50%] w-7">
          <Img className="h-4" src="images/img_star.svg" alt="star" />
        </Button>
        <div className="md:h-[116px] h-[25px] mb-[91px] relative w-[55%]">
          <Text
            className="absolute h-full inset-[0] justify-center m-auto text-white-A700 text-xl w-max"
            size="txtInterBold20"
          >
            {props?.username}
          </Text>
          <Text
            className="absolute h-full inset-[0] justify-center m-auto text-white-A700 text-xl w-max"
            size="txtInterBold20"
          >
            {props?.usernameoutsidemargin}
          </Text>
        </div>
      </div>
    </>
  );
};

SolnamesViewDomainColumnjamalmusa404.defaultProps = {
  username: "Jamalmusa.404",
  usernameoutsidemargin: "Jamalmusa.404",
};

export default SolnamesViewDomainColumnjamalmusa404;
