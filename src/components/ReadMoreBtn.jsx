import { Box } from "@mui/material";
import PropTypes from "prop-types";

const ReadMoreBtn = ({ className = "", arrowIcon }) => {
  return (
    <Box
      className={`flex flex-col items-start gap-[2.6px] shrink-0 text-right text-[12.2px] text-blue font-['Chivo_Mono_Medium'] ${className}`}
    >
      <Box className="flex items-center justify-center gap-[4.4px]">
        <div className="relative leading-[130%] uppercase">read more</div>
        <img
          className="h-[12.7px] w-[11.9px] relative object-contain"
          alt=""
          src={arrowIcon}
        />
      </Box>
      <Box className="w-[29.3px] h-[0.9px] relative border-blue border-solid border-t-[0.9px] box-border" />
    </Box>
  );
};

ReadMoreBtn.propTypes = {
  className: PropTypes.string,
  arrowIcon: PropTypes.string,
};

export default ReadMoreBtn;
