import { Typography, Box, Button } from "@mui/material";
import Component3 from "./Component3";
import PropTypes from "prop-types";

const CbTitle = ({ className = "" }) => {
  return (
    <section
      className={`w-[1440px] bg-black overflow-hidden flex items-end !pt-[80.2px] !pb-[77.4px] !pl-20 !pr-20 box-border relative isolate gap-[239.2px] text-left text-[572.6px] text-[transparent] font-[Archivo] mq800:gap-[60px] mq800:!pt-[52px] mq800:!pb-[50px] mq800:box-border mq450:gap-[30px] mq1350:gap-[120px] mq1350:!pl-10 mq1350:!pr-10 mq1350:box-border ${className}`}
    >
      <Typography
        className="!!m-[0 important] h-[687px] w-[1141px] absolute top-[-2.2px] left-[-163.3px] inline-block [-webkit-text-stroke:1.6px_#02171f] [paint-order:stroke_fill] opacity-[0.5] shrink-0 mq800:text-[229px] mq800:leading-[412px] mq450:text-[143px] mq450:leading-[275px]"
        variant="inherit"
        variantMapping={{ inherit: "h2" }}
        sx={{ fontWeight: "500", lineHeight: "120%" }}
      >
        CB7
      </Typography>
      <section className="h-[384.7px] flex flex-col items-start shrink-0 text-left text-[53px] text-white font-[Archivo]">
        <Box className="h-[308px] flex flex-col items-start gap-4">
          <Box className="flex flex-col items-start gap-9 mq800:gap-[18px]">
            <Box className="flex flex-col items-start gap-4">
              <Typography
                className="!m-0 w-[607.8px] relative inline-block mq800:text-[42px] mq800:leading-[51px] mq450:text-[32px] mq450:leading-[38px]"
                variant="inherit"
                variantMapping={{ inherit: "h1" }}
                sx={{
                  fontWeight: "400",
                  lineHeight: "120%",
                  letterSpacing: "-0.01em",
                }}
              >
                A complete cloud-based core banking.
              </Typography>
              <div className="w-[327.2px] relative text-base leading-[130%] inline-block opacity-[0.8]">
                Faster time to market with our cloud-based core banking services
              </div>
            </Box>
            <Button
              className="!pt-[15px] !pb-[15px] !pl-[51px] !pr-[51px]"
              disableElevation
              variant="contained"
              sx={{
                color: "#fff",
                fontSize: "15",
                background: "linear-gradient(106.53deg, #00b4fd, #003ace)",
                borderRadius: "10px",
                "&:hover": {
                  background: "linear-gradient(106.53deg, #00b4fd, #003ace)",
                },
              }}
            >
              REQUEST DEMO
            </Button>
          </Box>
          <Component3 property1="Frame 61" spacerLearn="/3.svg" />
        </Box>
      </section>
      <img
        className="h-[461.4px] w-[651.7px] relative object-contain z-[1] shrink-0"
        loading="lazy"
        alt=""
        src="/Frame-90@2x.png"
      />
    </section>
  );
};

CbTitle.propTypes = {
  className: PropTypes.string,
};

export default CbTitle;
