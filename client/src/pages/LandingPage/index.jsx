import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Img, Text, Button, Input } from "../../components";
import Header from "../../components/Header";
import LandingPageCard from "../../components/LandingPageCard";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";

export default function LandingPagePage() {
  return (
    <>
      <Helmet>
        <title>crowd_funding_draft1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[99px] overflow-auto bg-white-A700">
        <div className="flex flex-col items-center justify-start w-full">
          <Header className="flex justify-center items-center w-full p-[19px] bg-white-A700" />
          <div className="flex flex-row justify-end w-full py-[50px] bg-yellow-50">
            <div className="flex flex-row justify-between items-center w-full mx-auto max-w-[1396px]">
              <div className="flex flex-col items-center justify-start w-[44%] gap-10">
                <div className="flex flex-col items-center justify-start w-full gap-[15px]">
                  <Heading size="5xl" as="h1" className="tracking-[-0.92px]">
                    Find a perfect property
                    <br />
                    {`Where you'll love to live`}
                  </Heading>
                  <Text size="md" as="p">
                    We helps businesses customize, automate and scale up their ad production and delivery.
                  </Text>
                </div>
                <div className="flex flex-row justify-center w-full p-6 bg-white-A700 rounded-[16px]">
                  <Tabs
                    className="flex flex-col items-center justify-start w-full gap-[38px]"
                    selectedTabClassName="!text-white-A700 bg-gray-900 rounded-[10px]"
                    selectedTabPanelClassName="relative tab-panel--selected"
                  >
                    <TabList className="flex flex-row justify-between w-full gap-[155px] p-[9px]">
                      <Tab className="mt-[5px] ml-[62px] text-white-A700 text-lg font-bold">Buy</Tab>
                      <Tab className="text-gray-900 text-lg font-bold">Sell</Tab>
                      <Tab className="mr-[57px] text-gray-900 text-lg font-bold">Rent</Tab>
                    </TabList>
                    {[...Array(3)].map((_, index) => (
                      <TabPanel key={`tab-panel${index}`} className="items-center w-full absolute">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col items-center justify-start w-full gap-6">
                            <div className="flex flex-col items-center justify-start w-full gap-5">
                              <Input
                                name="city"
                                placeholder="City/Street"
                                suffix={<Img src="images/img_icon_20px_map.svg" alt="icon / 20px / map" />}
                                className="w-full gap-[35px] font-semibold border-blue_gray-100_01 border border-solid"
                              />
                              <Input
                                name="icon20pxupdowna"
                                placeholder="Property Type"
                                suffix={
                                  <Img src="images/img_icon_20px_updown_arrow.svg" alt="icon / 20px / up-down arrow" />
                                }
                                className="w-full gap-[35px] font-semibold border-blue_gray-100_01 border border-solid"
                              />
                              <Input
                                name="price"
                                placeholder="Price Range"
                                suffix={
                                  <Img src="images/img_icon_20px_updown_arrow.svg" alt="icon / 20px / up-down arrow" />
                                }
                                className="w-full gap-[35px] font-semibold border-blue_gray-100_01 border border-solid"
                              />
                            </div>
                            <Button size="4xl" className="w-full font-bold">
                              Search
                            </Button>
                          </div>
                        </div>
                      </TabPanel>
                    ))}
                  </Tabs>
                </div>
              </div>
              <div className="flex flex-row justify-start">
                <Img src="images/img_image.png" alt="image_one" className="w-[89%] object-cover" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-row justify-start w-full gap-6 max-w-[1200px]">
            <div className="flex flex-col items-start justify-center w-[49%] gap-[49px] p-[50px] bg-red-100 rounded-[20px]">
              <div className="flex flex-col items-center justify-start mt-[23px] gap-[15px]">
                <Heading size="4xl" as="h2" className="tracking-[-0.72px]">
                  Simple & easy way to find your dream Appointment
                </Heading>
                <Text as="p" className="!text-gray-900">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.{" "}
                </Text>
              </div>
              <Button className="mb-[23px] font-semibold min-w-[138px]">Get Started</Button>
            </div>
            <div className="w-[49%] gap-6 grid-cols-2 grid min-h-[auto]">
              <div className="flex flex-col items-start justify-center w-full gap-5 p-[30px] bg-deep_orange-50 rounded-[20px]">
                <Img src="images/img_search_status.svg" alt="image" className="h-[30px] w-[30px] mt-[7px]" />
                <Heading size="3xl" as="h3" className="mb-[7px] tracking-[-0.56px]">
                  Search <br />
                  your location
                </Heading>
              </div>
              <div className="flex flex-col items-start justify-center w-full gap-5 p-[30px] bg-deep_orange-50 rounded-[20px]">
                <Img src="images/img_eye.svg" alt="eye_one" className="h-[30px] w-[30px] mt-[7px]" />
                <Heading size="3xl" as="h4" className="mb-[7px] tracking-[-0.56px]">
                  Visit <br />
                  Appointment
                </Heading>
              </div>
              <div className="flex flex-col items-start justify-center w-full gap-5 p-[30px] bg-deep_orange-50 rounded-[20px]">
                <Img src="images/img_wallet.svg" alt="wallet_one" className="h-[30px] w-[30px] mt-[7px]" />
                <Heading size="3xl" as="h5" className="mb-[7px] tracking-[-0.56px]">
                  Get your <br />
                  dream house
                </Heading>
              </div>
              <div className="flex flex-col items-start justify-center w-full gap-5 p-[30px] bg-deep_orange-50 rounded-[20px]">
                <Img src="images/img_emoji_happy.svg" alt="emojihappy_one" className="h-[30px] w-[30px] mt-[7px]" />
                <Heading size="3xl" as="h6" className="mb-[7px] tracking-[-0.56px]">
                  Enjoy your <br />
                  Appointment
                </Heading>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full p-[50px] bg-gray-50">
          <div className="flex flex-row justify-center w-full mx-[70px] max-w-[1200px]">
            <div className="flex flex-row w-full gap-[100px]">
              <div className="flex flex-col items-start justify-start w-[19%] gap-[18px]">
                <Button color="white_A700" size="3xl" shape="circle" className="w-[60px]">
                  <Img src="images/img_frame.svg" />
                </Button>
                <div className="flex flex-col items-start justify-start w-full gap-[13px]">
                  <Heading size="5xl" as="h2" className="tracking-[-0.92px]">
                    $15.4M
                  </Heading>
                  <Heading size="lg" as="h3" className="!text-blue_gray-600 tracking-[-0.40px]">
                    Owned from
                    <br />
                    Properties transactions
                  </Heading>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[19%] gap-[18px]">
                <Button color="white_A700" size="3xl" shape="circle" className="w-[60px]">
                  <Img src="images/img_frame_orange_a700.svg" />
                </Button>
                <div className="flex flex-col items-start justify-start w-full gap-[13px]">
                  <Heading size="5xl" as="h4" className="tracking-[-0.92px]">
                    25K+
                  </Heading>
                  <Heading size="lg" as="h5" className="!text-blue_gray-600 tracking-[-0.40px]">
                    Properties for Buy & sell Successfully
                  </Heading>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[19%] gap-[18px]">
                <Button color="white_A700" size="3xl" shape="circle" className="w-[60px]">
                  <Img src="images/img_icon.svg" />
                </Button>
                <div className="flex flex-col items-start justify-start w-full gap-[13px]">
                  <Heading size="5xl" as="h6" className="tracking-[-0.92px]">
                    500
                  </Heading>
                  <Heading size="lg" as="h5" className="!text-blue_gray-600 tracking-[-0.40px]">
                    Daily completed <br />
                    transactions
                  </Heading>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[19%] mb-[26px] gap-[18px]">
                <Button color="white_A700" size="3xl" shape="circle" className="w-[60px]">
                  <Img src="images/img_icon_orange_a700.svg" />
                </Button>
                <div className="flex flex-col items-start justify-start w-full gap-4">
                  <Heading size="5xl" as="h1" className="tracking-[-0.92px]">
                    600+
                  </Heading>
                  <Heading size="lg" as="h5" className="!text-blue_gray-600 tracking-[-0.40px]">
                    Reagular Clients
                  </Heading>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-col items-center justify-start h-[1200px] w-full gap-[53px] max-w-[1200px]">
            <div className="flex flex-row justify-center w-full pt-[5px]">
              <div className="flex flex-col items-center justify-start w-full gap-[17px]">
                <div className="flex flex-row justify-between items-start w-full">
                  <Heading size="4xl" as="h2" className="tracking-[-0.72px]">
                    Featured Properties
                  </Heading>
                  <div className="flex flex-row justify-start items-center mt-[7px] gap-2">
                    <Heading size="md" as="h3" className="mt-0.5 !text-orange-A700">
                      Explore All
                    </Heading>
                    <Img src="images/img_icon_24px_v.svg" alt="icon24pxv_one" className="h-6 w-6" />
                  </div>
                </div>
                <div className="flex flex-row justify-start w-full">
                  <Button size="xs" shape="square" className="text-gray-900 font-bold min-w-[159px]">
                    Resident Property
                  </Button>
                  <Button size="xs" shape="square" className="ml-[143px] text-gray-400 font-bold min-w-[186px]">
                    Commercial Property
                  </Button>
                  <Button size="xs" shape="square" className="ml-[116px] text-gray-400 font-bold min-w-[164px]">
                    Industrial Property
                  </Button>
                  <Button size="xs" shape="square" className="ml-[137px] text-gray-400 font-bold min-w-[180px]">
                    Agriculture Property
                  </Button>
                </div>
              </div>
            </div>
            <div className="justify-center w-full gap-6 grid-cols-3 grid min-h-[auto]">
              <LandingPageCard className="flex flex-col items-center justify-start w-full" />
              <LandingPageCard
                imageOne="images/img_image_1.png"
                className="flex flex-col items-center justify-start w-full"
              />
              <LandingPageCard
                imageOne="images/img_image_2.png"
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
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full px-14 py-[120px] bg-gray-50_01">
          <div className="flex flex-col items-center justify-start w-full gap-[150px] max-w-[1200px]">
            <div className="flex flex-row justify-between items-center w-full">
              <div className="flex flex-col items-start justify-start w-[47%] gap-[58px]">
                <div className="flex flex-col items-center justify-start gap-[19px]">
                  <Heading size="4xl" as="h2" className="tracking-[-0.72px]">
                    Simple & easy way to find your dream Appointment
                  </Heading>
                  <Text as="p">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. In a free hour, when our
                    power of choice is untrammelled and when nothing prevents our being able to do what we like best,
                    every pleasure is to be welcomed.
                  </Text>
                </div>
                <Button className="font-semibold min-w-[138px]">Get Started</Button>
              </div>
              <div className="flex flex-row justify-start w-[47%] gap-5">
                <div className="flex flex-col items-center justify-start w-[49%] gap-4">
                  <Img
                    src="images/img_rectangle_18.png"
                    alt="image_two"
                    className="w-full object-cover rounded-[10px]"
                  />
                  <Img
                    src="images/img_rectangle_21.png"
                    alt="image_three"
                    className="w-full object-cover rounded-[10px]"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-[49%] gap-4">
                  <Img
                    src="images/img_rectangle_19.png"
                    alt="image_four"
                    className="w-full object-cover rounded-[10px]"
                  />
                  <Img
                    src="images/img_rectangle_20.png"
                    alt="image_five"
                    className="w-full object-cover rounded-[10px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center w-full">
              <Img
                src="images/img_rectangle_20_589x521.png"
                alt="image_six"
                className="w-[44%] object-cover rounded-[10px]"
              />
              <div className="flex flex-col items-start justify-start w-[44%] gap-[60px]">
                <div className="flex flex-col items-center justify-start w-full gap-[18px]">
                  <div className="flex flex-col items-center justify-start w-full gap-[19px]">
                    <Heading size="4xl" as="h3" className="tracking-[-0.72px]">
                      Best rated host on popular rental sites
                    </Heading>
                    <Text as="p">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. In a free hour, when
                      our power of choice is untrammelled.
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full gap-3">
                    <div className="flex flex-row justify-start items-center w-full gap-3.5 py-0.5">
                      <Img src="images/img_icon_check.svg" alt="iconcheck_one" className="h-6 w-6" />
                      <Heading size="md" as="h4" className="!font-semibold">
                        Find excellent deals
                      </Heading>
                    </div>
                    <div className="flex flex-row justify-start items-center w-full gap-3.5">
                      <Img src="images/img_icon_check.svg" alt="iconcheck_three" className="h-6 w-6" />
                      <Heading size="md" as="h5" className="mt-[5px] !font-semibold">
                        Friendly host & Fast support
                      </Heading>
                    </div>
                    <div className="flex flex-row justify-start items-center w-full gap-3.5">
                      <Img src="images/img_icon_check.svg" alt="iconcheck_five" className="h-6 w-6" />
                      <Heading size="md" as="h6" className="mt-[5px] !font-semibold">
                        Secure payment system
                      </Heading>
                    </div>
                  </div>
                </div>
                <Button className="font-semibold min-w-[134px]">Learn more</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full gap-6">
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-row justify-center w-full max-w-[1010px]">
              <div className="flex flex-row justify-between w-full">
                <Img
                  src="images/img_rectangle_5591.png"
                  alt="image_seven"
                  className="w-[46%] object-cover rounded-lg"
                />
                <div className="flex flex-row justify-center w-[46%]">
                  <div className="flex flex-col items-center justify-start w-full gap-[30px]">
                    <div className="flex flex-row justify-between items-center w-full">
                      <div className="flex flex-col items-start justify-center gap-[5px]">
                        <Heading size="3xl" as="h2" className="mt-0.5 tracking-[-0.56px]">
                          Taylor Wilson
                        </Heading>
                        <Heading size="md" as="h3" className="!font-semibold">
                          Product Manager - Static Mania
                        </Heading>
                      </div>
                      <Img src="images/img_shape.svg" alt="shape_one" className="h-[51px]" />
                    </div>
                    <Heading size="2xl" as="h4" className="!text-gray-700 !font-semibold !leading-[165%]">
                      Eget eu massa et consectetur. Mauris donec. Leo a, id sed duis proin sodales. Turpis viverra diam
                      porttitor mattis morbi ac amet. Euismod commodo. We get you customer relationships that last.{" "}
                    </Heading>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-end w-full pl-14 pr-[215px] gap-[270px]">
            <div className="flex flex-row justify-start items-center w-[10%] gap-2">
              <Img src="images/img_icon_24px_v_gray_600.svg" alt="icon24pxv_three" className="h-6 w-6" />
              <Heading size="md" as="h2" className="!text-gray-600">
                Previews
              </Heading>
            </div>
            <div className="flex flex-row justify-start items-center w-[7%] gap-2">
              <Heading size="md" as="h3" className="mt-px !text-orange-A700">
                Next
              </Heading>
              <Img src="images/img_icon_24px_v.svg" alt="icon24pxv_five" className="h-6 w-6" />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full px-14 py-[120px] bg-gray-900">
          <div className="flex flex-col items-center justify-start w-full gap-[118px] max-w-[1200px]">
            <div className="flex flex-col items-center justify-start w-full gap-[60px]">
              <div className="flex flex-row justify-between items-center w-full">
                <Heading size="4xl" as="h2" className="!text-white-A700 tracking-[-0.72px]">
                  News & Consult
                </Heading>
                <div className="flex flex-row justify-start items-center gap-2">
                  <Heading size="md" as="h3" className="mt-0.5 !text-orange-A700">
                    Explore All
                  </Heading>
                  <Img src="images/img_icon_24px_v.svg" alt="icon24pxv_seven" className="h-6 w-6" />
                </div>
              </div>
              <div className="flex flex-row w-full gap-6">
                <div className="flex flex-col items-center justify-start w-[32%] gap-6">
                  <Img src="images/img_image_350x384.png" alt="image" className="w-full object-cover rounded-[10px]" />
                  <div className="flex flex-col items-center justify-start w-full gap-[23px]">
                    <Heading size="2xl" as="h4" className="!text-white-A700 tracking-[-0.48px]">
                      9 Easy-to-Ambitious DIY Projects to Improve Your Home
                    </Heading>
                    <div className="flex flex-row justify-start items-center w-full gap-2">
                      <Heading size="md" as="h5" className="mt-px !text-deep_orange-400">
                        Read the Article
                      </Heading>
                      <Img src="images/img_icon_24px_v_deep_orange_400.svg" alt="read_the" className="h-6 w-6" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[32%] gap-6">
                  <Img src="images/img_image_6.png" alt="image_one" className="w-full object-cover rounded-[10px]" />
                  <div className="flex flex-col items-center justify-start w-full gap-[23px]">
                    <Heading size="2xl" as="h6" className="!text-white-A700 tracking-[-0.48px]">
                      Serie Shophouse Launch In July, Opportunity For Investors
                    </Heading>
                    <div className="flex flex-row justify-start items-center w-full gap-2">
                      <Heading size="md" as="h6" className="mt-px !text-deep_orange-400">
                        Read the Article
                      </Heading>
                      <Img src="images/img_icon_24px_v_deep_orange_400.svg" alt="icon24pxv_one" className="h-6 w-6" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[32%] gap-6">
                  <Img src="images/img_image_7.png" alt="image_one" className="w-full object-cover rounded-[10px]" />
                  <div className="flex flex-col items-center justify-start w-full gap-[23px]">
                    <Heading size="2xl" as="h4" className="!text-white-A700 tracking-[-0.48px]">
                      Looking for a New Place? Use This Time to Create Your Wishlist
                    </Heading>
                    <div className="flex flex-row justify-start items-center w-full gap-2">
                      <Heading size="md" as="h6" className="mt-px !text-deep_orange-400">
                        Read the Article
                      </Heading>
                      <Img src="images/img_icon_24px_v_deep_orange_400.svg" alt="icon24pxv_one" className="h-6 w-6" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full gap-[30px] p-10 bg-gray-400_01 rounded-[10px]">
              <div className="flex flex-col items-center justify-start w-[54%] pt-[3px] gap-[5px]">
                <Heading size="3xl" as="h3" className="tracking-[-0.56px] text-center">
                  For Recent Update, News.
                </Heading>
                <Text as="p" className="!text-gray-900 text-center">
                  We helps businesses customize, automate and scale up their ad production and delivery.
                </Text>
              </div>
              <div className="flex flex-row justify-start w-[54%] gap-2">
                <Input
                  color="gray_50_02"
                  size="sm"
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  className="w-[78%] font-semibold"
                />
                <Button className="font-semibold min-w-[126px]">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
        <footer className="flex justify-center items-center w-full px-14 py-[74px] bg-white-A700">
          <div className="flex flex-col items-center justify-center w-full mt-[5px] gap-[115px] mx-auto max-w-[1200px]">
            <div className="flex flex-row justify-start items-center w-full gap-px">
              <div className="flex flex-col items-center justify-start w-[29%] gap-[43px]">
                <div className="flex flex-row justify-start items-start w-full gap-[11px]">
                  <Img src="images/img_real_estate_1.svg" alt="realestateone" className="h-10 w-10" />
                  <Text size="md" as="p" className="mt-[5px] !text-orange-A700 !font-markoone">
                    Relasto
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-full gap-7">
                  <Heading as="h6" className="!leading-[160%]">
                    59 Bervely Hill Ave, Brooklyn Town,
                    <br />
                    New York, NY 5630, CA, US
                  </Heading>
                  <div className="flex flex-col items-start justify-center gap-2">
                    <Heading as="h6" className="mt-px">
                      +(123) 456-7890
                    </Heading>
                    <Heading as="h6">info@mail.com</Heading>
                  </div>
                  <div className="flex flex-row justify-start w-full gap-3">
                    <div className="flex flex-col items-center justify-start h-[30px] w-[30px]">
                      <Img src="images/img_icon_facebook.svg" alt="iconfacebook" className="h-[30px] w-[30px]" />
                    </div>
                    <div className="flex flex-col items-center justify-start h-[30px] w-[30px]">
                      <Img src="images/img_icon_twitter.svg" alt="icontwitter_one" className="h-[30px] w-[30px]" />
                    </div>
                    <Img src="images/img_icon_instragram.svg" alt="iconinstragram" className="h-[30px] w-[30px]" />
                    <Img src="images/img_icon_linked_in.svg" alt="iconlinkedin" className="h-[30px] w-[30px]" />
                    <div className="flex flex-col items-center justify-start h-[30px] w-[30px]">
                      <Img src="images/img_icon_youtube.svg" alt="iconyoutube_one" className="h-[30px] w-[30px]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center w-[72%]">
                <div className="flex flex-col items-start justify-start w-[19%] gap-[15px]">
                  <Heading size="md" as="h6">
                    Features
                  </Heading>
                  <div className="flex flex-col items-start justify-start w-full gap-[15px]">
                    <Heading as="h6">Home v1</Heading>
                    <Heading as="h6">Home v2</Heading>
                    <Heading as="h6">About</Heading>
                    <Heading as="h6">Contact</Heading>
                    <Heading as="h6">Search</Heading>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[19%] gap-[15px]">
                  <Heading size="md" as="h6">
                    Information
                  </Heading>
                  <div className="flex flex-col items-start justify-start w-full pt-[3px] gap-[15px]">
                    <Heading as="h6">Listing v1</Heading>
                    <Heading as="h6">Listing v2</Heading>
                    <Heading as="h6">Property Details</Heading>
                    <Heading as="h6">
                      Agent List
                      <br />
                    </Heading>
                    <Heading as="h6">Agent Profile</Heading>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[19%] gap-[15px]">
                  <Heading size="md" as="h6">
                    Documentation{" "}
                  </Heading>
                  <div className="flex flex-col items-start justify-center w-full gap-[15px]">
                    <Heading as="h6" className="mt-0.5">
                      Blog
                    </Heading>
                    <Heading as="h6">FAQ</Heading>
                    <a href="#">
                      <Heading as="h6">
                        Privacy Policy
                        <br />
                      </Heading>
                    </a>
                    <Heading as="h6">License</Heading>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[19%] gap-[15px]">
                  <Heading size="md" as="h6">
                    Others
                  </Heading>
                  <div className="flex flex-col items-start justify-center w-full gap-[15px]">
                    <a href="#" className="mt-0.5">
                      <Heading as="h6">Log in</Heading>
                    </a>
                    <Heading as="h6">Enter OTP</Heading>
                    <Heading as="h6">New Password</Heading>
                    <a href="#">
                      <Heading as="h6">Reset Password</Heading>
                    </a>
                    <a href="#">
                      <Heading as="h6">Create Account</Heading>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <Heading as="h6">© 2022. All rights reserved.</Heading>
          </div>
        </footer>
      </div>
    </>
  );
}
