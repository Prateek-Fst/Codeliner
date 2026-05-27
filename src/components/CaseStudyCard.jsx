import { useMemo } from "react";
import { Box } from "@mui/material";
import ReadMoreBtn from "./ReadMoreBtn";
import PropTypes from "prop-types";

const CaseStudyCard = ({ className = "", marginLeft, padding, arrowIcon }) => {
  const containerStyle = useMemo(() => ({ marginLeft }), [marginLeft]);
  const innerStyle = useMemo(() => ({ padding }), [padding]);

  return (
    <section
      className={`flex flex-col items-start justify-end !pt-0 !pb-[22.6px] !pl-0 !pr-0 box-border max-w-full text-left text-[8.7px] text-[#2490bb] font-['Chivo_Mono_Medium'] ${className}`}
      style={containerStyle}
    >
      <Box
        className="rounded-[15.7px] bg-[#01141b] overflow-hidden flex items-end !pt-[22.3px] !pb-[25.1px] !pl-5 !pr-2.5 box-border gap-[67.7px] opacity-[0.3] shrink-0 max-w-full z-[1] mq1125:gap-[34px] mq1125:flex-wrap mq450:gap-[17px] mq450:!pt-5 mq450:!pb-5 mq450:box-border"
        style={innerStyle}
      >
        <Box className="flex flex-col items-start justify-end !pt-0 !pb-0.5 !pl-0 !pr-0 box-border max-w-full mq800:min-w-full mq1125:flex-1">
          <Box className="rounded-[10px] bg-[#07193c] overflow-hidden flex items-start !pt-[33.4px] !pb-[33.5px] !pl-[23px] !pr-[23px]">
            <img
              className="w-[321.2px] h-[266.4px] object-contain relative"
              loading="lazy"
              alt=""
              src="/Frame-55.svg"
            />
          </Box>
        </Box>
        <Box className="flex flex-col items-start gap-[31.7px] max-w-full mq800:min-w-full mq1125:flex-1 mq450:gap-4">
          <Box className="flex flex-col items-start gap-[8.9px] shrink-0 max-w-full">
            <Box className="w-[419.5px] flex flex-col items-start gap-[9.6px] shrink-0 max-w-full">
              <div className="relative leading-[130%] uppercase opacity-[0.5]">getting started</div>
              <div className="w-[369.3px] relative text-[32.3px] leading-[120%] font-[Archivo] text-white inline-block mq800:text-[26px] mq800:leading-[31px] mq450:text-[19px] mq450:leading-[23px]">
                How we help brand reach out to more people
              </div>
              <Box className="w-[93.5px] h-[11.4px] flex items-start" />
            </Box>
            <div className="w-[359.8px] h-36 relative text-sm leading-[130%] font-[Archivo] text-transparent !bg-clip-text [background:linear-gradient(180deg,_rgba(233,_244,_249,_0.39)_68.76%,_rgba(233,_244,_249,_0))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0">
              Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer
              onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit
              scoring.
              <br />
              Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer
              onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit
              scoring.
            </div>
          </Box>
          <ReadMoreBtn arrowIcon={arrowIcon} />
        </Box>
      </Box>
    </section>
  );
};

CaseStudyCard.propTypes = {
  className: PropTypes.string,
  arrowIcon: PropTypes.string,
  marginLeft: PropTypes.string,
  padding: PropTypes.string,
};

export default CaseStudyCard;
