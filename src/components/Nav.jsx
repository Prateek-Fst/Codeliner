import { useMemo } from "react";
import { Box } from "@mui/material";
import PropTypes from "prop-types";

const Nav = ({
  className = "",
  property1 = "profile",
  homeButton1,
  creditCard11,
  swap1,
  user11,
  navWidth,
  navHeight,
  navPadding,
  navGap,
  ellipseBoxWidth,
  ellipseBoxBackdropFilter,
  rectangleBoxBackdropFilter,
  rectangleBoxBorderRadius,
  frameBoxWidth,
  frameBoxHeight,
  groupBoxWidth,
  groupBoxHeight,
  frameBoxWidth1,
  frameBoxHeight1,
  frameBoxPadding,
  homeButton1IconHeight,
  homeButton1IconWidth,
  homeWidth,
  homeHeight,
  homeFontSize,
  homeIndicatorBorderRadius,
  homeIndicatorWidth,
  groupBoxHeight1,
  groupBoxWidth1,
  navIconsWidth,
  navIconsHeight,
  navIconsPadding,
  creditCard11IconHeight,
  creditCard11IconWidth,
  cardWidth,
  cardHeight,
  cardFontSize,
  groupBoxHeight2,
  groupBoxWidth2,
  frameBoxWidth2,
  frameBoxHeight2,
  frameBoxPadding1,
  swap1IconHeight,
  swap1IconWidth,
  transactionWidth,
  transactionHeight,
  transactionFontSize,
  groupBoxHeight3,
  groupBoxWidth3,
  frameBoxWidth3,
  frameBoxHeight3,
  frameBoxPadding2,
  user11IconHeight,
  user11IconWidth,
  profileWidth,
  profileHeight,
  profileFontSize,
}) => {
  const navStyle = useMemo(() => {
    return {
      width: navWidth,
      height: navHeight,
      padding: navPadding,
      gap: navGap,
    };
  }, [navWidth, navHeight, navPadding, navGap]);

  const ellipseBoxStyle = useMemo(() => {
    return {
      width: ellipseBoxWidth,
      backdropFilter: ellipseBoxBackdropFilter,
    };
  }, [ellipseBoxWidth, ellipseBoxBackdropFilter]);

  const rectangleBoxStyle = useMemo(() => {
    return {
      backdropFilter: rectangleBoxBackdropFilter,
      borderRadius: rectangleBoxBorderRadius,
    };
  }, [rectangleBoxBackdropFilter, rectangleBoxBorderRadius]);

  const frameBoxStyle = useMemo(() => {
    return {
      width: frameBoxWidth,
      height: frameBoxHeight,
    };
  }, [frameBoxWidth, frameBoxHeight]);

  const groupBoxStyle = useMemo(() => {
    return {
      width: groupBoxWidth,
      height: groupBoxHeight,
    };
  }, [groupBoxWidth, groupBoxHeight]);

  const frameBox1Style = useMemo(() => {
    return {
      width: frameBoxWidth1,
      height: frameBoxHeight1,
      padding: frameBoxPadding,
    };
  }, [frameBoxWidth1, frameBoxHeight1, frameBoxPadding]);

  const homeButton1IconStyle = useMemo(() => {
    return {
      height: homeButton1IconHeight,
      width: homeButton1IconWidth,
    };
  }, [homeButton1IconHeight, homeButton1IconWidth]);

  const homeStyle = useMemo(() => {
    return {
      width: homeWidth,
      height: homeHeight,
      fontSize: homeFontSize,
    };
  }, [homeWidth, homeHeight, homeFontSize]);

  const homeIndicatorStyle = useMemo(() => {
    return {
      borderRadius: homeIndicatorBorderRadius,
      width: homeIndicatorWidth,
    };
  }, [homeIndicatorBorderRadius, homeIndicatorWidth]);

  const groupBox1Style = useMemo(() => {
    return {
      height: groupBoxHeight1,
      width: groupBoxWidth1,
    };
  }, [groupBoxHeight1, groupBoxWidth1]);

  const navIconsStyle = useMemo(() => {
    return {
      width: navIconsWidth,
      height: navIconsHeight,
      padding: navIconsPadding,
    };
  }, [navIconsWidth, navIconsHeight, navIconsPadding]);

  const creditCard11IconStyle = useMemo(() => {
    return {
      height: creditCard11IconHeight,
      width: creditCard11IconWidth,
    };
  }, [creditCard11IconHeight, creditCard11IconWidth]);

  const cardStyle = useMemo(() => {
    return {
      width: cardWidth,
      height: cardHeight,
      fontSize: cardFontSize,
    };
  }, [cardWidth, cardHeight, cardFontSize]);

  const groupBox2Style = useMemo(() => {
    return {
      height: groupBoxHeight2,
      width: groupBoxWidth2,
    };
  }, [groupBoxHeight2, groupBoxWidth2]);

  const frameBox2Style = useMemo(() => {
    return {
      width: frameBoxWidth2,
      height: frameBoxHeight2,
      padding: frameBoxPadding1,
    };
  }, [frameBoxWidth2, frameBoxHeight2, frameBoxPadding1]);

  const swap1IconStyle = useMemo(() => {
    return {
      height: swap1IconHeight,
      width: swap1IconWidth,
    };
  }, [swap1IconHeight, swap1IconWidth]);

  const transactionStyle = useMemo(() => {
    return {
      width: transactionWidth,
      height: transactionHeight,
      fontSize: transactionFontSize,
    };
  }, [transactionWidth, transactionHeight, transactionFontSize]);

  const groupBox3Style = useMemo(() => {
    return {
      height: groupBoxHeight3,
      width: groupBoxWidth3,
    };
  }, [groupBoxHeight3, groupBoxWidth3]);

  const frameBox3Style = useMemo(() => {
    return {
      width: frameBoxWidth3,
      height: frameBoxHeight3,
      padding: frameBoxPadding2,
    };
  }, [frameBoxWidth3, frameBoxHeight3, frameBoxPadding2]);

  const user11IconStyle = useMemo(() => {
    return {
      height: user11IconHeight,
      width: user11IconWidth,
    };
  }, [user11IconHeight, user11IconWidth]);

  const profileStyle = useMemo(() => {
    return {
      width: profileWidth,
      height: profileHeight,
      fontSize: profileFontSize,
    };
  }, [profileWidth, profileHeight, profileFontSize]);

  return (
    <Box
      className={`w-[209.8px] h-[43px] flex items-end !pt-0 !pb-[6.8px] !pl-[12.9px] !pr-[12.4px] box-border relative isolate gap-[27.5px] z-[1] text-left text-[7.5px] text-shape font-[Gilroy-Medium] ${className}`}
      style={navStyle}
    >
      <Box
        className="h-full w-[43px] absolute !!m-[0 important] top-[0px] bottom-[0px] left-[0px] [backdrop-filter:blur(43px)] rounded-[50%] [background:radial-gradient(45.63%_45.63%_at_50%_50%,_rgba(182,_239,_17,_0),_rgba(182,_239,_17,_0))] z-[0] shrink-0"
        style={ellipseBoxStyle}
      />
      <Box
        className="h-full w-full absolute !!m-[0 important] top-[0px] right-[0px] bottom-[0px] left-[0px] [backdrop-filter:blur(43px)] rounded-t-[16.14px] rounded-b-none bg-[rgba(231,231,231,0.8)] z-[1] shrink-0"
        style={rectangleBoxStyle}
      />
      <Box
        className="relative w-[21px] h-[36.2px] z-[6] shrink-0"
        style={frameBoxStyle}
      >
        <Box
          className="absolute top-[7px] left-[0px] w-[21px] h-[29.2px] flex flex-col items-start gap-[4.3px]"
          style={groupBoxStyle}
        >
          <Box
            className="w-[16.7px] h-[12.9px] flex items-start !pt-0 !pb-0 !pl-[3.8px] !pr-0 box-border"
            style={frameBox1Style}
          >
            <img
              className="h-[12.9px] w-[12.9px] relative"
              alt=""
              src={homeButton1}
              style={homeButton1IconStyle}
            />
          </Box>
          <div
            className="w-[21px] h-3 relative leading-[11.8px] inline-block"
            style={homeStyle}
          >
            Home
          </div>
        </Box>
        <Box
          className="absolute top-[0px] left-[0.5px] rounded-[12.9px] bg-[#081e69] w-[19.9px] h-[0.8px]"
          style={homeIndicatorStyle}
        />
      </Box>
      <Box
        className="h-[29.2px] w-[18px] flex flex-col items-start gap-[4.3px] z-[3] shrink-0"
        style={groupBox1Style}
      >
        <Box
          className="w-[15.6px] h-[12.9px] flex items-start !pt-0 !pb-0 !pl-[2.7px] !pr-0 box-border z-[2]"
          style={navIconsStyle}
        >
          <img
            className="h-[12.9px] w-[12.9px] relative"
            alt=""
            src={creditCard11}
            style={creditCard11IconStyle}
          />
        </Box>
        <div
          className="w-[18px] h-3 relative leading-[11.8px] inline-block z-[1]"
          style={cardStyle}
        >
          Card
        </div>
      </Box>
      <Box
        className="h-[29.2px] w-[41px] flex flex-col items-start gap-[4.3px] z-[4] shrink-0"
        style={groupBox2Style}
      >
        <Box
          className="w-[26.3px] h-[12.9px] flex items-start !pt-0 !pb-0 !pl-[13.4px] !pr-0 box-border z-[2]"
          style={frameBox2Style}
        >
          <img
            className="h-[12.9px] w-[12.9px] relative"
            alt=""
            src={swap1}
            style={swap1IconStyle}
          />
        </Box>
        <div
          className="w-[41px] h-3 relative leading-[11.8px] inline-block z-[1]"
          style={transactionStyle}
        >
          Transaction
        </div>
      </Box>
      <Box
        className="h-[29.2px] w-[22px] flex flex-col items-start gap-[4.3px] z-[4] shrink-0"
        style={groupBox3Style}
      >
        <Box
          className="w-[17.2px] h-[12.9px] flex items-start !pt-0 !pb-0 !pl-[4.3px] !pr-0 box-border z-[2]"
          style={frameBox3Style}
        >
          <img
            className="h-[12.9px] w-[12.9px] relative"
            alt=""
            src={user11}
            style={user11IconStyle}
          />
        </Box>
        <div
          className="w-[22px] h-3 relative leading-[11.8px] inline-block z-[1]"
          style={profileStyle}
        >
          Profile
        </div>
      </Box>
    </Box>
  );
};

