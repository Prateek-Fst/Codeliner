import { Box } from "@mui/material";
import PropTypes from "prop-types";

const Component3 = ({
  className = "",
  property1 = "Frame 61",
  spacerLearn,
}) => {
  return (
    <Box
      className={`flex flex-col items-start gap-[3px] text-right text-sm text-blue font-['Chivo_Mono_Medium'] ${className}`}
    >
      <Box className="flex items-center justify-center gap-[5px]">
        <div className="relative leading-[130%] uppercase">learn more</div>
        <img
          className="h-[14.5px] w-[13.6px] relative object-contain"
          alt=""
          src={spacerLearn}
        />
      </Box>
      <Box className="w-[33.6px] h-px relative border-blue border-solid border-t-[1px] box-border" />
    </Box>
  );
};

Component3.propTypes = {
  className: PropTypes.string,
  spacerLearn: PropTypes.string,

  /** Variant props */
  property1: PropTypes.string,
};

export default Component3;
