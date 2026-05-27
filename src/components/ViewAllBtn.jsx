import { Box } from "@mui/material";
import PropTypes from "prop-types";

const ViewAllBtn = ({ className = "" }) => {
  return (
    <Box
      className={`flex flex-col items-start gap-[3px] text-right text-sm text-blue font-['Chivo_Mono_Medium'] ${className}`}
    >
      <Box className="flex items-center justify-center gap-[5px]">
        <div className="relative leading-[130%] uppercase">view all</div>
        <img
          className="h-[14.5px] w-[13.6px] relative object-contain"
          alt=""
          src="/Link-Separator.svg"
        />
      </Box>
      <Box className="w-[33.6px] h-px relative border-blue border-solid border-t-[1px] box-border" />
    </Box>
  );
};

ViewAllBtn.propTypes = {
  className: PropTypes.string,
};

export default ViewAllBtn;
