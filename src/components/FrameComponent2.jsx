import { Box } from "@mui/material";
import IconElements from "./IconElements";
import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "", property1 = "Default" }) => {
  return (
    <section
      className={`w-[1440px] h-[116px] bg-white1 overflow-hidden shrink-0 flex items-start !pt-[24.8px] !pb-[25.2px] !pl-0 !pr-0 box-border ${className}`}
    >
      <Box className="!ml-[-14px] flex items-start gap-6 shrink-0">
        <IconElements
          n7="N7"
          httpslottiefilescomanimat="/https-lottiefiles-com-animations-hand-wave-animation-Y3i4NmO8TS@2x.png"
        />
        <IconElements
          n7="CB7"
          httpslottiefilescomanimat="/https-lottiefiles-com-animations-hand-wave-animation-Y3i4NmO8TS1@2x.png"
          iconElementsMarginLeft="unset"
        />
      </Box>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.string,
};

export default FrameComponent2;
