import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Button, Img, GoogleMap, SelectBox, Input, Heading } from "../../components";
import Footer from "../../components/Footer";
import Header1 from "../../components/Header1";
import LandingPageCard from "../../components/LandingPageCard";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function ListingPage() {
  const [searchBarValue7, setSearchBarValue7] = React.useState("");

  return (
    <>
      <Helmet>
        <title>crowd_funding_draft1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[100px] overflow-auto bg-gray-50_01">
        <div className="flex flex-col items-center justify-start w-full gap-[60px]">
          <Header1 className="flex justify-center items-center w-full p-[19px] bg-white-A700" />
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-start justify-start w-full pt-[5px] gap-[18px] max-w-[1200px]">
              <Heading size="4xl" as="h1" className="tracking-[-0.72px]">
                Find Property
              </Heading>
              <div className="flex flex-col items-center justify-start w-full gap-3">
                <div className="flex flex-row justify-start w-full gap-5">
                  <Input
                    name="search"
                    placeholder="Enter your address"
                    value={searchBarValue7}
                    onChange={(e) => setSearchBarValue7(e)}
                    suffix={
                      searchBarValue7?.length > 0 ? (
                        <CloseSVG onClick={() => setSearchBarValue7("")} height={24} width={24} fillColor="#626262ff" />
                      ) : (
                        <Img
                          src="images/img_icon_24px_search_gray_700.svg"
                          alt="icon / 24px / search"
                          className="cursor-pointer"
                        />
                      )
                    }
                    className="w-[36%] gap-[35px] !text-gray-700 font-semibold border-blue_gray-100_01 border border-solid"
                  />
                  <SelectBox
                    indicator={<Img src="images/img_arrowdown_gray_700.svg" alt="arrow_down" />}
                    name="active"
                    placeholder="Buy"
                    options={dropDownOptions}
                    className="w-[9%] gap-px font-bold border-blue_gray-100_01 border border-solid"
                  />
                  <SelectBox
                    indicator={<Img src="images/img_arrowdown_gray_700.svg" alt="arrow_down" />}
                    name="price"
                    placeholder="$15000 - $18000"
                    options={dropDownOptions}
                    className="w-[18%] gap-px font-bold border-blue_gray-100_01 border border-solid"
                  />
                  <SelectBox
                    indicator={<Img src="images/img_arrowdown_gray_700.svg" alt="arrow_down" />}
                    name="pressed"
                    placeholder="Bed - 3"
                    options={dropDownOptions}
                    className="w-[11%] gap-px font-bold border-blue_gray-100_01 border border-solid"
                  />
                  <Button
                    color="white_A700"
                    size="4xl"
                    rightIcon={<Img src="images/img_icon_24px_plus.svg" alt="icon / 24px / plus" />}
                    className="gap-3 text-gray-700 font-bold border-blue_gray-100_01 border border-solid min-w-[113px]"
                  >
                    More
                  </Button>
                  <Button
                    size="4xl"
                    rightIcon={<Img src="images/img_icon_20px_search.svg" alt="icon / 20px / search" />}
                    className="gap-2.5 font-bold min-w-[124px]"
                  >
                    Search
                  </Button>
                </div>
                <div className="flex flex-row justify-start w-full gap-2.5">
                  <Button
                    color="blue_gray_100"
                    size="md"
                    variant="outline"
                    rightIcon={<Img src="images/img_icon_16px_close.svg" alt="icon / 16px / close" />}
                    className="gap-2 font-semibold min-w-[145px]"
                  >
                    Bathrooms 2+
                  </Button>
                  <Button
                    color="blue_gray_100"
                    size="md"
                    variant="outline"
                    rightIcon={<Img src="images/img_icon_16px_close.svg" alt="icon / 16px / close" />}
                    className="gap-2 font-semibold min-w-[243px]"
                  >
                    Square Feet 750 - 2000 sq. ft
                  </Button>
                  <Button
                    color="blue_gray_100"
                    size="md"
                    variant="outline"
                    rightIcon={<Img src="images/img_icon_16px_close.svg" alt="icon / 16px / close" />}
                    className="gap-2 font-semibold min-w-[151px]"
                  >
                    Year Built 5 - 15
                  </Button>
                  <Button
                    color="blue_gray_100"
                    size="md"
                    variant="outline"
                    rightIcon={<Img src="images/img_icon_16px_close.svg" alt="icon / 16px / close" />}
                    className="gap-2 !text-gray-900 font-semibold min-w-[168px]"
                  >
                    For Sale By Agent
                  </Button>
                  <Button
                    color="blue_gray_100"
                    size="md"
                    variant="outline"
                    rightIcon={<Img src="images/img_icon_16px_close.svg" alt="icon / 16px / close" />}
                    className="gap-2 !text-gray-900 font-semibold min-w-[174px]"
                  >
                    New Construction
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-row justify-start items-start w-full gap-6 max-w-[1200px]">
              <GoogleMap showMarker={false} className="h-[511px] w-[32%]" />
              <div className="flex flex-col items-center justify-start w-[66%] gap-[60px]">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="justify-center w-full gap-6 grid-cols-2 grid min-h-[auto]">
                    <LandingPageCard className="flex flex-col items-center justify-start w-full" />
                    <LandingPageCard
                      imageOne="images/img_image_1.png"
                      className="flex flex-col items-center justify-start w-full"
                    />
                    <LandingPageCard
                      imageOne="images/img_image_3.png"
                      className="flex flex-col items-center justify-start w-full"
                    />
                    <LandingPageCard
                      imageOne="images/img_image_4.png"
                      className="flex flex-col items-center justify-start w-full"
                    />
                    <LandingPageCard
                      imageOne="images/img_image_5.png"
                      className="flex flex-col items-center justify-start w-full"
                    />
                    <LandingPageCard
                      imageOne="images/img_image_2.png"
                      className="flex flex-col items-center justify-start w-full"
                    />
                    <LandingPageCard
                      imageOne="images/img_image_1.png"
                      className="flex flex-col items-center justify-start w-full"
                    />
                    <LandingPageCard
                      imageOne="images/img_image_3.png"
                      className="flex flex-col items-center justify-start w-full"
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-between w-full">
                  <div className="flex flex-row justify-start gap-[5px]">
                    <Button color="gray_700" variant="outline" className="font-semibold min-w-[48px]">
                      1
                    </Button>
                    <Button color="blue_gray_100_02" variant="outline" className="font-semibold min-w-[48px]">
                      2
                    </Button>
                    <Button color="blue_gray_100_02" variant="outline" className="font-semibold min-w-[48px]">
                      3
                    </Button>
                    <Button color="blue_gray_100_02" variant="outline" className="font-semibold min-w-[48px]">
                      4
                    </Button>
                    <Button color="blue_gray_100_02" variant="outline" className="font-semibold min-w-[48px]">
                      5
                    </Button>
                  </div>
                  <Button
                    color="blue_gray_100_02"
                    variant="outline"
                    rightIcon={<Img src="images/img_icon_16px_arrow_right.svg" alt="icon / 16px / arrow - right" />}
                    className="gap-1 font-semibold min-w-[134px]"
                  >
                    Next Page
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full pl-[74px] pr-14 gap-[115px] py-[74px] bg-white-A700" />
      </div>
    </>
  );
}
