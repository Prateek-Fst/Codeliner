import { Box, Typography, Button } from "@mui/material";
import ReadAllInsightsBtn from "./ReadAllInsightsBtn";
import PropTypes from "prop-types";

const InsightsSection = ({ className = "" }) => {
  return (
    <section
      className={`w-[1440px] bg-black overflow-hidden flex flex-col items-end !pt-20 !pb-[65px] !pl-20 !pr-20 box-border relative isolate gap-[33px] max-w-full mq800:gap-4 mq800:!pl-10 mq800:!pr-10 mq800:box-border mq1125:!pt-[52px] mq1125:!pb-[42px] mq1125:box-border mq450:!pt-[34px] mq450:!pb-[27px] mq450:box-border mq1350:h-auto ${className}`}
    >
      <Box className="w-[556.8px] h-[556.8px] absolute !!m-[0 important] top-[160.2px] left-[58.2px] [filter:blur(200px)] rounded-[50%] [background:linear-gradient(103.43deg,_rgba(0,_180,_253,_0.1),_rgba(0,_58,_206,_0.1))] shrink-0" />
      <section className="w-[1280px] flex items-start justify-between gap-5 max-w-full shrink-0 text-left text-[37px] text-white font-[Archivo] mq1350:flex-wrap mq1350:gap-5">
        <Box className="flex flex-col items-start gap-12 max-w-full mq800:min-w-full mq450:gap-6 mq1350:flex-1">
          <Typography
            className="!m-0 w-[463.3px] relative inline-block mq800:text-3xl mq800:leading-9 mq450:text-[22px] mq450:leading-[27px]"
            variant="inherit"
            variantMapping={{ inherit: "h1" }}
            sx={{ fontWeight: "400", lineHeight: "120%", letterSpacing: "-0.01em" }}
          >
            Get yourself up-to-speed on all the things happening in fintech
          </Typography>
          <Button
            className="!pt-[15px] !pb-[15px] !pl-[59px] !pr-[59px]"
            disableElevation
            variant="outlined"
            sx={{
              color: "#e9f4f9",
              fontSize: "15",
              borderColor: "#e9f4f9",
              borderRadius: "10px",
              "&:hover": { borderColor: "#e9f4f9" },
            }}
          >
            Insights
          </Button>
        </Box>
        <Box className="rounded-[18px] bg-[#01141b] overflow-hidden flex items-end !pt-[25.5px] !pb-[25.5px] !pl-6 !pr-6 box-border gap-[32.9px] min-w-[670px] max-w-full text-xs text-[#2490bb] mq800:gap-4 mq800:flex-wrap mq1125:min-w-full mq1350:flex-1">
          <Box className="rounded-lg bg-[#07193c] overflow-hidden flex items-start !pt-[24.4px] !pb-[24.4px] !pl-[18px] !pr-[18px] mq800:flex-1">
            <Box className="w-[257.2px] flex items-center justify-center flex-wrap content-center gap-x-[63px] gap-y-6 mq450:gap-[31px]">
              <img className="h-[97.1px] w-[97px] relative" loading="lazy" alt="" src="/Frame-263.svg" />
              <img className="h-[97.1px] w-[97px] relative" loading="lazy" alt="" src="/Frame-263.svg" />
              <img className="h-[97.1px] w-[97px] relative" loading="lazy" alt="" src="/Frame-263.svg" />
              <img className="h-[97.1px] w-[97px] relative" loading="lazy" alt="" src="/Frame-263.svg" />
            </Box>
          </Box>
          <Box className="flex flex-col items-start justify-end !pt-0 !pb-[12.5px] !pl-0 !pr-0 mq800:flex-1">
            <Box className="flex flex-col items-start gap-[52.1px] mq450:gap-[26px]">
              <Box className="flex flex-col items-start gap-[11px] z-[2]">
                <div className="relative leading-[130%] uppercase font-['Chivo_Mono_Medium'] opacity-[0.8]">getting started</div>
                <Typography
                  className="!m-0 w-[289.1px] relative text-white inline-block mq450:text-[22px] mq450:leading-[26px]"
                  variant="inherit"
                  variantMapping={{ inherit: "h2" }}
                  sx={{ fontWeight: "400", fontSize: "27px", lineHeight: "120%" }}
                >
                  How to transition from a traditional to a digital bank
                </Typography>
                <Box className="flex items-start gap-3.5 text-sm text-[#64a8c4]">
                  <div className="relative leading-[130%] opacity-[0.8]">David Grohl</div>
                  <div className="relative leading-[130%] opacity-[0.8]">17/08/24</div>
                </Box>
              </Box>
              <Button
                className="!pt-2.5 !pb-2.5 !pl-[111px] !pr-[111px] z-[1]"
                disableElevation
                variant="outlined"
                sx={{
                  color: "rgba(233, 244, 249, 0.5)",
                  fontSize: "12",
                  borderColor: "rgba(233, 244, 249, 0.5)",
                  borderRadius: "10px",
                  "&:hover": { borderColor: "rgba(233, 244, 249, 0.5)" },
                  width: 287,
                  height: 36,
                }}
              >
                read more
              </Button>
            </Box>
          </Box>
        </Box>
      </section>
      <section className="flex flex-col items-end gap-[18px] max-w-full shrink-0 text-left text-xs text-[#2490bb] font-[Archivo]">
        <Box className="flex items-start flex-wrap content-start gap-[29px] max-w-full">
          {[0, 1].map((i) => (
            <Box key={i} className="h-[318px] w-[320.5px] rounded-[18px] bg-[#01141b] overflow-hidden shrink-0 flex flex-col items-start !pt-[38px] !pb-8 !pl-4 !pr-4 box-border gap-[60px] max-w-full mq450:gap-[30px]">
              <Box className="flex items-start !pt-0 !pb-0 !pl-[13px] !pr-[15px]">
                <Box className="flex flex-col items-start gap-[11px]">
                  <div className="relative leading-[130%] uppercase font-['Chivo_Mono_Medium'] opacity-[0.8]">getting started</div>
                  <Typography
                    className="!m-0 w-[259.1px] relative text-white inline-block mq450:text-[22px] mq450:leading-[26px]"
                    variant="inherit"
                    variantMapping={{ inherit: "h2" }}
                    sx={{ fontWeight: "400", fontSize: "27px", lineHeight: "120%" }}
                  >
                    How to transition from a traditional to a digital bank
                  </Typography>
                  <Box className="flex items-start gap-3.5 text-sm text-[#64a8c4]">
                    <div className="relative leading-[130%] opacity-[0.8]">David Grohl</div>
                    <div className="relative leading-[130%] opacity-[0.8]">17/08/24</div>
                  </Box>
                </Box>
              </Box>
              <Button
                className="!pt-2.5 !pb-2.5 !pl-[111px] !pr-[111px]"
                disableElevation
                variant="outlined"
                sx={{
                  color: "rgba(233, 244, 249, 0.5)",
                  fontSize: "12",
                  borderColor: "rgba(233, 244, 249, 0.5)",
                  borderRadius: "10px",
                  "&:hover": { borderColor: "rgba(233, 244, 249, 0.5)" },
                }}
              >
                read more
              </Button>
            </Box>
          ))}
        </Box>
        <ReadAllInsightsBtn />
      </section>
    </section>
  );
};

InsightsSection.propTypes = {
  className: PropTypes.string,
};

export default InsightsSection;
