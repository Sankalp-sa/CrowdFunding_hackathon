import React from "react";
import { CloseSVG } from "../../assets/images";
import { Button, Input, Img, Heading, Text } from "./..";

export default function Header({ ...props }) {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <header {...props}>
      <div className="flex flex-row justify-between items-center w-full mx-auto max-w-[1200px]">
        <div className="flex flex-row justify-start items-start gap-[11px]">
          <Img src="images/img_real_estate_1.svg" alt="realestateone" className="h-10 w-10" />
          <Text size="md" as="p" className="mt-[5px] !text-orange-A700 !font-markoone">
            Relasto
          </Text>
        </div>
        <div className="flex flex-row justify-between items-center w-[41%]">
          <div className="flex flex-row w-[64%] gap-10">
            <div className="flex flex-row justify-start items-start w-1/4 gap-1.5">
              <Heading as="h6">Home</Heading>
              <Img src="images/img_arrow_down.svg" alt="home_two" className="h-4 w-4 mt-0.5" />
            </div>
            <div className="flex flex-row justify-start items-start w-1/4 gap-1.5">
              <Heading as="h6">Listing</Heading>
              <Img src="images/img_arrow_down.svg" alt="arrowdown_one" className="h-4 w-4" />
            </div>
            <div className="flex flex-row justify-start items-start w-1/4 gap-1.5">
              <Heading as="h6">Agents</Heading>
              <Img src="images/img_arrow_down.svg" alt="arrowdown_one" className="h-4 w-4" />
            </div>
          </div>
          <Heading as="h6" className="text-center">
            Property{" "}
          </Heading>
          <Heading as="h6">Blog</Heading>
        </div>
        <div className="flex flex-row justify-start items-center w-[19%] gap-2.5">
          <Input
            size="xs"
            shape="square"
            name="search"
            placeholder="Search"
            value={searchBarValue}
            onChange={(e) => setSearchBarValue(e)}
            prefix={<Img src="images/img_icon_24px_search.svg" alt="icon / 24px / search" className="cursor-pointer" />}
            suffix={
              searchBarValue?.length > 0 ? (
                <CloseSVG onClick={() => setSearchBarValue("")} height={24} width={24} fillColor="#191919ff" />
              ) : null
            }
            className="w-[55%] gap-2 text-gray-900 font-bold"
          />
          <Button size="lg" className="font-semibold min-w-[94px]">
            Log in
          </Button>
        </div>
      </div>
    </header>
  );
}
