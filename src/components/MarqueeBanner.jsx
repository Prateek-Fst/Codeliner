import { Box } from "@mui/material";
import MarqueeItem from "./MarqueeItem";
import PropTypes from "prop-types";

const MarqueeBanner = ({ className = "" }) => {
  return (
    <section
      className={`w-full h-[116px] bg-white1 overflow-hidden shrink-0 flex items-center box-border ${className}`}
    >
      <Box className="animate-marquee flex items-center gap-12 shrink-0">
        {/* First Sequence */}
        <MarqueeItem
          label="N7"
          waveImg="/https-lottiefiles-com-animations-hand-wave-animation-Y3i4NmO8TS@2x.png"
        />
        <MarqueeItem
          label="CB7"
          waveImg="/https-lottiefiles-com-animations-hand-wave-animation-Y3i4NmO8TS1@2x.png"
          marginLeft="unset"
        />
        {/* Second Sequence for seamless infinite loop */}
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
