import React from "react";
import { createColumnHelper } from "@tanstack/react-table";
import {
  Button,
  Img,
  Input,
  Line,
  List,
  ReactTable,
  SelectBox,
  Text,
} from "components";
import DOmainExploreFullOpenColumnSeven from "components/DOmainExploreFullOpenColumnSeven";
import DOmainExploreFullOpenFilter from "components/DOmainExploreFullOpenFilter";
import DOmainExploreFullOpenTablist from "components/DOmainExploreFullOpenTablist";
import DOmainExploreFullOpenTablist1 from "components/DOmainExploreFullOpenTablist1";
import DOmainExploreFullOpenTablist2 from "components/DOmainExploreFullOpenTablist2";

type TableRowType = {
  domains: string;
  expiration: string;
  price: string;
  date: string;
};

const dropdownOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const DOmainexplorefullopenPage: React.FC = () => {
  const tableData = React.useRef<TableRowType[]>([
    // ... (table data)
  ]);

  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper<TableRowType>();
    return [
      tableColumnHelper.accessor("domains", {
        cell: (info) => (
          <div className="font-roboto md:h-[17px] h-[79px] relative">
            <Img
              className="absolute bottom-[0] h-4 left-[0] object-cover w-[34px]"
              src="images/img_image16.png"
              alt="imageSixteen"
            />
            <Text
              className="absolute bottom-[19%] left-[16%] text-sm text-white-A700 w-auto"
              size="txtRobotoSemiBold14"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[193px] pl-[9px] py-[15px] text-base text-blue_gray-200"
            size="txtPlusJakartaSansSemiBold16Bluegray200"
          >
            Domains
          </Text>
        ),
      }),
      tableColumnHelper.accessor("expiration", {
        cell: (info) => (
          <Text
            className="pb-[13px] pl-5 pt-[35px] text-sm text-white-A700"
            size="txtPlusJakartaSansSemiBold14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[173px] pb-3 pt-[18px] text-base text-blue_gray-200"
            size="txtPlusJakartaSansSemiBold16Bluegray200"
          >
            Expiration
          </Text>
        ),
      }),
      tableColumnHelper.accessor("price", {
        cell: (info) => (
          <Text
            className="pb-[13px] pt-[35px] text-sm text-white-A700"
            size="txtPlusJakartaSansSemiBold14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[124px] py-[15px] text-base text-blue_gray-200"
            size="txtPlusJakartaSansSemiBold16Bluegray200"
          >
            Price
          </Text>
        ),
      }),
      tableColumnHelper.accessor("date", {
        cell: (info) => (
          <div className="flex flex-row font-inter items-center justify-center sm:pr-5 pr-[25px] pt-[25px]">
            <Button className="bg-light_green-A700 cursor-pointer font-semibold min-w-[105px] mt-2 py-3 rounded-[23px] text-black-900_01 text-center text-lg tracking-[-0.36px]">
              {info?.getValue()}
            </Button>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[130px] sm:px-5 px-[34px] py-[15px] text-base text-blue_gray-200 text-center"
            size="txtPlusJakartaSansSemiBold16Bluegray200"
          >
            Date
          </Text>
        ),
      }),
    ];
  }, []);

  return (
    <>
      <div className="flex flex-col font-inter items-center justify-start mx-auto w-full">
        {/* ... (rest of the code) */}
      </div>
    </>
  );
};

export default DOmainexplorefullopenPage;
