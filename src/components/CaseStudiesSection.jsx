import { Typography, Box, Button } from "@mui/material";
import CaseStudyCard from "./CaseStudyCard";
import Logo from "./Logo";
import ViewAllBtn from "./ViewAllBtn";
import PropTypes from "prop-types";

const CaseStudiesSection = ({ className = "" }) => {
  return (
    <section
      className={`w-[1440px] bg-black overflow-hidden flex flex-col items-center !pt-[43.2px] !pb-[179.5px] !pl-[21px] !pr-5 box-border gap-[72px] max-w-full text-center text-[53px] text-white font-[Archivo] mq800:gap-9 mq1125:h-auto mq1125:!pt-7 mq1125:!pb-[117px] mq1125:box-border mq450:gap-[18px] mq450:!pt-5 mq450:!pb-[76px] mq450:box-border ${className}`}
    >
      <Box className="flex items-start !pt-0 !pb-0 !pl-[365px] !pr-[366px] mq800:!pl-[91px] mq800:!pr-[91px] mq800:box-border mq450:!pl-5 mq450:!pr-5 mq450:box-border mq1350:!pl-[182px] mq1350:!pr-[183px] mq1350:box-border">
        <Typography
          className="!m-0 h-16 w-[463.3px] relative inline-block shrink-0 mq800:text-[42px] mq800:leading-[51px] mq450:text-[32px] mq450:leading-[38px]"
          variant="inherit"
          variantMapping={{ inherit: "h2" }}
          sx={{ fontWeight: "400", lineHeight: "120%", letterSpacing: "-0.01em" }}
        >
          Our Case Studies
        </Typography>
      </Box>
      <Box className="flex flex-col items-end gap-[33.3px] max-w-full mq800:gap-[17px]">
        <Box className="flex items-end shrink-0 max-w-full">
          <CaseStudyCard arrowIcon="/Insights-Navigator.svg" />
          <section className="rounded-[18px] bg-[#01141b] overflow-hidden flex items-end !pt-[25.5px] !pb-[31px] !pl-6 !pr-3 box-border gap-[77.5px] shrink-0 max-w-full z-[2] !ml-[-797.6px] relative text-left text-xs text-[#2490bb] font-['Chivo_Mono_Medium'] mq800:gap-[19px] mq1125:gap-[39px] mq1125:flex-wrap mq450:!pb-5 mq450:box-border">
            <Box className="rounded-[11.4px] bg-[#07193c] overflow-hidden flex items-start !pt-10 !pb-10 !pl-[27px] !pr-[27px] box-border max-w-full mq800:min-w-full mq1125:flex-1 mq450:!pt-[25.5px] mq450:!pb-[26px] mq450:box-border">
              <Box className="w-[367.5px] flex items-center justify-center flex-wrap content-center gap-x-[90px] gap-y-6 mq450:gap-[45px]">
                <img className="h-[138.7px] w-[138px] relative" alt="" src="/Frame-263.svg" />
                <img className="h-[138.7px] w-[138px] relative" loading="lazy" alt="" src="/Frame-263.svg" />
                <img className="h-[138.7px] w-[138px] relative" alt="" src="/Frame-263.svg" />
                <img className="h-[138.7px] w-[138px] relative" loading="lazy" alt="" src="/Frame-263.svg" />
              </Box>
            </Box>
            <Box className="flex flex-col items-start justify-end !pt-0 !pb-[24.5px] !pl-0 !pr-0 box-border max-w-full mq800:min-w-full mq1125:flex-1">
              <Box className="flex flex-col items-start gap-[46px] mq800:gap-[23px]">
                <Box className="flex flex-col items-start gap-2">
                  <Box className="w-[480px] flex flex-col items-start gap-[11px]">
                    <div className="relative leading-[130%] uppercase opacity-[0.8]">getting started</div>
                    <Typography
                      className="!m-0 w-[422.6px] relative text-white inline-block mq800:text-[34px] mq800:leading-[41px] mq450:text-[26px] mq450:leading-[31px]"
                      variant="inherit"
                      variantMapping={{ inherit: "h1" }}
                      sx={{ fontFamily: "Archivo", fontWeight: "400", fontSize: "43px", lineHeight: "120%" }}
                    >
                      How we help brand reach out to more people
                    </Typography>
                    <Box className="w-[107px] h-[13px] flex items-start" />
                  </Box>
                  <Logo name1="Zoomerr" vector="/Vector1.svg" label="Zoomerr" />
                </Box>
                <Button
                  className="!pt-2.5 !pb-2.5 !pl-[183px] !pr-[183px]"
                  disableElevation
                  variant="outlined"
                  sx={{
                    color: "rgba(233, 244, 249, 0.5)",
                    fontSize: "12",
                    borderColor: "rgba(233, 244, 249, 0.5)",
                    borderRadius: "10px",
                    "&:hover": { borderColor: "rgba(233, 244, 249, 0.5)" },
                  }}
                >
                  read more
                </Button>
              </Box>
            </Box>
          </section>
          <CaseStudyCard
            marginLeft="-797.6px"
            padding="22.3px 10px 25.1px 21px"
            arrowIcon="/3.svg"
          />
        </Box>
        <Box className="flex items-start justify-end !pt-0 !pb-0 !pl-[89px] !pr-[89px] box-border max-w-full mq800:!pl-11 mq800:!pr-11 mq800:box-border mq450:!pl-5 mq450:!pr-5 mq450:box-border">
          <Box className="w-[629.1px] flex items-start justify-between gap-5 shrink-0 max-w-full mq450:flex-wrap mq450:gap-5">
            <Box className="flex items-center justify-center gap-[31px]">
              <img className="h-[42px] w-[42px] relative object-contain" loading="lazy" alt="" src="/Dots-Elements.svg" />
              <Box className="flex items-start gap-[7.7px]">
                <Box className="h-3 w-3 relative rounded-[50%] border-[#0b4b63] border-solid border-[0.9px] box-border" />
                <Box className="h-[11.9px] w-[38px] relative rounded-md bg-[#0b4b63]" />
                <Box className="h-3 w-3 relative rounded-[50%] border-[#0b4b63] border-solid border-[0.9px] box-border" />
                <Box className="h-3 w-3 relative rounded-[50%] border-[#0b4b63] border-solid border-[0.9px] box-border" />
              </Box>
              <img className="h-[42px] w-[42px] relative" loading="lazy" alt="" src="/Dots-Elements.svg" />
            </Box>
            <Box className="flex flex-col items-start !pt-[10.5px] !pb-0 !pl-0 !pr-0">
              <ViewAllBtn />
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

CaseStudiesSection.propTypes = {
  className: PropTypes.string,
};

export default CaseStudiesSection;
