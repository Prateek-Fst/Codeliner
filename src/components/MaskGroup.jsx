import { Box } from "@mui/material";
import PropTypes from "prop-types";

const MaskGroup = ({ className = "", property1 = "Default" }) => {
  return (
    <Box
      className={`h-[232px] w-[440px] flex items-start relative isolate mq800:min-w-full mq1350:flex-1 ${className}`}
    >
      <Box className="h-[301.9px] w-[680.7px] absolute !!m-[0 important] right-[-141.2px] bottom-[-59.8px] bg-[#01b4fd] z-[0] shrink-0" />
      <Box className="h-[251.4px] w-[251.4px] absolute !!m-[0 important] right-[12.9px] bottom-[-73.1px] [filter:blur(100px)] rounded-[50%] bg-[#013acf] z-[1] shrink-0" />
      <Box className="h-[127.6px] w-[127.6px] absolute !!m-[0 important] bottom-[-4.7px] left-[67.3px] [filter:blur(100px)] rounded-[50%] bg-[#74f1ae] mix-blend-color-dodge z-[2] shrink-0" />
    </Box>
  );
};

MaskGroup.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.string,
};

export default MaskGroup;
