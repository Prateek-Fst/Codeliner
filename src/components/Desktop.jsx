import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import Nav from "./Nav";
import Logo from "./Logo";
import PropTypes from "prop-types";

const Desktop = ({ className = "" }) => {
  const [logoItems] = useState([
    {
      name1: "Shell",
      vector: "/Vector.svg",
      sHELLS: "SHELLS",
    },
    {
      name1: "SmartFinder",
      vector: "/Group-45.svg",
      sHELLS: "SmartFinder",
    },
    {
      name1: "Zoomerr",
      vector: "/Vector1.svg",
      sHELLS: "Zoomerr",
    },
    {
      name1: "ArtVenue",
      vector: "/Group-46.svg",
      sHELLS: "ArtVenue",
    },
    {
      name1: "Kontrastr",
      vector: "/Group-47.svg",
      sHELLS: "kontrastr",
    },
    {
      name1: "Waves",
      vector: "/Vector2.svg",
      sHELLS: "SHELLS",
    },
  ]);
  return (
    <section
      className={`w-[1440px] h-[811px] bg-black overflow-hidden shrink-0 flex flex-col items-start !pt-[212px] !pb-[100.5px] !pl-20 !pr-[60px] box-border relative isolate gap-[99.1px] max-w-full text-left text-base text-white font-[Archivo] mq800:gap-[50px] mq800:!pl-10 mq800:!pr-[30px] mq800:box-border mq1125:!pt-[138px] mq1125:!pb-[65px] mq1125:box-border mq450:gap-[25px] mq450:!pt-[90px] mq450:!pb-[42px] mq450:box-border mq1350:h-auto ${className}`}
    >
      <Box className="w-[398.9px] h-[398.9px] absolute !!m-[0 important] top-[204.5px] left-[873.1px] [filter:blur(100px)] rounded-[50%] [background:linear-gradient(103.43deg,_rgba(0,_180,_253,_0.5),_rgba(0,_58,_206,_0.5))] shrink-0" />
      <section className="w-[1300px] flex items-end justify-between gap-5 max-w-full shrink-0 text-left text-[67px] text-white font-[Archivo] mq1350:flex-wrap mq1350:gap-5">
        <Box className="flex flex-col items-start justify-end !pt-0 !pb-[25px] !pl-0 !pr-0 box-border max-w-full mq800:min-w-full mq1350:flex-1">
          <Box className="flex flex-col items-start gap-[52px] mq800:gap-[26px]">
            <Box className="flex flex-col items-start gap-4">
              <Typography
                className="!m-0 w-[607.8px] relative inline-block mq800:text-[54px] mq800:leading-[64px] mq450:text-[40px] mq450:leading-[48px]"
                variant="inherit"
                variantMapping={{ inherit: "h1" }}
                sx={{
                  fontWeight: "500",
                  lineHeight: "120%",
                  letterSpacing: "-0.01em",
                }}
              >
                The new foundation of modern banking
              </Typography>
              <div className="w-[356.2px] relative text-base leading-[130%] inline-block opacity-[0.8]">
                We drive innovation and growth, provide seamless customer
                experience and operational excellence
              </div>
            </Box>
            <Box className="flex items-start gap-5">
              <Button
                className="!pt-[15px] !pb-[15px] !pl-[51px] !pr-[51px]"
                disableElevation
                variant="contained"
                sx={{
                  color: "#fff",
                  fontSize: "15",
                  background: "linear-gradient(106.53deg, #00b4fd, #003ace)",
                  borderRadius: "10px",
                  "&:hover": {
                    background: "linear-gradient(106.53deg, #00b4fd, #003ace)",
                  },
                }}
              >
                REQUEST DEMO
              </Button>
              <Button
                className="!pt-[15px] !pb-[15px] !pl-[59px] !pr-[59px]"
                disableElevation
                variant="outlined"
                sx={{
                  color: "#e9f4f9",
                  fontSize: "15",
                  borderColor: "#e9f4f9",
                  borderRadius: "10px",
                  "&:hover": { borderColor: "#e9f4f9" },
                }}
              >
                Contact Us
              </Button>
            </Box>
          </Box>
        </Box>
        <Box className="w-[562px] flex flex-col items-end !pt-[23px] !pb-[34px] !pl-px !pr-px box-border relative isolate max-w-full z-[1] text-[8.6px] text-[#0b0b0b] font-[Gilroy-Bold] mq800:min-w-full mq1350:flex-1">
          <img
            className="w-[362.6px] h-[calc(100%_-_0.3px)] absolute !!m-[0 important] top-[0.2px] bottom-[0.1px] left-[87.1px] rounded-[31px] max-h-full object-cover shrink-0"
            alt=""
            src="/Pexels-Photo-by-Andrea-Piacquadio@2x.png"
          />
          <Box className="w-52 h-[177px] shadow-[0px_0px_27.6px_8.92px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(12px)] rounded-xl bg-[rgba(255,255,255,0.4)] overflow-hidden shrink-0 flex flex-col items-end !pt-[4.5px] !pb-[4.5px] !pl-1 !pr-1 box-border gap-[10.1px] z-[1]">
            <Box className="rounded-[11px] bg-[rgba(255,255,255,0.7)] overflow-hidden flex flex-col items-start !pt-[21px] !pb-[4.8px] !pl-[7px] !pr-[7px] gap-[12.6px] shrink-0 text-[7.5px] text-gray-100 font-[Inter]">
              <Box className="w-[184px] flex items-start justify-between gap-5 text-[8.6px]">
                <Box className="flex items-start gap-[6.5px]">
                  <img
                    className="h-[25.8px] w-[25.8px] relative rounded-[8.6px] object-cover"
                    alt=""
                    src="/Representation@2x.png"
                  />
                  <Box className="flex flex-col items-start !pt-[1.6px] !pb-0 !pl-0 !pr-0">
                    <Box className="flex flex-col items-start gap-[4.5px]">
                      <Typography
                        className="w-[45px] h-2.5 relative inline-block"
                        variant="inherit"
                        variantMapping={{ inherit: "b" }}
                        sx={{ fontWeight: "700" }}
                      >
                        Toni Kross
                      </Typography>
                      <div className="w-[45px] h-2 relative text-[6.5px] text-[rgba(13,13,12,0.6)] inline-block">
                        Good Morning
                      </div>
                    </Box>
                  </Box>
                </Box>
                <Box className="flex flex-col items-start !pt-[4.3px] !pb-0 !pl-0 !pr-0">
                  <img
                    className="w-[17.2px] h-[17.2px] relative"
                    alt=""
                    src="/Group-5.svg"
                  />
                </Box>
              </Box>
              <Box className="flex flex-col items-start !pt-0 !pb-[0.5px] !pl-0 !pr-0 gap-[5.9px] text-[rgba(29,29,29,0.6)] font-[Gilroy-Regular]">
                <Box className="h-[36.1px] flex flex-col items-start !pt-0 !pb-[24.1px] !pl-0 !pr-0 box-border gap-[4.2px]">
                  <div className="w-12 h-3 relative leading-[11.8px] inline-block shrink-0">
                    Total balance
                  </div>
                  <div className="w-[109px] h-5 relative text-[15.1px] leading-[19.4px] font-[Gilroy-Bold] text-[#081e69] inline-block shrink-0">
                    $42,295.00 USD
                  </div>
                </Box>
                <Box className="w-[184.6px] h-[0.5px] relative border-white1 border-solid border-t-[0.5px] box-border opacity-[0.24]" />
              </Box>
              <Box className="w-[184px] flex items-start justify-between gap-5 text-center font-[Gilroy-Bold]">
                <Box className="flex flex-col items-start gap-[4.3px]">
                  <Box className="flex items-start !pt-0 !pb-0 !pl-[7px] !pr-2">
                    <Box className="[backdrop-filter:blur(53.8px)] rounded-[9px] bg-[rgba(255,250,250,0.2)] flex items-start !pt-[9.2px] !pb-[9.3px] !pl-[9px] !pr-[9px]">
                      <Box className="h-[32.3px] w-[32.3px] relative [backdrop-filter:blur(53.8px)] rounded-[9px] bg-[rgba(255,250,250,0.2)] hidden shrink-0" />
                      <img
                        className="h-[13.8px] w-[13.8px] relative z-[1] shrink-0"
                        alt=""
                        src="/transfer-money-1.svg"
                      />
                    </Box>
                  </Box>
                  <div className="w-12 h-3 relative leading-[11.8px] inline-block">
                    Fund Transfer
                  </div>
                </Box>
                <Box className="flex flex-col items-start gap-[4.3px]">
                  <Box className="flex items-start !pt-0 !pb-0 !pl-[3px] !pr-1">
                    <Box className="h-[32.3px] w-[32.3px] relative [backdrop-filter:blur(53.8px)] rounded-[9px] bg-[rgba(255,250,250,0.2)]">
                      <Box className="absolute top-[0px] left-[0px] [backdrop-filter:blur(53.8px)] rounded-[9px] bg-[rgba(255,250,250,0.2)] w-full h-full hidden" />
                      <img
                        className="absolute top-[9.2px] left-[9.2px] w-[13.8px] h-[13.8px] z-[1]"
                        alt=""
                        src="/dollar-1.svg"
                      />
                    </Box>
                  </Box>
                  <div className="w-10 h-3 relative leading-[11.8px] inline-block">
                    Add Money
                  </div>
                </Box>
                <Box className="flex flex-col items-start gap-[4.3px]">
                  <img
                    className="w-[32.3px] h-[32.3px] relative"
                    loading="lazy"
                    alt=""
                    src="/Group-7.svg"
                  />
                  <Box className="flex items-start !pt-0 !pb-0 !pl-[7px] !pr-[7px]">
                    <div className="h-3 w-[18px] relative leading-[11.8px] inline-block">
                      More
                    </div>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="!mr-[-4.2px] flex flex-col items-start gap-[10.5px] shrink-0">
              <div className="w-[75px] h-4 relative text-[10.8px] leading-[15.1px] text-[#0f0f0f] inline-block">
                Recent activity
              </div>
              <Box className="flex items-start !pt-0 !pb-0 !pl-0.5 !pr-0 text-center text-[6.5px] text-gray-100 font-[Gilroy-Medium]">
                <Box className="flex items-start gap-[10.7px]">
                  <Box className="rounded-[8.6px] bg-[#f8f8f8] flex items-center justify-center !pt-[1.1px] !pb-[1.1px] !pl-1.5 !pr-1.5 z-[2]">
                    <div className="relative leading-[10.8px]">This Day</div>
                  </Box>
                  <Box className="rounded-[8.6px] bg-[#081e69] flex items-center justify-center !pt-[1.1px] !pb-[1.1px] !pl-1.5 !pr-1.5 z-[3] text-white1">
                    <div className="relative leading-[10.8px]">This Week</div>
                  </Box>
                  <Box className="rounded-[8.6px] bg-[#f8f8f8] flex items-center justify-center !pt-[1.1px] !pb-[1.1px] !pl-1.5 !pr-1.5 z-[4]">
                    <div className="relative leading-[10.8px]">This Month</div>
                  </Box>
                  <Box className="rounded-[8.6px] bg-[#f8f8f8] flex items-center justify-center !pt-[1.1px] !pb-[1.1px] !pl-1.5 !pr-1.5 z-[1]">
                    <div className="relative leading-[10.8px]">6 Month</div>
                  </Box>
                </Box>
              </Box>
              <Box className="flex items-start !pt-0 !pb-0 !pl-0.5 !pr-[11px]">
                <Box className="flex flex-col items-start !pt-0 !pb-0 !pl-0 !pr-0 gap-[8.3px]">
                  <Box className="w-[184.7px] flex items-start justify-between gap-5 shrink-0">
                    <Box className="flex items-start gap-[8.6px]">
                      <img
                        className="h-[25.8px] w-[25.8px] relative shrink-0"
                        alt=""
                        src="/Group-16.svg"
                      />
                      <Box className="flex flex-col items-start !pt-0 !pb-[0.1px] !pl-0 !pr-0 gap-0.5 shrink-0">
                        <Box className="flex items-start gap-[1.3px]">
                          <div className="h-[13px] w-6 relative leading-[12.9px] inline-block shrink-0">
                            To Jin
                          </div>
                          <Box className="flex items-start gap-[2.2px] shrink-0 text-[rgba(11,11,11,0.6)] font-[Gilroy-Medium]">
                            <Box className="flex flex-col items-start !pt-[5.9px] !pb-0 !pl-0 !pr-0">
                              <Box className="w-[1.6px] h-[1.6px] relative rounded-[50%] bg-[rgba(13,13,12,0.6)]" />
                            </Box>
                            <div className="h-[13px] w-[21px] relative leading-[12.9px] inline-block">
                              Work
                            </div>
                          </Box>
                        </Box>
                        <div className="w-8 h-[11px] relative text-[6.5px] leading-[10.8px] font-[Gilroy-Regular] text-[rgba(11,11,11,0.8)] inline-block">
                          12 jun 2022
                        </div>
                      </Box>
                    </Box>
                    <Box className="flex flex-col items-start !pt-[6.4px] !pb-0 !pl-0 !pr-0 text-right">
                      <div className="w-[19px] h-[13px] relative leading-[12.9px] inline-block">
                        -$59
                      </div>
                    </Box>
                  </Box>
                  <Box className="w-[184.6px] h-[0.5px] relative border-gray-100 border-solid border-t-[0.5px] box-border opacity-[0.24] shrink-0" />
                </Box>
              </Box>
              <Box className="flex items-start !pt-0 !pb-0 !pl-0.5 !pr-[11px]">
                <Box className="flex flex-col items-start !pt-0 !pb-0 !pl-0 !pr-0 gap-[8.3px]">
                  <Box className="w-[184.3px] flex items-start justify-between gap-5 shrink-0">
                    <Box className="flex items-start gap-[8.6px] shrink-0">
                      <img
                        className="h-[25.8px] w-[25.8px] relative shrink-0"
                        alt=""
                        src="/Group-17.svg"
                      />
                      <Box className="flex flex-col items-start !pt-0 !pb-[0.1px] !pl-0 !pr-0 gap-0.5 shrink-0">
                        <Box className="flex items-start gap-[1.8px]">
                          <div className="h-[13px] w-[52px] relative leading-[12.9px] inline-block shrink-0">
                            From Google
                          </div>
                          <Box className="flex items-start gap-[2.1px] shrink-0 text-[rgba(11,11,11,0.6)] font-[Gilroy-Medium]">
                            <Box className="flex flex-col items-start !pt-[5.3px] !pb-0 !pl-0 !pr-0">
                              <Box className="w-[2.2px] h-[2.2px] relative rounded-[50%] bg-[rgba(13,13,12,0.6)]" />
                            </Box>
                            <div className="h-[13px] w-[26px] relative leading-[12.9px] inline-block">
                              Salary
                            </div>
                          </Box>
                        </Box>
                        <div className="w-[33px] h-[11px] relative text-[6.5px] leading-[10.8px] font-[Gilroy-Regular] text-[rgba(11,11,11,0.8)] inline-block">
                          10 jun 2022
                        </div>
                      </Box>
                    </Box>
                    <Box className="flex flex-col items-start !pt-[6.4px] !pb-0 !pl-0 !pr-0 text-right">
                      <div className="w-6 h-[13px] relative leading-[12.9px] inline-block shrink-0">
                        +$859
                      </div>
                    </Box>
                  </Box>
                  <Box className="w-[184.6px] h-[0.5px] relative border-gray-100 border-solid border-t-[0.5px] box-border opacity-[0.24] shrink-0" />
                </Box>
              </Box>
              <Box className="flex items-start !pt-0 !pb-0 !pl-0.5 !pr-3">
                <Box className="flex flex-col items-start !pt-0 !pb-0 !pl-0 !pr-0 gap-[8.3px]">
                  <Box className="w-[183.9px] flex items-start justify-between gap-5 shrink-0">
                    <Box className="flex items-start gap-[8.6px]">
                      <img
                        className="h-[25.8px] w-[25.8px] relative"
                        alt=""
                        src="/Group-18.svg"
                      />
                      <Box className="flex flex-col items-start !pt-0 !pb-[0.1px] !pl-0 !pr-0 gap-0.5">
                        <Box className="flex items-start gap-[2.2px]">
                          <div className="h-[13px] w-[35px] relative leading-[12.9px] inline-block shrink-0">
                            To David
                          </div>
                          <Box className="flex items-start gap-[2.1px] shrink-0 text-[rgba(11,11,11,0.6)] font-[Gilroy-Medium]">
                            <Box className="flex flex-col items-start !pt-[5.3px] !pb-0 !pl-0 !pr-0">
                              <Box className="w-[2.2px] h-[2.2px] relative rounded-[50%] bg-[rgba(13,13,12,0.6)]" />
                            </Box>
                            <div className="h-[13px] w-[21px] relative leading-[12.9px] inline-block">
                              Work
                            </div>
                          </Box>
                        </Box>
                        <div className="w-[30px] h-[11px] relative text-[6.5px] leading-[10.8px] font-[Gilroy-Regular] text-[rgba(11,11,11,0.8)] inline-block">
                          7 jun 2022
                        </div>
                      </Box>
                    </Box>
                    <Box className="flex flex-col items-start !pt-[6.4px] !pb-0 !pl-0 !pr-0 text-right">
                      <div className="w-[23px] h-[13px] relative leading-[12.9px] inline-block">
                        -$479
                      </div>
                    </Box>
                  </Box>
                  <Box className="w-[184.6px] h-[0.5px] relative border-gray-100 border-solid border-t-[0.5px] box-border opacity-[0.24] shrink-0" />
                </Box>
              </Box>
            </Box>
            <Box className="!mr-[-5.3px] flex flex-col items-end gap-[4.3px] shrink-0">
              <Box className="flex items-start justify-end !pt-0 !pb-0 !pl-[13px] !pr-3">
                <Box className="flex flex-col items-start !pt-0 !pb-0 !pl-0 !pr-0 gap-[8.3px]">
                  <Box className="w-[184.3px] flex items-start justify-between gap-5 shrink-0">
                    <Box className="flex items-start gap-[8.6px] shrink-0">
                      <img
                        className="h-[25.8px] w-[25.8px] relative shrink-0"
                        alt=""
                        src="/Group-17.svg"
                      />
                      <Box className="flex flex-col items-start !pt-0 !pb-[0.1px] !pl-0 !pr-0 gap-0.5 shrink-0">
                        <Box className="flex items-start gap-[1.8px]">
                          <div className="h-[13px] w-[52px] relative leading-[12.9px] inline-block shrink-0">
                            From Google
                          </div>
                          <Box className="flex items-start gap-[2.1px] shrink-0 text-[rgba(11,11,11,0.6)] font-[Gilroy-Medium]">
                            <Box className="flex flex-col items-start !pt-[5.3px] !pb-0 !pl-0 !pr-0">
                              <Box className="w-[2.2px] h-[2.2px] relative rounded-[50%] bg-[rgba(13,13,12,0.6)]" />
                            </Box>
                            <div className="h-[13px] w-[25px] relative leading-[12.9px] inline-block">
                              Bonus
                            </div>
                          </Box>
                        </Box>
                        <div className="w-[33px] h-[11px] relative text-[6.5px] leading-[10.8px] font-[Gilroy-Regular] text-[rgba(11,11,11,0.8)] inline-block">
                          10 jun 2022
                        </div>
                      </Box>
                    </Box>
                    <Box className="flex flex-col items-start !pt-[6.4px] !pb-0 !pl-0 !pr-0 text-right">
                      <div className="w-6 h-[13px] relative leading-[12.9px] inline-block shrink-0">
                        +$859
                      </div>
                    </Box>
                  </Box>
                  <Box className="w-[184.6px] h-[0.5px] relative border-gray-100 border-solid border-t-[0.5px] box-border opacity-[0.24] shrink-0" />
                </Box>
              </Box>
              <Nav
                property1="Home"
                homeButton1="/006-home-button-1.svg"
                creditCard11="/004-credit-card-1-1.svg"
                swap1="/002-swap-1.svg"
                user11="/008-user-1-1.svg"
              />
            </Box>
          </Box>
          <Box className="w-[543px] flex items-start justify-end max-w-full !mt-[-50px] relative shrink-0 text-[11px] text-gray-100 mq800:!pl-[167px] mq800:!pr-[167px] mq800:box-border mq450:!pl-5 mq450:!pr-5 mq450:box-border">
            <Box className="h-[117px] w-[254px] [backdrop-filter:blur(16.2px)] rounded-xl bg-[rgba(255,255,255,0.4)] overflow-hidden shrink-0 flex flex-col items-start !p-1 box-border gap-[6.2px] z-[1]">
              <Box className="!mt-[-188.1px] flex items-start !pt-0 !pb-[10.3px] !pl-[5px] !pr-1.5 shrink-0 font-[Inter]">
                <Box className="w-[234.5px] flex items-start justify-between gap-5 shrink-0">
                  <Box className="flex items-start gap-[8.2px] shrink-0">
                    <img
                      className="h-[32.9px] w-[32.9px] relative rounded-[11px] object-cover"
                      loading="lazy"
                      alt=""
                      src="/Rectangle-11@2x.png"
                    />
                    <Box className="flex flex-col items-start !pt-0.5 !pb-0 !pl-0 !pr-0">
                      <Box className="h-[28.5px] flex flex-col items-start !pt-0 !pb-[15.5px] !pl-0 !pr-0 box-border gap-[5.6px]">
                        <Typography
                          className="w-[57px] h-[13px] relative inline-block shrink-0"
                          variant="inherit"
                          variantMapping={{ inherit: "b" }}
                          sx={{ fontWeight: "700" }}
                        >
                          Toni Kross
                        </Typography>
                        <div className="w-14 h-2.5 relative text-[8.2px] text-[rgba(13,13,12,0.6)] inline-block shrink-0">
                          Good Morning
                        </div>
                      </Box>
                    </Box>
                  </Box>
                  <Box className="flex flex-col items-start !pt-[5.5px] !pb-0 !pl-0 !pr-0">
                    <img
                      className="w-[21.9px] h-[21.9px] relative shrink-0"
                      alt=""
                      src="/Group-5.svg"
                    />
                  </Box>
                </Box>
              </Box>
              <Box className="flex items-start !pt-0 !pb-[9.5px] !pl-[5px] !pr-1.5 shrink-0 text-[9.6px] text-[rgba(255,255,255,0.6)] font-[Gilroy-Regular]">
                <Box className="flex flex-col items-start !pt-0 !pb-[0.7px] !pl-0 !pr-0 gap-[7.9px] shrink-0">
                  <Box className="flex flex-col items-start gap-[4.6px]">
                    <div className="w-[61px] h-4 relative leading-[15.1px] inline-block">
                      Total balance
                    </div>
                    <div className="w-[139px] h-[25px] relative text-[19.2px] leading-[24.7px] font-[Gilroy-Bold] text-[#081e69] inline-block">
                      $42,295.00 USD
                    </div>
                  </Box>
                  <Box className="w-[235.3px] h-[0.7px] relative border-white1 border-solid border-t-[0.7px] box-border opacity-[0.24]" />
                </Box>
              </Box>
              <Box className="flex items-start !pt-0 !pb-0 !pl-[5px] !pr-1.5 shrink-0 text-center text-[9.6px]">
                <Box className="w-[234.6px] flex items-start justify-between gap-5 shrink-0">
                  <Box className="h-[62.6px] flex flex-col items-start !pt-0 !pb-[21.4px] !pl-0 !pr-0 box-border gap-[5.5px]">
                    <Box className="flex items-start !pt-0 !pb-0 !pl-[9px] !pr-2.5 shrink-0">
                      <Box className="w-[41.2px] [backdrop-filter:blur(68.6px)] rounded-[16.5px] bg-[#f8f8f8] flex items-start !pt-[11.8px] !pb-[11.8px] !pl-[11px] !pr-[11px] box-border shrink-0">
                        <Box className="h-[41.2px] w-[41.2px] relative [backdrop-filter:blur(68.6px)] rounded-[16.5px] bg-[#f8f8f8] hidden shrink-0" />
                        <img
                          className="h-[17.6px] w-[17.6px] relative z-[1] shrink-0"
                          alt=""
                          src="/transfer-money-1.svg"
                        />
                      </Box>
                    </Box>
                    <div className="w-[61px] h-4 relative leading-[15.1px] inline-block shrink-0">
                      Fund Transfer
                    </div>
                  </Box>
                  <Box className="h-[62.6px] flex flex-col items-start !pt-0 !pb-[21.4px] !pl-0 !pr-0 box-border gap-[5.5px]">
                    <Box className="flex items-start !pt-0 !pb-0 !pl-1 !pr-[5px] shrink-0">
                      <Box className="h-[41.2px] w-[41.2px] relative [backdrop-filter:blur(68.6px)] rounded-[16.5px] bg-[#f8f8f8] shrink-0">
                        <Box className="absolute top-[0px] left-[0px] [backdrop-filter:blur(68.6px)] rounded-[16.5px] bg-[#f8f8f8] w-full h-full hidden" />
                        <img
                          className="absolute top-[11.8px] left-[11.8px] w-[17.6px] h-[17.6px] z-[1]"
                          alt=""
                          src="/dollar-1.svg"
                        />
                      </Box>
                    </Box>
                    <div className="w-[51px] h-4 relative leading-[15.1px] inline-block shrink-0">
                      Add Money
                    </div>
                  </Box>
                  <Box className="h-[62.6px] flex flex-col items-start !pt-0 !pb-[21.4px] !pl-0 !pr-0 box-border gap-[5.5px]">
                    <img
                      className="w-[41.2px] h-[41.2px] relative shrink-0"
                      loading="lazy"
                      alt=""
                      src="/Group-7.svg"
                    />
                    <Box className="w-[41.2px] flex items-start !pt-0 !pb-0 !pl-2 !pr-[9px] box-border shrink-0">
                      <div className="h-4 w-[23px] relative leading-[15.1px] inline-block shrink-0">
                        More
                      </div>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className="flex items-start !pt-0 !pb-[130.2px] !pl-0 !pr-0 shrink-0 text-[10.1px] text-[#0b0b0b]">
                <Box className="h-[109px] w-[246px] rounded-[11px] bg-[rgba(255,255,255,0.7)] overflow-hidden shrink-0 flex items-start !pt-2.5 !pb-0 !pl-1.5 !pr-1.5 box-border">
                  <Box className="flex flex-col items-start !pt-0 !pb-0 !pl-0 !pr-2.5 gap-[12.4px] shrink-0">
                    <div className="w-[88px] h-[18px] relative text-[12.6px] leading-[17.7px] text-[#0f0f0f] inline-block">
                      Recent activity
                    </div>
                    <Box className="flex items-start !pt-0 !pb-0 !pl-[3px] !pr-[3px] text-center text-[7.6px] text-gray-100 font-[Gilroy-Medium]">
                      <Box className="flex items-start gap-[12.2px] shrink-0 mq450:flex-wrap">
                        <Box className="rounded-[10.1px] bg-[#f8f8f8] flex items-center justify-center !pt-[1.3px] !pb-[1.3px] !pl-[7px] !pr-[7px] z-[2]">
                          <div className="relative leading-[12.6px]">
                            This Day
                          </div>
                        </Box>
                        <Box className="rounded-[10.1px] bg-[#081e69] flex items-center justify-center !pt-[1.3px] !pb-[1.3px] !pl-[7px] !pr-[7px] z-[3] text-white1">
                          <div className="relative leading-[12.6px]">
                            This Week
                          </div>
                        </Box>
                        <Box className="rounded-[10.1px] bg-[#f8f8f8] flex items-center justify-center !pt-[1.3px] !pb-[1.3px] !pl-[7px] !pr-[7px] z-[4]">
                          <div className="relative leading-[12.6px]">
                            This Month
                          </div>
                        </Box>
                        <Box className="rounded-[10.1px] bg-[#f8f8f8] flex items-center justify-center !pt-[1.3px] !pb-[1.3px] !pl-[7px] !pr-[7px] z-[1]">
                          <div className="relative leading-[12.6px]">
                            6 Month
                          </div>
                        </Box>
                      </Box>
                    </Box>
                    <Box className="flex items-start !pt-0 !pb-0 !pl-[3px] !pr-[3px]">
                      <Box className="flex flex-col items-start !pt-0 !pb-0 !pl-0 !pr-0 gap-[9.7px]">
                        <Box className="w-[216.4px] flex items-start justify-between gap-5 shrink-0">
                          <Box className="flex items-start gap-[10.1px]">
                            <img
                              className="h-[30.3px] w-[30.3px] relative shrink-0"
                              alt=""
                              src="/Group-16.svg"
                            />
                            <Box className="h-[30.7px] flex flex-col items-start !pt-0 !pb-[14.7px] !pl-0 !pr-0 box-border gap-[1.7px] shrink-0">
                              <Box className="flex items-start gap-[1.7px] shrink-0">
                                <div className="h-4 w-7 relative leading-[15.2px] inline-block">
                                  To Jin
                                </div>
                                <Box className="flex items-start gap-[2.5px] text-[rgba(11,11,11,0.6)] font-[Gilroy-Medium]">
                                  <Box className="flex flex-col items-start !pt-[6.9px] !pb-0 !pl-0 !pr-0">
                                    <Box className="w-[1.9px] h-[1.9px] relative rounded-[50%] bg-[rgba(13,13,12,0.6)]" />
                                  </Box>
                                  <div className="h-4 w-6 relative leading-[15.2px] inline-block">
                                    Work
                                  </div>
                                </Box>
                              </Box>
                              <div className="w-[38px] h-[13px] relative text-[7.6px] leading-[12.6px] font-[Gilroy-Regular] text-[rgba(11,11,11,0.8)] inline-block shrink-0">
                                12 jun 2022
                              </div>
                            </Box>
                          </Box>
                          <Box className="flex flex-col items-start !pt-[7.6px] !pb-0 !pl-0 !pr-0 text-right">
                            <div className="w-[22px] h-4 relative leading-[15.2px] inline-block">
                              -$59
                            </div>
                          </Box>
                        </Box>
                        <Box className="w-[216.5px] h-[0.6px] relative border-gray-100 border-solid border-t-[0.6px] box-border opacity-[0.24] shrink-0" />
                      </Box>
                    </Box>
                    <Box className="flex items-start !pt-0 !pb-0 !pl-[3px] !pr-[3px]">
                      <Box className="flex flex-col items-start !pt-0 !pb-0 !pl-0 !pr-0 gap-[9.7px]">
                        <Box className="w-[216.1px] flex items-start justify-between gap-5 shrink-0">
                          <Box className="flex items-start gap-[10.1px] shrink-0">
                            <img
                              className="h-[30.3px] w-[30.3px] relative"
                              alt=""
                              src="/Group-17.svg"
                            />
                            <Box className="h-[30.7px] flex flex-col items-start !pt-0 !pb-[14.7px] !pl-0 !pr-0 box-border gap-[1.7px]">
                              <Box className="flex items-start gap-[2.1px] shrink-0">
                                <div className="h-4 w-[61px] relative leading-[15.2px] inline-block shrink-0">
                                  From Google
                                </div>
                                <Box className="flex items-start gap-[2.6px] shrink-0 text-[rgba(11,11,11,0.6)] font-[Gilroy-Medium]">
                                  <Box className="flex flex-col items-start !pt-[6.3px] !pb-0 !pl-0 !pr-0">
                                    <Box className="w-[2.5px] h-[2.5px] relative rounded-[50%] bg-[rgba(13,13,12,0.6)]" />
                                  </Box>
                                  <div className="h-4 w-[30px] relative leading-[15.2px] inline-block">
                                    Salary
                                  </div>
                                </Box>
                              </Box>
                              <div className="w-[38px] h-[13px] relative text-[7.6px] leading-[12.6px] font-[Gilroy-Regular] text-[rgba(11,11,11,0.8)] inline-block shrink-0">
                                10 jun 2022
                              </div>
                            </Box>
                          </Box>
                          <Box className="flex flex-col items-start !pt-[7.6px] !pb-0 !pl-0 !pr-0 text-right">
                            <div className="w-7 h-4 relative leading-[15.2px] inline-block shrink-0">
                              +$859
                            </div>
                          </Box>
                        </Box>
                        <Box className="w-[216.5px] h-[0.6px] relative border-gray-100 border-solid border-t-[0.6px] box-border opacity-[0.24] shrink-0" />
                      </Box>
                    </Box>
                    <Box className="flex items-start !pt-0 !pb-0 !pl-[3px] !pr-[3px]">
                      <Box className="flex flex-col items-start !pt-0 !pb-0 !pl-0 !pr-0 gap-[9.7px]">
                        <Box className="w-[215.8px] flex items-start justify-between gap-5 shrink-0">
                          <Box className="flex items-start gap-[10.1px]">
                            <img
                              className="h-[30.3px] w-[30.3px] relative"
                              alt=""
                              src="/Group-18.svg"
                            />
                            <Box className="h-[30.7px] flex flex-col items-start !pt-0 !pb-[14.7px] !pl-0 !pr-0 box-border gap-[1.7px]">
                              <Box className="flex items-start gap-[2.5px] shrink-0">
                                <div className="h-4 w-[41px] relative leading-[15.2px] inline-block">
                                  To David
                                </div>
                                <Box className="flex items-start gap-[2.6px] text-[rgba(11,11,11,0.6)] font-[Gilroy-Medium]">
                                  <Box className="flex flex-col items-start !pt-[6.3px] !pb-0 !pl-0 !pr-0">
                                    <Box className="w-[2.5px] h-[2.5px] relative rounded-[50%] bg-[rgba(13,13,12,0.6)]" />
                                  </Box>
                                  <div className="h-4 w-6 relative leading-[15.2px] inline-block">
                                    Work
                                  </div>
                                </Box>
                              </Box>
                              <div className="w-[35px] h-[13px] relative text-[7.6px] leading-[12.6px] font-[Gilroy-Regular] text-[rgba(11,11,11,0.8)] inline-block shrink-0">
                                7 jun 2022
                              </div>
                            </Box>
                          </Box>
                          <Box className="flex flex-col items-start !pt-[7.6px] !pb-0 !pl-0 !pr-0 text-right">
                            <div className="w-[27px] h-4 relative leading-[15.2px] inline-block">
                              -$479
                            </div>
                          </Box>
                        </Box>
                        <Box className="w-[216.5px] h-[0.6px] relative border-gray-100 border-solid border-t-[0.6px] box-border opacity-[0.24] shrink-0" />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className="!ml-[-11px] flex flex-col items-end gap-[5.5px] shrink-0 text-[#0b0b0b]">
                <Box className="flex items-start justify-end !pt-0 !pb-0 !pl-4 !pr-4">
                  <Box className="flex flex-col items-start !pt-0 !pb-0 !pl-0 !pr-0 gap-[10.7px]">
                    <Box className="w-[234.4px] flex items-start justify-between gap-5 shrink-0">
                      <Box className="flex items-start gap-[11px]">
                        <img
                          className="h-[32.9px] w-[32.9px] relative"
                          loading="lazy"
                          alt=""
                          src="/Group-17.svg"
                        />
                        <Box className="flex flex-col items-start gap-[2.2px]">
                          <Box className="flex items-start gap-[2.6px]">
                            <div className="h-[17px] w-[66px] relative leading-[16.5px] inline-block">
                              From Google
                            </div>
                            <Box className="flex items-start gap-[2.8px] text-[rgba(11,11,11,0.6)] font-[Gilroy-Medium]">
                              <Box className="flex flex-col items-start !pt-[6.9px] !pb-0 !pl-0 !pr-0">
                                <Box className="w-[2.7px] h-[2.7px] relative rounded-[50%] bg-[rgba(13,13,12,0.6)] shrink-0" />
                              </Box>
                              <div className="h-[17px] w-[31px] relative leading-[16.5px] inline-block shrink-0">
                                Bonus
                              </div>
                            </Box>
                          </Box>
                          <div className="w-[42px] h-3.5 relative text-[8.2px] leading-[13.7px] font-[Gilroy-Regular] text-[rgba(11,11,11,0.8)] inline-block">
                            10 jun 2022
                          </div>
                        </Box>
                      </Box>
                      <Box className="flex flex-col items-start !pt-[8.2px] !pb-0 !pl-0 !pr-0 text-right">
                        <div className="w-[30px] h-[17px] relative leading-[16.5px] inline-block">
                          +$859
                        </div>
                      </Box>
                    </Box>
                    <Box className="w-[235.3px] h-[0.7px] relative border-gray-100 border-solid border-t-[0.7px] box-border opacity-[0.24] shrink-0" />
                  </Box>
                </Box>
                <Nav
                  property1="Home"
                  homeButton1="/006-home-button-1.svg"
                  creditCard11="/004-credit-card-1-1.svg"
                  swap1="/002-swap-1.svg"
                  user11="/008-user-1-1.svg"
                  navWidth="267.5px"
                  navHeight="54.9px"
                  navPadding="0px 16.5px 8.1px"
                  navGap="35px"
                  ellipseBoxWidth="54.9px"
                  ellipseBoxBackdropFilter="blur(54.9px)"
                  rectangleBoxBackdropFilter="blur(54.9px)"
                  rectangleBoxBorderRadius="20.58px 20.58px 0px 0px"
                  frameBoxWidth="27px"
                  frameBoxHeight="46.8px"
                  groupBoxWidth="27px"
                  groupBoxHeight="37.9px"
                  frameBoxWidth1="21.3px"
                  frameBoxHeight1="16.5px"
                  frameBoxPadding="0px 0px 0px 4.8px"
                  homeButton1IconHeight="16.5px"
                  homeButton1IconWidth="16.5px"
                  homeWidth="27px"
                  homeHeight="16px"
                  homeFontSize="9.6px"
                  homeIndicatorBorderRadius="16.5px"
                  homeIndicatorWidth="25.4px"
                  groupBoxHeight1="37.9px"
                  groupBoxWidth1="23px"
                  navIconsWidth="20px"
                  navIconsHeight="16.5px"
                  navIconsPadding="0px 0px 0px 3.5px"
                  creditCard11IconHeight="16.5px"
                  creditCard11IconWidth="16.5px"
                  cardWidth="23px"
                  cardHeight="16px"
                  cardFontSize="9.6px"
                  groupBoxHeight2="37.9px"
                  groupBoxWidth2="52px"
                  frameBoxWidth2="33.7px"
                  frameBoxHeight2="16.5px"
                  frameBoxPadding1="0px 0px 0px 17.2px"
                  swap1IconHeight="16.5px"
                  swap1IconWidth="16.5px"
                  transactionWidth="52px"
                  transactionHeight="16px"
                  transactionFontSize="9.6px"
                  groupBoxHeight3="37.9px"
                  groupBoxWidth3="27px"
                  frameBoxWidth3="22px"
                  frameBoxHeight3="16.5px"
                  frameBoxPadding2="0px 0px 0px 5.5px"
                  user11IconHeight="16.5px"
                  user11IconWidth="16.5px"
                  profileWidth="27px"
                  profileHeight="16px"
                  profileFontSize="9.6px"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </section>
      <Box className="flex flex-col items-start gap-4 z-[2] shrink-0">
        <div className="relative leading-[130%] capitalize font-medium opacity-[0.7]">
          trusted by:
        </div>
        <Box className="flex items-center gap-[18.4px] opacity-[0.9] mq800:flex-wrap">
          {logoItems.map((item, index) => (
            <Logo
              key={index}
              name1={item.name1}
              vector={item.vector}
              sHELLS={item.sHELLS}
            />
          ))}
        </Box>
      </Box>
    </section>
  );
};

Desktop.propTypes = {
  className: PropTypes.string,
};

export default Desktop;
