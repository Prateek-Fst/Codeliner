import { Box } from "@mui/material";
import MarqueeItem from "./MarqueeItem";
import PropTypes from "prop-types";

const MarqueeBanner = ({ className = "" }) => {
  return (
    <section
      className={`w-[1440px] h-[116px] bg-white1 overflow-hidden shrink-0 flex items-start !pt-[24.8px] !pb-[25.2px] !pl-0 !pr-0 box-border ${className}`}
    >
      <Box className="!ml-[-14px] flex items-start gap-6 shrink-0">
        <MarqueeItem
          label="N7"
          waveImg="/https-lottiefiles-com-animations-hand-wave-animation-Y3i4NmO8TS@2x.png"
        />
        <MarqueeItem
          label="CB7"
          waveImg="/https-lottiefiles-com-animations-hand-wave-animation-Y3i4NmO8TS1@2x.png"
          marginLeft="unset"
        />
      </Box>
    </section>
  );
};

MarqueeBanner.propTypes = {
  className: PropTypes.string,
};

export default MarqueeBanner;
