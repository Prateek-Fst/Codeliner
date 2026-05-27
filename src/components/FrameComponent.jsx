import { useMemo } from "react";
import { Typography, Box } from "@mui/material";
import Component3 from "./Component3";
import PropTypes from "prop-types";

const FrameComponent = ({
  className = "",
  frame26,
  coreBankingCB7,
  cBHelpsYourFinancialInstitutio,
  coreBankingCB7Opacity,
  property1,
  spacerLearn,
}) => {
  const coreBankingCB7Style = useMemo(() => {
    return {
      opacity: coreBankingCB7Opacity,
    };
  }, [coreBankingCB7Opacity]);

  return (
    <Box
      className={`flex flex-col items-start gap-[26px] text-left text-[22px] text-white font-[Archivo] ${className}`}
    >
      <img
        className="w-[47px] h-[49px] relative"
        loading="lazy"
        alt=""
        src={frame26}
      />
      <Box className="flex flex-col items-start gap-8 mq450:gap-4">
        <Typography
          className="!m-0 w-[263.7px] relative inline-block mq450:text-lg mq450:leading-[21px]"
          variant="inherit"
          variantMapping={{ inherit: "h3" }}
          sx={{ fontWeight: "400", lineHeight: "120%" }}
          style={coreBankingCB7Style}
        >
          {coreBankingCB7}
        </Typography>
        <div className="w-[268.5px] relative text-base leading-[130%] inline-block opacity-[0.7]">
          {cBHelpsYourFinancialInstitutio}
        </div>
      </Box>
      <Component3 property1={property1} spacerLearn={spacerLearn} />
    </Box>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  frame26: PropTypes.string,
  coreBankingCB7: PropTypes.string,
  cBHelpsYourFinancialInstitutio: PropTypes.string,
  property1: PropTypes.any,
  spacerLearn: PropTypes.string,

  /** Style props */
  coreBankingCB7Opacity: PropTypes.string,
};

export default FrameComponent;
