import React from "react";
import { Helmet } from "react-helmet";
import { Button, Input, Text, Heading, Img } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function AboutUsPage() {
  return (
    <>
      <Helmet>
        <title>crowd_funding_draft1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[100px] bg-white-A700">
        <Header className="flex justify-center items-center w-full p-[19px] bg-white-A700" />
        <div className="flex flex-col items-center justify-start w-full gap-[100px]">
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-center justify-start w-full gap-[38px] max-w-[1200px]">
              <div className="flex flex-col items-center justify-start w-full gap-4">
                <Heading size="6xl" as="h1" className="tracking-[-1.08px] text-center">
                  Reimagining real estate to <br />
                  make it easier to unlock.
                </Heading>
                <Text as="p" className="text-center">
                  On the other hand, we denounce with righteous indignation and dislike men who <br />
                  are so beguiled and demoralized by the charms of pleasure of the moment, <br />
                  so blinded by desire, that they cannot foresee the pain and trouble.
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-6">
                <div className="flex flex-row justify-start w-full gap-6">
                  <Img
                    src="images/img_rectangle_5592.png"
                    alt="image"
                    className="w-[66%] object-cover rounded-[10px]"
                  />
                  <Img
                    src="images/img_rectangle_5593.png"
                    alt="image_one"
                    className="w-[32%] object-cover rounded-[10px]"
                  />
                </div>
                <div className="flex flex-row justify-start w-full gap-6">
                  <Img
                    src="images/img_rectangle_5595.png"
                    alt="image_two"
                    className="w-[32%] object-cover rounded-[10px]"
                  />
                  <Img
                    src="images/img_rectangle_5594.png"
                    alt="image_three"
                    className="w-[66%] object-cover rounded-[10px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row w-full gap-[100px] p-[50px] bg-gray-50">
            <div className="flex flex-col items-start justify-start w-[17%] ml-[70px] gap-[18px]">
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
            <div className="flex flex-col items-start justify-start w-[17%] gap-[18px]">
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
            <div className="flex flex-col items-start justify-start w-[17%] gap-[18px]">
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
            <div className="flex flex-col items-start justify-start w-[17%] mb-[26px] mr-[70px] gap-[18px]">
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
          <div className="flex flex-row justify-start w-full pl-[120px] pr-14">
            <div className="flex flex-row justify-between items-center w-full mx-auto max-w-[1147px]">
              <div className="flex flex-col items-center justify-start w-[47%] gap-14">
                <div className="flex flex-col items-start justify-start w-full gap-[18px]">
                  <Heading size="4xl" as="h2" className="tracking-[-0.72px]">
                    A note from our founders.
                  </Heading>
                  <Text as="p">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. In a free hour,
                  </Text>
                </div>
                <div className="flex flex-col w-full gap-[30px]">
                  <div className="flex flex-row justify-start items-start w-full gap-[26px]">
                    <div className="flex flex-col items-center justify-start h-[35px] w-[35px]">
                      <Heading
                        size="lg"
                        as="h3"
                        className="flex justify-center items-center h-[35px] tracking-[-0.40px] text-center !font-extrabold border-gray-900 border-2 border-solid rounded-[17px]"
                      >
                        1
                      </Heading>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[89%] gap-4">
                      <Heading size="xl" as="h4" className="tracking-[-0.44px]">
                        It all started in 1995
                      </Heading>
                      <Text as="p">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. In a free hour, On
                        the other hand, we denounce with righteous indignation and dislike men who are so beguiled and
                        demoralized by the charms of pleasure of the moment.
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row justify-start items-start w-full gap-[26px]">
                    <div className="flex flex-col items-center justify-start h-[35px] w-[35px]">
                      <Heading
                        size="lg"
                        as="h5"
                        className="flex justify-center items-center h-[35px] tracking-[-0.40px] text-center !font-extrabold border-gray-900 border-2 border-solid rounded-[17px]"
                      >
                        2
                      </Heading>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[89%] gap-4">
                      <Heading size="xl" as="h6" className="tracking-[-0.44px]">
                        Donate launches in 2007
                      </Heading>
                      <Text as="p">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. In a free hour, On
                        the other hand, we denounce with righteous indignation and dislike men who are so beguiled and
                        demoralized by the charms of pleasure of the moment.
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row justify-start items-start w-full gap-[26px]">
                    <div className="flex flex-col items-center justify-start h-[35px] w-[35px]">
                      <Heading
                        size="lg"
                        as="h5"
                        className="flex justify-center items-center h-[35px] tracking-[-0.40px] text-center !font-extrabold border-gray-900 border-2 border-solid rounded-[17px]"
                      >
                        3
                      </Heading>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[89%] pt-[3px] gap-[13px]">
                      <Heading size="xl" as="h5" className="tracking-[-0.44px]">
                        Relasto holds its initial public offering in 2008
                      </Heading>
                      <Text as="p">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. In a free hour, On
                        the other hand, we denounce with righteous indignation and dislike men who are so beguiled and
                        demoralized by the charms of pleasure of the moment.
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <Img
                src="images/img_rectangle_20_589x531.png"
                alt="image_four"
                className="w-[47%] object-cover rounded-[10px]"
              />
            </div>
          </div>
          <div className="flex flex-row justify-end w-full pl-14 pr-[120px]">
            <div className="flex flex-row justify-between items-center w-full mx-auto max-w-[1150px]">
              <Img
                src="images/img_rectangle_20_589x496.png"
                alt="image_five"
                className="w-[44%] object-cover rounded-[10px]"
              />
              <div className="flex flex-col items-center justify-start w-[44%] gap-14">
                <div className="flex flex-col items-start justify-start w-full pt-[5px] gap-3.5">
                  <Heading size="4xl" as="h2" className="tracking-[-0.72px]">
                    Our vision is simple.
                  </Heading>
                  <Text as="p">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. In a free hour, On the
                    other hand, we denounce with righteous indignation and dislike men who are so beguiled and
                    demoralized by the charms of pleasure of the moment.
                    <br />
                    In a free hour, On the other hand, we denounce with righteous indignation and dislike men .
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-center w-full gap-[9px]">
                  <Heading size="lg" as="h3" className="tracking-[-0.40px]">
                    Kausar Pial
                  </Heading>
                  <Heading size="md" as="h4" className="mb-0.5 !text-gray-700 !font-semibold">
                    CEO at Static Mania
                  </Heading>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-center justify-start w-full gap-[58px] max-w-[1200px]">
              <Heading size="4xl" as="h2" className="tracking-[-0.72px] text-center">
                Relasto Team members
              </Heading>
              <div className="justify-center w-full gap-6 grid-cols-4 grid min-h-[auto]">
                <div className="flex flex-col items-center justify-start w-full gap-4">
                  <Img
                    src="images/img_rectangle_5596.png"
                    alt="kausar_pial_one"
                    className="w-[282px] object-cover rounded-[10px]"
                  />
                  <div className="flex flex-col items-start justify-center w-full gap-[3px]">
                    <Heading size="lg" as="h3" className="tracking-[-0.40px]">
                      Kausar Pial
                    </Heading>
                    <Text as="p" className="mb-0.5">
                      CEO
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-4">
                  <Img
                    src="images/img_rectangle_5597.png"
                    alt="image"
                    className="w-[282px] object-cover rounded-[10px]"
                  />
                  <div className="flex flex-col items-start justify-start w-full gap-px py-0.5">
                    <Heading size="lg" as="h4" className="tracking-[-0.40px]">
                      Floyd Miles
                    </Heading>
                    <Text as="p">President of Sales</Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-4">
                  <Img
                    src="images/img_rectangle_5598.png"
                    alt="image"
                    className="w-[282px] object-cover rounded-[10px]"
                  />
                  <div className="flex flex-col items-start justify-start w-full gap-[5px]">
                    <Heading size="lg" as="h5" className="tracking-[-0.40px]">
                      Darlene Robertson
                    </Heading>
                    <Text as="p">Marketing Coordinator</Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-4">
                  <Img
                    src="images/img_rectangle_5599.png"
                    alt="image"
                    className="w-[282px] object-cover rounded-[10px]"
                  />
                  <div className="flex flex-col items-start justify-center w-full gap-[3px]">
                    <Heading size="lg" as="h6" className="mt-0.5 tracking-[-0.40px]">
                      Guy Hawkins
                    </Heading>
                    <Text as="p">Marketing Coordinator</Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-4">
                  <Img
                    src="images/img_rectangle_5600.png"
                    alt="image"
                    className="w-[282px] object-cover rounded-[10px]"
                  />
                  <div className="flex flex-col items-start justify-start w-full gap-[5px]">
                    <Heading size="lg" as="h5" className="tracking-[-0.40px]">
                      Jerome Bell
                    </Heading>
                    <Text as="p">Marketing Coordinator</Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-4">
                  <Img
                    src="images/img_rectangle_5601.png"
                    alt="image"
                    className="w-[282px] object-cover rounded-[10px]"
                  />
                  <div className="flex flex-col items-start justify-center w-full gap-[3px]">
                    <Heading size="lg" as="h5" className="mt-0.5 tracking-[-0.40px]">
                      Ralph Edwards
                    </Heading>
                    <Text as="p">Marketing Coordinator</Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-4">
                  <Img
                    src="images/img_rectangle_5602.png"
                    alt="image"
                    className="w-[282px] object-cover rounded-[10px]"
                  />
                  <div className="flex flex-col items-start justify-center w-full gap-[3px]">
                    <Heading size="lg" as="h5" className="mt-0.5 tracking-[-0.40px]">
                      Arlene McCoy
                    </Heading>
                    <Text as="p">Marketing Coordinator</Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-4">
                  <Img
                    src="images/img_rectangle_5603.png"
                    alt="image"
                    className="w-[282px] object-cover rounded-[10px]"
                  />
                  <div className="flex flex-col items-start justify-start w-full gap-[5px]">
                    <Heading size="lg" as="h5" className="tracking-[-0.40px]">
                      Devon Lane
                    </Heading>
                    <Text as="p">Marketing Coordinator</Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-4">
                  <Img
                    src="images/img_rectangle_5604.png"
                    alt="image"
                    className="w-[282px] object-cover rounded-[10px]"
                  />
                  <div className="flex flex-col items-start justify-center w-full gap-[3px]">
                    <Heading size="lg" as="h5" className="mt-0.5 tracking-[-0.40px]">
                      Courtney Henry
                    </Heading>
                    <Text as="p">Marketing Coordinator</Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-4">
                  <Img
                    src="images/img_rectangle_5605.png"
                    alt="image"
                    className="w-[282px] object-cover rounded-[10px]"
                  />
                  <div className="flex flex-col items-start justify-center w-full gap-[3px]">
                    <Heading size="lg" as="h5" className="mt-0.5 tracking-[-0.40px]">
                      Bessie Cooper
                    </Heading>
                    <Text as="p">Marketing Coordinator</Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-4">
                  <Img
                    src="images/img_rectangle_5606.png"
                    alt="image"
                    className="w-[282px] object-cover rounded-[10px]"
                  />
                  <div className="flex flex-col items-start justify-center w-full gap-[3px]">
                    <Heading size="lg" as="h5" className="mt-0.5 tracking-[-0.40px]">
                      Cody Fisher
                    </Heading>
                    <Text as="p">Marketing Coordinator</Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-4">
                  <Img
                    src="images/img_rectangle_5607.png"
                    alt="image"
                    className="w-[282px] object-cover rounded-[10px]"
                  />
                  <div className="flex flex-col items-start justify-center w-full gap-[3px]">
                    <Heading size="lg" as="h5" className="mt-0.5 tracking-[-0.40px]">
                      Cody Fisher
                    </Heading>
                    <Text as="p">Marketing Coordinator</Text>
                  </div>
                </div>
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
                    <Img src="images/img_icon_24px_v.svg" alt="icon24pxv_one" className="h-6 w-6" />
                  </div>
                </div>
                <div className="flex flex-row w-full gap-6">
                  <div className="flex flex-col items-center justify-start w-[32%] gap-6">
                    <Img
                      src="images/img_image_350x384.png"
                      alt="image"
                      className="w-full object-cover rounded-[10px]"
                    />
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
                  <Heading size="3xl" as="h3" className="tracking-[-0.56px]">
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
        </div>
        <Footer className="flex justify-center items-center w-full pl-[74px] pr-14 gap-[115px] py-[74px] bg-white-A700" />
      </div>
    </>
  );
}
