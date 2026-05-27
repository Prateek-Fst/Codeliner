import { Typography, Box, Button } from "@mui/material";
import MarqueeBanner from "./MarqueeBanner";
import LearnMoreGradientBtn from "./LearnMoreGradientBtn";
import PhoneFeatureRow from "./PhoneFeatureRow";
import PhoneMockup from "./PhoneMockup";
import PropTypes from "prop-types";

const DigitalBankingSection = ({ className = "" }) => {
  return (
    <section className={`bg-white1 flex flex-col items-start max-w-full text-left text-[572.6px] text-[transparent] font-[Archivo] ${className}`}>
      <MarqueeBanner />
      <Box className="w-[1440px] h-[2647px] bg-white overflow-hidden shrink-0 flex flex-col items-start !pt-[100px] !pb-[115.6px] !pl-[81px] !pr-20 box-border relative isolate gap-[155.7px] max-w-full mq800:gap-[78px] mq800:!pt-[27px] mq800:!pb-8 mq800:!pl-10 mq800:!pr-10 mq800:box-border mq450:gap-[39px] mq1350:h-auto mq1350:!pt-[42px] mq1350:!pb-[49px] mq1350:box-border">
        <Typography
          className="!!m-[0 important] w-[744px] h-[687px] absolute top-[-66.7px] left-[277px] inline-block [-webkit-text-stroke:1.6px_#00b4fd] [paint-order:stroke_fill] opacity-[0.25] shrink-0 mq800:text-[229px] mq800:leading-[412px] mq450:text-[143px] mq450:leading-[275px]"
          variant="inherit"
          variantMapping={{ inherit: "h2" }}
          sx={{
            fontWeight: "500",
            lineHeight: "120%",
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 80%)",
            maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 80%)",
          }}
        >
          N7
        </Typography>
        <Box className="w-[778.7px] h-[778.7px] absolute !!m-[0 important] top-[1928.6px] left-[-364.2px] [filter:blur(100px)] rounded-[50%] [background:linear-gradient(100.92deg,_rgba(0,_208,_253,_0.1),_rgba(0,_21,_206,_0.1))] shrink-0" />
        <Typography
          className="!!m-[0 important] w-[861px] h-[1829px] absolute top-[957.3px] left-[886.9px] inline-block [-webkit-text-stroke:1.6px_#00b4fd] [paint-order:stroke_fill] text-[transparent] opacity-[0.25] shrink-0 mq800:text-[610px] mq800:leading-[1097px] mq450:text-[381px] mq450:leading-[732px]"
          variant="inherit"
          variantMapping={{ inherit: "h1" }}
          sx={{
            fontWeight: "500",
            fontSize: "1524.1px",
            lineHeight: "120%",
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 80%)",
            maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 80%)",
          }}
        >
          7
        </Typography>
        <img
          className="w-[86.33%] h-[47.04%] absolute !!m-[0 important] top-[15.8%] right-[66.67%] bottom-[37.16%] left-[-53%] max-w-full overflow-hidden max-h-full z-[1] shrink-0"
          loading="lazy"
          alt=""
          src="/Frame-26-blue.svg"
        />
        <Box className="w-[585.9px] h-[585.9px] absolute !!m-[0 important] top-[-260.9px] left-[-85.9px] [filter:blur(100px)] rounded-[50%] [background:linear-gradient(103.43deg,_rgba(253,_167,_0,_0.02),_rgba(206,_87,_0,_0.02))] z-[1] shrink-0" />
        <Box className="w-[778.7px] h-[778.7px] absolute !!m-[0 important] top-[-91.6px] left-[661.3px] [filter:blur(100px)] rounded-[50%] [background:linear-gradient(103.43deg,_rgba(253,_167,_0,_0.05),_rgba(206,_87,_0,_0.05))] z-[1] shrink-0" />
        <Box className="flex items-start gap-[102px] max-w-full shrink-0 mq800:gap-[25px] mq1350:gap-[51px] mq1350:flex-wrap">
          <section className="flex flex-col items-start gap-4 max-w-full z-[2] text-left text-[53px] text-black font-[Archivo] mq800:min-w-full mq1350:flex-1">
            <Box className="flex flex-col items-start gap-9 mq450:gap-[18px]">
              <Box className="flex flex-col items-start justify-center gap-4">
                <Typography
                  className="!m-0 w-[439px] relative inline-block opacity-[0.95] mq800:text-[42px] mq800:leading-[51px] mq450:text-[32px] mq450:leading-[38px]"
                  variant="inherit"
                  variantMapping={{ inherit: "h1" }}
                  sx={{ fontWeight: "400", lineHeight: "120%", letterSpacing: "-0.01em" }}
                >
                  Digital banking out-of-the-box
                </Typography>
                <div className="w-[379px] relative text-base leading-[130%] inline-block opacity-[0.7]">
                  N7 helps your financial institution improve the client experience, automate and optimize procedures
                </div>
              </Box>
              <Button
                className="!pt-[11px] !pb-[11px] !pl-[51px] !pr-[51px]"
                disableElevation
                variant="contained"
                sx={{
                  color: "#fff",
                  fontSize: "15",
                  background: "linear-gradient(106.53deg, #00b4fd, #003ace)",
                  borderRadius: "10px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background: "#ffffff",
                    backgroundColor: "#ffffff",
                    color: "#00b4fd",
                  },
                }}
              >
                REQUEST DEMO
              </Button>
            </Box>
            <LearnMoreGradientBtn />
          </section>
          <Box className="flex flex-col items-center gap-[110px] max-w-full z-[1] mq800:gap-[55px] mq1125:min-w-full mq450:gap-[27px] mq1350:flex-1">
            <PhoneFeatureRow
              screenType="spend"
              feature1Icon="/Frame-15.svg"
              feature1Title="Fully compliant with regulatory requirement"
              feature1Desc="The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank's operational-risk protocols and procedures."
              feature2Icon="/Frame-15.svg"
              feature2Title="Pre-integrated Security System"
              feature3Icon="/Frame-15.svg"
              feature3Title="Fully Compliant With Regulatory Requirement"
              feature4Icon="/Frame-15.svg"
              feature4Title="Digitally Connected Core"
            />
            <section className="flex items-center !pt-0 !pb-0 !pl-[19px] !pr-[19px] gap-[76px] text-left text-base text-black font-[Archivo] mq800:gap-[38px] mq800:flex-wrap mq450:gap-[19px]">
              <Box className="flex flex-col items-start !pt-5 !pb-5 !pl-0 !pr-0 gap-[43px] mq800:flex-1 mq450:gap-[21px]">
                <Box className="flex flex-col items-start gap-6">
                  <Box className="w-[269px] flex items-center justify-center gap-[5px]">
                    <img className="h-[31.4px] w-[30px] relative hidden shrink-0" alt="" src="/Frame-15.svg" />
                    <div className="flex-1 relative leading-[130%] font-medium shrink-0">No legacy IT systems</div>
                  </Box>
                  <div className="w-[268.5px] relative leading-[130%] inline-block opacity-[0.7]">
                    Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance.
                  </div>
                </Box>
                <Box className="w-[269px] flex flex-col items-start gap-3">
                  <Box className="self-stretch flex items-center gap-[5px] mq450:flex-wrap">
                    <img className="h-[31.4px] w-[30px] relative" loading="lazy" alt="" src="/Frame-15.svg" />
                    <div className="flex-1 relative leading-[130%] font-medium inline-block opacity-[0.7] min-w-[145px]">{`Adaptive & Intelligent API monetization`}</div>
                  </Box>
                  <Box className="self-stretch flex items-center gap-[5px] mq450:flex-wrap">
                    <img className="h-[31.4px] w-[30px] relative" loading="lazy" alt="" src="/Frame-15.svg" />
                    <div className="flex-1 relative leading-[130%] font-medium inline-block opacity-[0.7] min-w-[146px]">Ambient User Experience</div>
                  </Box>
                  <Box className="self-stretch flex items-center gap-[5px] mq450:flex-wrap">
                    <img className="h-[31.4px] w-[30px] relative" loading="lazy" alt="" src="/Frame-15.svg" />
                    <div className="flex-1 relative leading-[130%] font-medium inline-block opacity-[0.7] min-w-[152px]">Cloud-native With lower TCO</div>
                  </Box>
                </Box>
              </Box>
              <PhoneMockup
                screenType="home"
                className="mq800:flex-1"
              />
            </section>
            <PhoneFeatureRow
              screenType="profile"
              feature1Icon="/Frame-15.svg"
              feature1Title="No traditional branches"
              feature1Desc="Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimising operational costs for a seamless branchless experience.'"
              feature2Icon="/Element-Shape.svg"
              feature2Title={`Branchless & Paperless Banking`}
              feature3Icon="/Frame-15.svg"
              feature3Title="Digital Transformation Capability"
              feature4Icon="/Frame-15.svg"
              feature4Title="Optimized, Adoptable and Scalable"
              row1Width="unset"
              feature2Flex="unset"
              feature2Width="268.4px"
              feature2Display="inline-block"
              row2Width="unset"
              row2AlignItems="center"
              feature3Flex="unset"
              feature3Width="268.4px"
              feature3Display="inline-block"
              row3Width="unset"
              row3JustifyContent="unset"
              feature4Flex="unset"
              feature4Width="268.4px"
              feature4Display="inline-block"
            />
          </Box>
        </Box>
        <Box className="rounded-[27px] [background:linear-gradient(99.21deg,_#031e2a,_#000d12_63.08%)] overflow-hidden flex items-end !pt-[112.3px] !pb-[112.7px] !pl-[65px] !pr-16 box-border relative isolate gap-[84.2px] max-w-full z-[1] shrink-0 mq800:gap-[42px] mq450:gap-[21px] mq450:!pt-[73px] mq450:!pb-[73px] mq450:box-border mq1350:flex-wrap mq1350:!pl-8 mq1350:!pr-8 mq1350:box-border">
          <Typography
            className="!!m-[0 important] h-[687px] w-[744px] absolute top-[-160.7px] right-[-85.6px] inline-block [-webkit-text-stroke:1.6px_#00b4fd] [paint-order:stroke_fill] opacity-[0.25] shrink-0 mq800:text-[229px] mq800:leading-[412px] mq450:text-[143px] mq450:leading-[275px]"
            variant="inherit"
            variantMapping={{ inherit: "h2" }}
            sx={{
              fontWeight: "500",
              lineHeight: "120%",
              WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 80%)",
              maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 80%)",
            }}
          >
            N7
          </Typography>
          <Box className="flex flex-col items-start gap-8 max-w-full z-[1] shrink-0 text-[53px] text-white mq800:gap-4 mq1125:min-w-full mq1350:flex-1">
            <Typography
              className="!m-0 w-[607.8px] relative inline-block mq800:text-[42px] mq800:leading-[51px] mq450:text-[32px] mq450:leading-[38px]"
              variant="inherit"
              variantMapping={{ inherit: "h1" }}
              sx={{ fontWeight: "400", lineHeight: "120%", letterSpacing: "-0.01em" }}
            >
              Take the full advantage of going paper-less now.
            </Typography>
            <div className="w-[462.9px] relative text-base leading-[130%] inline-block opacity-[0.7]">{`N7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations `}</div>
          </Box>
          <Box className="h-[125.3px] flex flex-col items-start max-w-full shrink-0 mq800:h-auto mq800:min-w-full mq1350:flex-1">
            <Box className="h-[49px] flex items-start gap-10 mq800:flex-wrap mq450:gap-5">
              <Button
                className="!pt-[11px] !pb-[11px] !pl-[59px] !pr-[59px]"
                disableElevation
                variant="outlined"
                sx={{
                  color: "#e9f4f9",
                  fontSize: "15",
                  borderColor: "#e9f4f9",
                  borderRadius: "10px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#ffffff",
                    color: "#00b4fd",
                    borderColor: "#ffffff",
                  },
                }}
              >
                Contact Us
              </Button>
              <Button
                className="!pt-[11px] !pb-[11px] !pl-[51px] !pr-[51px]"
                disableElevation
                variant="contained"
                sx={{
                  color: "#fff",
                  fontSize: "15",
                  background: "linear-gradient(106.53deg, #00b4fd, #003ace)",
                  borderRadius: "10px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background: "#ffffff",
                    backgroundColor: "#ffffff",
                    color: "#00b4fd",
                  },
                }}
              >
                REQUEST DEMO
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

DigitalBankingSection.propTypes = {
  className: PropTypes.string,
};

export default DigitalBankingSection;