Nav.propTypes = {
  className: PropTypes.string,
  homeButton1: PropTypes.string,
  creditCard11: PropTypes.string,
  swap1: PropTypes.string,
  user11: PropTypes.string,

  /** Variant props */
  property1: PropTypes.string,

  /** Style props */
  navWidth: PropTypes.string,
  navHeight: PropTypes.string,
  navPadding: PropTypes.string,
  navGap: PropTypes.string,
  ellipseBoxWidth: PropTypes.string,
  ellipseBoxBackdropFilter: PropTypes.string,
  rectangleBoxBackdropFilter: PropTypes.string,
  rectangleBoxBorderRadius: PropTypes.string,
  frameBoxWidth: PropTypes.string,
  frameBoxHeight: PropTypes.string,
  groupBoxWidth: PropTypes.string,
  groupBoxHeight: PropTypes.string,
  frameBoxWidth1: PropTypes.string,
  frameBoxHeight1: PropTypes.string,
  frameBoxPadding: PropTypes.string,
  homeButton1IconHeight: PropTypes.string,
  homeButton1IconWidth: PropTypes.string,
  homeWidth: PropTypes.string,
  homeHeight: PropTypes.string,
  homeFontSize: PropTypes.string,
  homeIndicatorBorderRadius: PropTypes.string,
  homeIndicatorWidth: PropTypes.string,
  groupBoxHeight1: PropTypes.string,
  groupBoxWidth1: PropTypes.string,
  navIconsWidth: PropTypes.string,
  navIconsHeight: PropTypes.string,
  navIconsPadding: PropTypes.string,
  creditCard11IconHeight: PropTypes.string,
  creditCard11IconWidth: PropTypes.string,
  cardWidth: PropTypes.string,
  cardHeight: PropTypes.string,
  cardFontSize: PropTypes.string,
  groupBoxHeight2: PropTypes.string,
  groupBoxWidth2: PropTypes.string,
  frameBoxWidth2: PropTypes.string,
  frameBoxHeight2: PropTypes.string,
  frameBoxPadding1: PropTypes.string,
  swap1IconHeight: PropTypes.string,
  swap1IconWidth: PropTypes.string,
  transactionWidth: PropTypes.string,
  transactionHeight: PropTypes.string,
  transactionFontSize: PropTypes.string,
  groupBoxHeight3: PropTypes.string,
  groupBoxWidth3: PropTypes.string,
  frameBoxWidth3: PropTypes.string,
  frameBoxHeight3: PropTypes.string,
  frameBoxPadding2: PropTypes.string,
  user11IconHeight: PropTypes.string,
  user11IconWidth: PropTypes.string,
  profileWidth: PropTypes.string,
  profileHeight: PropTypes.string,
  profileFontSize: PropTypes.string,
};

export default Nav;
