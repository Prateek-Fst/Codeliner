import { Box } from "@mui/material";
import FooterGlow from "./FooterGlow";
import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <footer
      className={`w-[1440px] h-[787px] bg-black overflow-hidden shrink-0 flex flex-col items-start !pt-[130px] !pb-8 !pl-[53px] !pr-[53px] box-border relative isolate gap-20 max-w-full text-left text-base text-white font-[Archivo] mq800:gap-10 mq800:!pt-[84px] mq800:!pb-[21px] mq800:!pl-[26px] mq800:!pr-[26px] mq800:box-border mq450:gap-5 mq450:!pt-[55px] mq450:!pb-5 mq450:box-border mq1350:h-auto ${className}`}
    >
      <Box className="w-[1440px] h-[556.8px] absolute !!m-[0 important] top-[547.5px] left-[calc(50%_-_720px)] [filter:blur(200px)] rounded-[50%] [background:linear-gradient(103.43deg,_rgba(0,_180,_253,_0.05),_rgba(0,_58,_206,_0.05))] shrink-0" />
      <Box className="flex items-start gap-[50.7px] max-w-full shrink-0 mq800:gap-[25px] mq1350:flex-wrap">
        <FooterGlow />
        <Box className="flex flex-col items-start gap-20 max-w-full mq1350:flex-1">
          <Box className="flex items-start gap-[34px] max-w-full mq1125:flex-wrap mq1125:min-w-full mq450:gap-[17px]">
            <Box className="flex flex-col items-start gap-32 mq450:gap-16">
              <Box className="flex flex-col items-start gap-4">
                <div className="relative leading-[130%] font-medium">London</div>
                <div className="w-[268.5px] relative leading-[130%] inline-block opacity-[0.7]">
                  Linktia Infosystems Ltd – CB7,
                  <br />
                  26 Main Road Sundridge,TN14 6EP, England, United Kingdom.
                </div>
              </Box>
              <Box className="flex flex-col items-start gap-4">
                <div className="relative leading-[130%] font-medium">Solutions</div>
                <Box className="flex flex-col items-start gap-2.5">
                  <Box className="flex items-center gap-3.5">
                    <div className="w-[136.5px] relative leading-[130%] inline-block shrink-0 opacity-[0.7]">Core Banking CB7</div>
                    <img className="h-[14.5px] w-[13.6px] relative object-contain" loading="lazy" alt="" src="/Solution-Spacer.svg" />
                  </Box>
                  <Box className="flex items-center gap-3.5">
                    <div className="w-[136.5px] relative leading-[130%] inline-block shrink-0 opacity-[0.7]">Digital Banking N7</div>
                    <img className="h-[14.5px] w-[13.6px] relative object-contain" loading="lazy" alt="" src="/3.svg" />
                  </Box>
                  <Box className="flex items-center gap-3.5">
                    <div className="w-[136.5px] relative leading-[130%] inline-block shrink-0 opacity-[0.7]">Open Banking</div>
                    <img className="h-[14.5px] w-[13.6px] relative object-contain" loading="lazy" alt="" src="/3.svg" />
                  </Box>
                  <Box className="flex items-start gap-3.5">
                    <div className="w-[136.5px] relative leading-[130%] inline-block shrink-0 opacity-[0.7]">Loan Origination System</div>
                    <img className="h-[14.5px] w-[13.6px] relative object-contain" loading="lazy" alt="" src="/3.svg" />
                  </Box>
                  <Box className="flex items-start gap-3.5">
                    <div className="w-[136.5px] relative leading-[130%] inline-block shrink-0 opacity-[0.7]">Loan Management System</div>
                    <img className="h-[14.5px] w-[13.6px] relative object-contain" alt="" src="/3.svg" />
                  </Box>
                  <Box className="flex items-start gap-3.5">
                    <div className="w-[136.5px] relative leading-[130%] inline-block shrink-0 opacity-[0.7]">Digital Transformation</div>
                    <img className="h-[14.5px] w-[13.6px] relative object-contain" alt="" src="/3.svg" />
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="flex flex-col items-start gap-[107px] mq450:gap-[53px]">
              <Box className="flex flex-col items-start gap-4">
                <div className="relative leading-[130%] font-medium">Dubai</div>
                <div className="w-[268.5px] relative leading-[130%] inline-block opacity-[0.7]">
                  Linktia Infosystems Ltd – CB7,Jumeirah Business, Center 5 Cluster W, Jumeirah Lakes Towers, Dubai, United Arab Emirates
                </div>
              </Box>
              <Box className="flex flex-col items-start gap-4">
                <div className="relative leading-[130%] font-medium">N7 Banking</div>
                <Box className="flex flex-col items-start gap-2.5">
                  <Box className="flex items-center gap-3.5">
                    <div className="w-[136.5px] relative leading-[130%] inline-block shrink-0 opacity-[0.7]">About Us</div>
                    <img className="h-[14.5px] w-[13.6px] relative object-contain" alt="" src="/Navigation-Spacer.svg" />
                  </Box>
                  <Box className="flex items-center gap-3.5">
                    <div className="w-[136.5px] relative leading-[130%] inline-block shrink-0 opacity-[0.7]">Solutions</div>
                    <img className="h-[14.5px] w-[13.6px] relative object-contain" alt="" src="/3.svg" />
                  </Box>
                  <Box className="flex items-center gap-3.5">
                    <div className="w-[136.5px] relative leading-[130%] inline-block shrink-0 opacity-[0.7]">Contact</div>
                    <img className="h-[14.5px] w-[13.6px] relative object-contain" alt="" src="/3.svg" />
                  </Box>
                  <Box className="flex items-center justify-center gap-3.5">
                    <div className="w-[136.5px] relative leading-[130%] inline-block shrink-0 opacity-[0.7]">Company</div>
                    <img className="h-[14.5px] w-[13.6px] relative object-contain" alt="" src="/3.svg" />
                  </Box>
                  <Box className="flex items-center justify-center gap-3.5">
                    <div className="w-[136.5px] relative leading-[130%] inline-block shrink-0 opacity-[0.7]">Careers</div>
                    <img className="h-[14.5px] w-[13.6px] relative object-contain" alt="" src="/3.svg" />
                  </Box>
                  <Box className="flex items-center justify-center gap-3.5">
                    <div className="w-[136.5px] relative leading-[130%] inline-block shrink-0 opacity-[0.7]">Insights</div>
                    <img className="h-[14.5px] w-[13.6px] relative object-contain" alt="" src="/3.svg" />
                  </Box>
                  <Box className="flex items-center justify-center gap-3.5">
                    <div className="w-[136.5px] relative leading-[130%] inline-block shrink-0 opacity-[0.7]">Core Team</div>
                    <img className="h-[14.5px] w-[13.6px] relative object-contain" alt="" src="/3.svg" />
                  </Box>
                </Box>
                <Box className="flex items-center justify-center gap-3.5">
                  <div className="w-[136.5px] relative leading-[130%] inline-block shrink-0 opacity-[0.7]">Brand Center</div>
                  <img className="h-[14.5px] w-[13.6px] relative object-contain" alt="" src="/Brand-Space.svg" />
                </Box>
              </Box>
            </Box>
            <Box className="flex flex-col items-start gap-[107px]">
              <Box className="flex flex-col items-start gap-4">
                <div className="relative leading-[130%] font-medium">London</div>
                <div className="w-[211.3px] relative leading-[130%] inline-block opacity-[0.7]">
                  Linktia Infosystems Ltd – CB7,Nirmal, Anand Nagar, Suncity Road, Pune, Maharashtra, 411041, India
                </div>
              </Box>
              <Box className="flex flex-col items-start gap-4">
                <div className="relative leading-[130%] font-medium">Our Socials</div>
                <Box className="flex flex-col items-start gap-2.5">
                  <Box className="flex items-center gap-3.5">
                    <div className="w-[136.5px] relative leading-[130%] inline-block shrink-0 opacity-[0.7]">LinkedIn</div>
                    <img className="h-[14.5px] w-[13.6px] relative object-contain" alt="" src="/Social-Divider.svg" />
                  </Box>
                  <Box className="flex items-center gap-3.5">
                    <div className="w-[136.5px] relative leading-[130%] inline-block shrink-0 opacity-[0.7]">X</div>
                    <img className="h-[14.5px] w-[13.6px] relative object-contain" alt="" src="/3.svg" />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <div className="w-full text-left text-base text-[rgba(233,244,249,0.3)] leading-[130%] z-[1]">
            Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as Commercial Brand] — [Registered under the
            Companies Act 2006 in England and Wales | Number of Incorporation 13100992]
          </div>
        </Box>
      </Box>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
