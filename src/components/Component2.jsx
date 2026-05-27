import { Box } from "@mui/material";
import PropTypes from "prop-types";

const Component2 = ({
  className = "",
  property1 = "Frame 61",
  insightsNavigator,
}) => {
  return (
    <Box
      className={`flex flex-col items-start gap-[2.6px] shrink-0 text-right text-[12.2px] text-blue font-['Chivo_Mono_Medium'] ${className}`}
    >
      <Box className="flex items-center justify-center gap-[4.4px]">
        <div className="relative leading-[130%] uppercase">read more</div>
        <img
          className="h-[12.7px] w-[11.9px] relative object-contain"
          alt=""
          src={insightsNavigator}
        />
      </Box>
      <Box className="w-[29.3px] h-[0.9px] relative border-blue border-solid border-t-[0.9px] box-border" />
    </Box>
  );
};

Component2.propTypes = {
  className: PropTypes.string,
  insightsNavigator: PropTypes.string,

  /** Variant props */
  property1: PropTypes.string,
};

export default Component2;
