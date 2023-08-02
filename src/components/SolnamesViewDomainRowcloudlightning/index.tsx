import React from "react";

import { Img, Text } from "components";

type SolnamesViewDomainRowcloudlightningProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "quickbuytext" | "quickbuytextone"
> &
  Partial<{ quickbuytext: string; quickbuytextone: string }>;

const SolnamesViewDomainRowcloudlightning: React.FC<
  SolnamesViewDomainRowcloudlightningProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[19px] w-[19px]"
          src="images/img_cloudlightning.svg"
          alt="cloudlightning"
        />
        <Img
          className="h-[19px] w-[19px]"
          src="images/img_cloudlightning.svg"
          alt="cloudlightning_One"
        />
        <Text
          className="text-[14.19px] text-light_green-A700 w-auto"
          size="txtInterMedium1419"
        >
          {props?.quickbuytext}
        </Text>
        <Text
          className="text-[14.19px] text-light_green-A700 w-auto"
          size="txtInterMedium1419"
        >
          {props?.quickbuytextone}
        </Text>
      </div>
    </>
  );
};

SolnamesViewDomainRowcloudlightning.defaultProps = {
  quickbuytext: "Quick buy",
  quickbuytextone: "Quick buy",
};

export default SolnamesViewDomainRowcloudlightning;
