import { useMemo } from "react";
import { Box } from "@mui/material";
import PropTypes from "prop-types";

const PhoneFeatureRow = ({
  className = "",
  phoneImg,
  feature1Icon,
  feature1Title,
  feature1Desc,
  feature2Icon,
  feature2Title,
  feature3Icon,
  feature3Title,
  feature4Icon,
  feature4Title,
  row1Width,
  feature2Flex,
  feature2Width,
  feature2Display,
  row2Width,
  row2AlignItems,
  feature3Flex,
  feature3Width,
  feature3Display,
  row3Width,
  row3JustifyContent,
  feature4Flex,
  feature4Width,
  feature4Display,
}) => {
  const row1Style = useMemo(() => ({ width: row1Width }), [row1Width]);
  const feature2Style = useMemo(() => ({ flex: feature2Flex, width: feature2Width, display: feature2Display }), [feature2Flex, feature2Width, feature2Display]);
  const row2Style = useMemo(() => ({ width: row2Width, alignItems: row2AlignItems }), [row2Width, row2AlignItems]);
  const feature3Style = useMemo(() => ({ flex: feature3Flex, width: feature3Width, display: feature3Display }), [feature3Flex, feature3Width, feature3Display]);
  const row3Style = useMemo(() => ({ width: row3Width, justifyContent: row3JustifyContent }), [row3Width, row3JustifyContent]);
  const feature4Style = useMemo(() => ({ flex: feature4Flex, width: feature4Width, display: feature4Display }), [feature4Flex, feature4Width, feature4Display]);

  return (
    <section className={`flex items-center gap-20 text-left text-base text-black font-[Archivo] mq800:gap-10 mq800:flex-wrap mq450:gap-5 ${className}`}>
      <img className="h-[542.9px] w-[268.3px] relative object-cover mq800:flex-1" loading="lazy" alt="" src={phoneImg} />
      <Box className="flex flex-col items-start !pt-5 !pb-5 !pl-0 !pr-0 gap-[43px] mq800:flex-1 mq450:gap-[21px]">
        <Box className="flex flex-col items-start gap-6">
          <Box className="w-[269px] flex items-center justify-center gap-[5px]">
            <img className="h-[31.4px] w-[30px] relative hidden" alt="" src={feature1Icon} />
            <div className="flex-1 relative leading-[130%] font-medium">{feature1Title}</div>
          </Box>
          <div className="w-[268.5px] relative leading-[130%] inline-block opacity-[0.7]">{feature1Desc}</div>
        </Box>
        <Box className="flex flex-col items-start gap-3">
          <Box className="w-[302px] flex items-center gap-[5px]" style={row1Style}>
            <img className="h-[31.4px] w-[30px] relative" alt="" src={feature2Icon} />
            <div className="flex-1 relative leading-[130%] font-medium opacity-[0.7]" style={feature2Style}>
              {feature2Title}
            </div>
          </Box>
          <Box className="w-[302px] flex items-start gap-[5px]" style={row2Style}>
            <img className="h-[31.4px] w-[30px] relative" alt="" src={feature3Icon} />
            <div className="flex-1 relative leading-[130%] font-medium opacity-[0.7]" style={feature3Style}>
              {feature3Title}
            </div>
          </Box>
          <Box className="w-[302px] flex items-center justify-center gap-[5px]" style={row3Style}>
            <img className="h-[31.4px] w-[30px] relative" alt="" src={feature4Icon} />
            <div className="flex-1 relative leading-[130%] font-medium opacity-[0.7]" style={feature4Style}>
              {feature4Title}
            </div>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

PhoneFeatureRow.propTypes = {
  className: PropTypes.string,
  phoneImg: PropTypes.string,
  feature1Icon: PropTypes.string,
  feature1Title: PropTypes.string,
  feature1Desc: PropTypes.string,
  feature2Icon: PropTypes.string,
  feature2Title: PropTypes.string,
  feature3Icon: PropTypes.string,
  feature3Title: PropTypes.string,
  feature4Icon: PropTypes.string,
  feature4Title: PropTypes.string,
  row1Width: PropTypes.string,
  feature2Flex: PropTypes.string,
  feature2Width: PropTypes.string,
  feature2Display: PropTypes.string,
  row2Width: PropTypes.string,
  row2AlignItems: PropTypes.string,
  feature3Flex: PropTypes.string,
  feature3Width: PropTypes.string,
  feature3Display: PropTypes.string,
  row3Width: PropTypes.string,
  row3JustifyContent: PropTypes.string,
  feature4Flex: PropTypes.string,
  feature4Width: PropTypes.string,
  feature4Display: PropTypes.string,
};

export default PhoneFeatureRow;
