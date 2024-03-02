import React from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, Button, TextArea, Input, Text } from "../../components";
import Footer from "../../components/Footer";
import Header1 from "../../components/Header1";

export default function ContactPagePage() {
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
            <div className="flex flex-col items-center justify-start w-full gap-11 max-w-[1200px]">
              <div className="flex flex-col items-center justify-start w-full pt-0.5 gap-[15px]">
                <Heading size="6xl" as="h1" className="tracking-[-1.08px] text-center">
                  Get in touch
                </Heading>
                <Text as="p" className="!text-gray-600_02 text-center">
                  On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and
                  demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee
                  the pain and trouble.
                </Text>
              </div>
              <div className="flex flex-row justify-start items-center w-full gap-[50px] p-[23px] border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]">
                <div className="flex flex-col items-center justify-start w-[44%] ml-[25px] gap-10">
                  <div className="flex flex-col items-start justify-start w-full pt-[3px] gap-[19px]">
                    <Heading size="3xl" as="h2" className="tracking-[-0.56px]">
                      Send a message
                    </Heading>
                    <div className="flex flex-col items-center justify-start w-full gap-3">
                      <Input
                        type="text"
                        name="message"
                        placeholder="Full Name"
                        prefix={<Img src="images/img_icon_24px_user.svg" alt="icon / 24px / user" />}
                        className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid"
                      />
                      <Input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        prefix={<Img src="images/img_icon_24px_email.svg" alt="icon / 24px / email" />}
                        className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid"
                      />
                      <Input
                        type="number"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        prefix={<Img src="images/img_icon_20px_call.svg" alt="icon / 24px / call" />}
                        className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid"
                      />
                      <TextArea
                        name="inputbox_one"
                        placeholder="Message"
                        className="w-full text-gray-600_02 font-semibold"
                      />
                    </div>
                  </div>
                  <Button size="2xl" className="w-full font-semibold">
                    Send Request
                  </Button>
                </div>
                <div className="h-[534px] w-px my-[25px] bg-blue_gray-100_01" />
                <div className="flex flex-col items-center justify-start w-[46%] gap-10">
                  <div className="flex flex-col items-center justify-start w-[96%] gap-4">
                    <div className="flex flex-col items-start justify-start w-full gap-[3px]">
                      <Heading size="lg" as="h3" className="tracking-[-0.40px]">
                        Office Address
                      </Heading>
                      <Heading size="md" as="h4" className="!text-gray-600_02 !font-semibold">
                        1421 San Pedro St, Los Angeles, <br />
                        CA 90015
                      </Heading>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full gap-2.5">
                      <div className="flex flex-row justify-start items-center w-full gap-[13px] py-0.5">
                        <Img src="images/img_icon_20px_call.svg" alt="icon24pxcall" className="h-6 w-6" />
                        <Heading size="md" as="h5" className="!text-gray-600_02 !font-semibold">
                          (123) 456-7890
                        </Heading>
                      </div>
                      <div className="flex flex-row justify-start items-center w-full gap-3 py-0.5">
                        <Img src="images/img_icon_24px_email.svg" alt="icon24pxemail" className="h-6 w-6" />
                        <Heading size="md" as="h6" className="mt-0.5 !text-gray-600_02 !font-semibold">
                          info@mail.com
                        </Heading>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full gap-3">
                    <Heading size="lg" as="h5" className="tracking-[-0.40px]">
                      Social
                    </Heading>
                    <div className="flex flex-row justify-start gap-4">
                      <Img
                        src="images/img_social_icon_facebook.svg"
                        alt="socialicon_one"
                        className="h-[30px] w-[30px]"
                      />
                      <Img src="images/img_social_icon_linkedin.svg" alt="socialicon" className="h-[30px] w-[30px]" />
                      <Img
                        src="images/img_social_icon_twitter.svg"
                        alt="socialicon_five"
                        className="h-[30px] w-[30px]"
                      />
                      <Img src="images/img_social_icon_youtube.svg" alt="socialicon" className="h-[30px] w-[30px]" />
                      <Img src="images/img_social_icon_rss.svg" alt="socialiconrss" className="h-[30px] w-[30px]" />
                    </div>
                  </div>
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
