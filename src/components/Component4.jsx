import { Box } from "@mui/material";
import PropTypes from "prop-types";

const Component4 = ({ className = "", property1 = "Frame 61" }) => {
  return (
    <Box
      className={`flex flex-col items-start gap-[3px] text-right text-sm font-['Chivo_Mono_Medium'] ${className}`}
    >
      <Box className="flex items-center justify-center gap-[5px]">
        <div className="relative leading-[130%] uppercase text-transparent !bg-clip-text [background:linear-gradient(95.48deg,_#00b4fd,_#003ace_98.3%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          learn more
        </div>
        <img
          className="h-[14.5px] w-[13.6px] relative object-contain"
          alt=""
          src="/Padding.svg"
        />
      </Box>
      <Box className="w-[33.6px] h-px relative [background:linear-gradient(108.43deg,_#00b4fd,_#003ace)_border-box] [border-top:1px_solid_transparent] box-border" />
    </Box>
  );
};

Component4.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.string,
};

export default Component4;
