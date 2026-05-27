import { Typography, Box } from "@mui/material";
import PropTypes from "prop-types";

const getLogoContainerStyle = (styleKey) => {
  switch (styleKey) {
    case "Zoomerr":
      return "[&]:gap-[7.5px]";
  }
};
const getVectorIconStyle = (styleKey) => {
  switch (styleKey) {
    case "Zoomerr":
      return "[&]:h-[30px] [&]:w-[30px]";
    case "SmartFinder":
      return "[&]:w-[19.1px]";
    case "ArtVenue":
      return "[&]:w-[32.1px]";
    case "Kontrastr":
      return "[&]:h-[16.8px] [&]:w-[13.7px]";
    case "Waves":
      return "[&]:w-[12.1px]";
  }
};
const getSHELLSTextStyle = (styleKey) => {
  switch (styleKey) {
    case "Zoomerr":
      return "[&]:text-[22.5px] [&]:!m-0 [&]:font-bold";
    case "SmartFinder":
    case "ArtVenue":
    case "Kontrastr":
      return "[&]:font-bold";
    case "Waves":
      return "[&]:text-[10.3px] [&]:leading-[unset] [&]:font-[unset]";
  }
};

const Logo = ({ className = "", name1 = "Header-Logo", vector, sHELLS }) => {
  const variantKey = `${name1}`;

  return (
    <Box
      className={`flex items-center justify-center gap-[4.6px] text-left text-[13.8px] text-[#586e84] font-[Roboto] ${getLogoContainerStyle(
        variantKey
      )} ${className}`}
    >
      <img
        className={`h-[18.4px] w-[17.5px] relative ${getVectorIconStyle(
          variantKey
        )}`}
        alt=""
        src={vector}
      />
      <Typography
        className={`relative ${getSHELLSTextStyle(variantKey)}`}
        variant="inherit"
        variantMapping={{ inherit: "b" }}
        sx={{ lineHeight: "110%", fontWeight: "700" }}
      >
        {sHELLS}
      </Typography>
    </Box>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
  vector: PropTypes.string,
  sHELLS: PropTypes.string,

  /** Variant props */
  name1: PropTypes.string,
};

export default Logo;
