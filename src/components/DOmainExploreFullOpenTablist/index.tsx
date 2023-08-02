import React from "react";

import { Text } from "components";

type DOmainExploreFullOpenTablistProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "alltab" | "listedtab" | "soldtab" | "registeredtab"
> &
  Partial<{
    alltab: string;
    listedtab: string;
    soldtab: string;
    registeredtab: string;
  }>;

const DOmainExploreFullOpenTablist: React.FC<
  DOmainExploreFullOpenTablistProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="text-lg text-light_green-A700"
          size="txtPlusJakartaSansSemiBold18LightgreenA700"
        >
          {props?.alltab}
        </Text>
        <Text
          className="text-blue_gray-400 text-center text-lg w-auto"
          size="txtPlusJakartaSansSemiBold18Bluegray400"
        >
          {props?.listedtab}
        </Text>
        <Text
          className="text-blue_gray-400 text-center text-lg w-auto"
          size="txtPlusJakartaSansSemiBold18Bluegray400"
        >
          {props?.soldtab}
        </Text>
        <Text
          className="text-blue_gray-400 text-center text-lg w-auto"
          size="txtPlusJakartaSansSemiBold18Bluegray400"
        >
          {props?.registeredtab}
        </Text>
      </div>
    </>
  );
};

DOmainExploreFullOpenTablist.defaultProps = {
  alltab: "All",
  listedtab: "Listed",
  soldtab: "Sold",
  registeredtab: "Registered",
};

export default DOmainExploreFullOpenTablist;
