import { Typography } from "@mui/material";
import PropTypes from "prop-types";

const FooterGlow = ({ className = "" }) => {
  return (
    <Typography
      className={`!m-0 shrink-0 text-transparent !bg-clip-text [background:linear-gradient(106.53deg,_#00b4fd,_#00d0fd)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq800:text-[200px] mq450:text-[120px] mq1350:flex-1 ${className}`}
      variant="inherit"
      variantMapping={{ inherit: "h2" }}
      sx={{ fontWeight: "700", fontSize: "280px", lineHeight: "1", letterSpacing: "-0.02em" }}
    >
      N7
    </Typography>
  );
};

FooterGlow.propTypes = {
  className: PropTypes.string,
};

export default FooterGlow;
