import { useMemo } from "react";
import { Box, Typography } from "@mui/material";
import Component3 from "./Component3";
import PropTypes from "prop-types";

const FrameComponent1 = ({
  className = "",
  frame26,
  loanOriginationSystem,
  frameBoxPadding,
  property1,
  spacerLearn,
}) => {
  const frameBox4Style = useMemo(() => {
    return {
      padding: frameBoxPadding,
    };
  }, [frameBoxPadding]);

  return (
    <Box
      className={`flex flex-col items-start gap-[26px] text-left text-sm text-white font-['Chivo_Mono_Medium'] ${className}`}
    >
      <Box
        className="self-stretch flex items-end justify-between !pt-0 !pb-0 !pl-0 !pr-[26px] gap-5"
        style={frameBox4Style}
      >
        <img
          className="h-[49px] w-[47px] relative"
          loading="lazy"
          alt=""
          src={frame26}
        />
        <div className="relative leading-[130%] uppercase opacity-[0.6]">
          NBFC
        </div>
      </Box>
      <Box className="flex flex-col items-start gap-8 text-[22px] font-[Archivo] mq450:gap-4">
        <Typography
          className="!m-0 w-[263.7px] relative inline-block opacity-[0.9] mq450:text-lg mq450:leading-[21px]"
          variant="inherit"
          variantMapping={{ inherit: "h3" }}
          sx={{ fontWeight: "400", lineHeight: "120%" }}
        >
          {loanOriginationSystem}
        </Typography>
        <div className="w-[268.5px] relative text-base leading-[130%] inline-block opacity-[0.7]">{`N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients `}</div>
      </Box>
      <Component3 property1={property1} spacerLearn={spacerLearn} />
    </Box>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  frame26: PropTypes.string,
  loanOriginationSystem: PropTypes.string,
  property1: PropTypes.any,
  spacerLearn: PropTypes.string,

  /** Style props */
  frameBoxPadding: PropTypes.string,
};

export default FrameComponent1;
