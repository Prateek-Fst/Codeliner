import { useMemo } from "react";
import { Typography, Box } from "@mui/material";
import PropTypes from "prop-types";

const MarqueeItem = ({ className = "", label, waveImg, marginLeft }) => {
  const containerStyle = useMemo(() => ({ marginLeft }), [marginLeft]);

  return (
    <Box
      className={`flex items-center gap-6 text-left text-[47px] text-black font-[Archivo] ${className}`}
      style={containerStyle}
    >
      <img className="h-[58px] w-[58px] relative" loading="lazy" alt="" src="/Vector3.svg" />
      <Typography
        className="!m-0 relative text-transparent !bg-clip-text [background:linear-gradient(106.53deg,_#00b4fd,_#003ace)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"
        variant="inherit"
        variantMapping={{ inherit: "h2" }}
        sx={{ fontWeight: "500", lineHeight: "120%" }}
      >
        {label}
      </Typography>
      <img className="h-[58px] w-[58px] relative" loading="lazy" alt="" src="/Vector3.svg" />
      <Typography
        className="!m-0 relative"
        variant="inherit"
        variantMapping={{ inherit: "h2" }}
        sx={{ fontWeight: "600", lineHeight: "120%" }}
      >
        Say
      </Typography>
      <img className="h-[66px] w-[93.1px] relative object-contain animate-wave-tilt" loading="lazy" alt="" src={waveImg} />
      <Typography
        className="!m-0 relative"
        variant="inherit"
        variantMapping={{ inherit: "h2" }}
        sx={{ fontWeight: "600", lineHeight: "120%" }}
      >
        to the new way of banking
      </Typography>
    </Box>
  );
};

MarqueeItem.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  waveImg: PropTypes.string,
  marginLeft: PropTypes.string,
};

export default MarqueeItem;
