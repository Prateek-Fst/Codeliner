import { useMemo } from "react";
import { Typography, Box } from "@mui/material";
import LearnMoreBtn from "./LearnMoreBtn";
import PropTypes from "prop-types";

const SolutionCard = ({ className = "", icon, title, description, titleOpacity, arrowIcon }) => {
  const titleStyle = useMemo(() => ({ opacity: titleOpacity }), [titleOpacity]);

  return (
    <Box className={`flex flex-col items-start gap-[26px] text-left text-[22px] text-white font-[Archivo] ${className}`}>
      <img className="w-[47px] h-[49px] relative" loading="lazy" alt="" src={icon} />
      <Box className="flex flex-col items-start gap-8 mq450:gap-4">
        <Typography
          className="!m-0 w-[263.7px] relative inline-block mq450:text-lg mq450:leading-[21px]"
          variant="inherit"
          variantMapping={{ inherit: "h3" }}
          sx={{ fontWeight: "400", lineHeight: "120%" }}
          style={titleStyle}
        >
          {title}
        </Typography>
        <div className="w-[268.5px] relative text-base leading-[130%] inline-block opacity-[0.7]">
          {description}
        </div>
      </Box>
      <LearnMoreBtn arrowIcon={arrowIcon} />
    </Box>
  );
};

SolutionCard.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  titleOpacity: PropTypes.string,
  arrowIcon: PropTypes.string,
};

export default SolutionCard;
