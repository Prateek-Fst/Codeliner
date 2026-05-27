import { useMemo } from "react";
import { Box } from "@mui/material";
import PropTypes from "prop-types";

const IphoneContent = ({
  className = "",
  iPhone13Pro,
  frame15,
  fullyCompliantWithRegulatory,
  theGovernanceOfRiskManagement,
  frame151,
  preIntegratedSecuritySystem,
  frame152,
  fullyCompliantWithRegulatory1,
  frame153,
  digitallyConnectedCore,
  regulationsContainerWidth,
  preIntegratedSecuritySystemFlex,
  preIntegratedSecuritySystemWidth,
  preIntegratedSecuritySystemDisplay,
  regulationsContainerWidth1,
  regulationsContainerAlignItems,
  fullyCompliantWithFlex,
  fullyCompliantWithWidth,
  fullyCompliantWithDisplay,
  regulationsContainerWidth2,
  regulationsContainerJustifyContent,
  digitallyConnectedCoreFlex,
  digitallyConnectedCoreWidth,
  digitallyConnectedCoreDisplay,
}) => {
  const regulationsContainerStyle = useMemo(() => {
    return {
      width: regulationsContainerWidth,
    };
  }, [regulationsContainerWidth]);

  const preIntegratedSecuritySystemStyle = useMemo(() => {
    return {
      flex: preIntegratedSecuritySystemFlex,
      width: preIntegratedSecuritySystemWidth,
      display: preIntegratedSecuritySystemDisplay,
    };
  }, [
    preIntegratedSecuritySystemFlex,
    preIntegratedSecuritySystemWidth,
    preIntegratedSecuritySystemDisplay,
  ]);

  const regulationsContainer1Style = useMemo(() => {
    return {
      width: regulationsContainerWidth1,
      alignItems: regulationsContainerAlignItems,
    };
  }, [regulationsContainerWidth1, regulationsContainerAlignItems]);

  const fullyCompliantWithStyle = useMemo(() => {
    return {
      flex: fullyCompliantWithFlex,
      width: fullyCompliantWithWidth,
      display: fullyCompliantWithDisplay,
    };
  }, [
    fullyCompliantWithFlex,
    fullyCompliantWithWidth,
    fullyCompliantWithDisplay,
  ]);

  const regulationsContainer2Style = useMemo(() => {
    return {
      width: regulationsContainerWidth2,
      justifyContent: regulationsContainerJustifyContent,
    };
  }, [regulationsContainerWidth2, regulationsContainerJustifyContent]);

  const digitallyConnectedCoreStyle = useMemo(() => {
    return {
      flex: digitallyConnectedCoreFlex,
      width: digitallyConnectedCoreWidth,
      display: digitallyConnectedCoreDisplay,
    };
  }, [
    digitallyConnectedCoreFlex,
    digitallyConnectedCoreWidth,
    digitallyConnectedCoreDisplay,
  ]);

  return (
    <section
      className={`flex items-center gap-20 text-left text-base text-black font-[Archivo] mq800:gap-10 mq800:flex-wrap mq450:gap-5 ${className}`}
    >
      <img
        className="h-[542.9px] w-[268.3px] relative object-cover mq800:flex-1"
        loading="lazy"
        alt=""
        src={iPhone13Pro}
      />
      <Box className="flex flex-col items-start !pt-5 !pb-5 !pl-0 !pr-0 gap-[43px] mq800:flex-1 mq450:gap-[21px]">
        <Box className="flex flex-col items-start gap-6">
          <Box className="w-[269px] flex items-center justify-center gap-[5px]">
            <img
              className="h-[31.4px] w-[30px] relative hidden"
              alt=""
              src={frame15}
            />
            <div className="flex-1 relative leading-[130%] font-medium">
              {fullyCompliantWithRegulatory}
            </div>
          </Box>
          <div className="w-[268.5px] relative leading-[130%] inline-block opacity-[0.7]">
            {theGovernanceOfRiskManagement}
          </div>
        </Box>
        <Box className="flex flex-col items-start gap-3">
          <Box
            className="w-[302px] flex items-center gap-[5px]"
            style={regulationsContainerStyle}
          >
            <img
              className="h-[31.4px] w-[30px] relative"
              alt=""
              src={frame151}
            />
            <div
              className="flex-1 relative leading-[130%] font-medium opacity-[0.7]"
              style={preIntegratedSecuritySystemStyle}
            >
              {preIntegratedSecuritySystem}
            </div>
          </Box>
          <Box
            className="w-[302px] flex items-start gap-[5px]"
            style={regulationsContainer1Style}
          >
            <img
              className="h-[31.4px] w-[30px] relative"
              alt=""
              src={frame152}
            />
            <div
              className="flex-1 relative leading-[130%] font-medium opacity-[0.7]"
              style={fullyCompliantWithStyle}
            >
              {fullyCompliantWithRegulatory1}
            </div>
          </Box>
          <Box
            className="w-[302px] flex items-center justify-center gap-[5px]"
            style={regulationsContainer2Style}
          >
            <img
              className="h-[31.4px] w-[30px] relative"
              alt=""
              src={frame153}
            />
            <div
              className="flex-1 relative leading-[130%] font-medium opacity-[0.7]"
              style={digitallyConnectedCoreStyle}
            >
              {digitallyConnectedCore}
            </div>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

IphoneContent.propTypes = {
  className: PropTypes.string,
  iPhone13Pro: PropTypes.string,
  frame15: PropTypes.string,
  fullyCompliantWithRegulatory: PropTypes.string,
  theGovernanceOfRiskManagement: PropTypes.string,
  frame151: PropTypes.string,
  preIntegratedSecuritySystem: PropTypes.string,
  frame152: PropTypes.string,
  fullyCompliantWithRegulatory1: PropTypes.string,
  frame153: PropTypes.string,
  digitallyConnectedCore: PropTypes.string,

  /** Style props */
  regulationsContainerWidth: PropTypes.string,
  preIntegratedSecuritySystemFlex: PropTypes.string,
  preIntegratedSecuritySystemWidth: PropTypes.string,
  preIntegratedSecuritySystemDisplay: PropTypes.string,
  regulationsContainerWidth1: PropTypes.string,
  regulationsContainerAlignItems: PropTypes.string,
  fullyCompliantWithFlex: PropTypes.string,
  fullyCompliantWithWidth: PropTypes.string,
  fullyCompliantWithDisplay: PropTypes.string,
  regulationsContainerWidth2: PropTypes.string,
  regulationsContainerJustifyContent: PropTypes.string,
  digitallyConnectedCoreFlex: PropTypes.string,
  digitallyConnectedCoreWidth: PropTypes.string,
  digitallyConnectedCoreDisplay: PropTypes.string,
};

export default IphoneContent;
