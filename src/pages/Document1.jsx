import {
  Typography,
  Box,
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import Desktop from "../components/Desktop";
import FrameComponent3 from "../components/FrameComponent3";
import CbTitle from "../components/CbTitle";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent5 from "../components/FrameComponent5";
import UpdateDesign from "../components/UpdateDesign";
import SampleListing from "../components/SampleListing";
import FooterMask from "../components/FooterMask";

const Document1 = () => {
  return (
    <Box className="relative w-full flex flex-col items-end leading-[normal] tracking-[normal]">
      <header className="fixed top-6 left-0 right-0 z-[100] flex justify-center !pl-4 !pr-4 box-border max-w-full text-left text-2xl text-white font-[Archivo]">
        <Box className="w-[717px] [backdrop-filter:blur(15px)] rounded-xl bg-[rgba(47,47,47,0.7)] overflow-hidden flex items-center !pt-[9px] !pb-[9px] !pl-6 !pr-6 box-border gap-20 max-w-full mq800:gap-10 mq1125:flex-wrap justify-between">
          <Typography
            className="!m-0 relative mq450:text-[19px] mq450:leading-[23px]"
            variant="inherit"
            variantMapping={{ inherit: "h3" }}
            sx={{ fontWeight: "500", lineHeight: "120%" }}
          >
            N7
          </Typography>
          <Box className="flex items-center gap-20 max-w-full mq800:gap-10 mq1125:flex-wrap mq450:gap-5">
            <nav className="!m-0 flex items-start gap-[19px] text-left text-xs text-white font-['Chivo_Mono_Medium']">
              <FormControl
                className="h-4 font-['Chivo_Mono_Medium'] text-xs text-white"
                variant="standard"
                sx={{
                  borderTopWidth: "0px",
                  borderRightWidth: "0px",
                  borderBottomWidth: "0px",
                  borderLeftWidth: "0px",
                  borderRadius: "0px 0px 0px 0px",
                  width: "82.7px",
                  height: "16px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "16px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "16px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "16px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "16px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "#e9f4f9",
                    fontSize: 12,
                    fontWeight: "Regular",
                    fontFamily: "Chivo Mono Medium",
                    textAlign: "left",
                    p: "0 !important",
                  },
                }}
              >
                <InputLabel color="primary" />
                <Select
                  color="primary"
                  disableUnderline
                  displayEmpty
                  IconComponent={() => (
                    <img
                      width="13.7px"
                      height="13.7px"
                      src="/menu-item-separator.png"
                      style={{ marginRight: "1.7763568394002505e-14px" }}
                    />
                  )}
                >
                  <MenuItem>SOLUTIONS</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
              <FormControl
                className="h-4 font-['Chivo_Mono_Medium'] text-xs text-white"
                variant="standard"
                sx={{
                  borderTopWidth: "0px",
                  borderRightWidth: "0px",
                  borderBottomWidth: "0px",
                  borderLeftWidth: "0px",
                  borderRadius: "0px 0px 0px 0px",
                  width: "82.7px",
                  height: "16px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "16px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "16px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "16px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "16px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "#e9f4f9",
                    fontSize: 12,
                    fontWeight: "Regular",
                    fontFamily: "Chivo Mono Medium",
                    textAlign: "left",
                    p: "0 !important",
                  },
                }}
              >
                <InputLabel color="primary" />
                <Select
                  color="primary"
                  disableUnderline
                  displayEmpty
                  IconComponent={() => (
                    <img
                      width="13.7px"
                      height="13.7px"
                      src="/menu-item-separator.png"
                      style={{ marginRight: "3.552713678800501e-15px" }}
                    />
                  )}
                >
                  <MenuItem>RESOURCES</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
              <Box className="flex items-center justify-center gap-1">
                <div className="relative leading-[130%] uppercase">
                  About us
                </div>
                <img
                  className="h-[13.7px] w-[13.7px] relative object-contain hidden"
                  alt=""
                  src="/1@2x.png"
                />
              </Box>
            </nav>
            <Button
              disableElevation
              variant="outlined"
              sx={{
                color: "#e9f4f9",
                fontSize: "12",
                borderColor: "#e9f4f9",
                borderRadius: "6px",
                "&:hover": { borderColor: "#e9f4f9" },
              }}
            >
              request demo
            </Button>
          </Box>
        </Box>
      </header>
      <main className="self-stretch flex flex-col items-start max-w-full z-[1]">
        <Desktop />
        <FrameComponent3 />
        <CbTitle />
        <FrameComponent4 />
        <section className="w-[1440px] bg-black overflow-hidden flex items-start justify-center !pt-[127px] !pb-[127px] !pl-[21px] !pr-5 box-border text-right text-[572.6px] text-[transparent] font-[Archivo] mq800:h-auto mq800:!pt-[83px] mq800:!pb-[83px] mq800:box-border">
          <Box className="h-[427px] w-[1279px] rounded-[27px] [background:linear-gradient(99.21deg,_#031e2a,_#000d12_63.08%)] overflow-hidden shrink-0 flex items-end !pt-[112.3px] !pb-[112.7px] !pl-[65px] !pr-16 box-border relative isolate gap-[84.2px] mq800:h-auto mq800:gap-[42px] mq450:gap-[21px] mq450:!pt-[73px] mq450:!pb-[73px] mq450:box-border mq1350:!pl-8 mq1350:!pr-8 mq1350:box-border">
            <Typography
              className="!!m-[0 important] h-[687px] w-[1141px] absolute top-[-160.7px] right-[-85.6px] inline-block [-webkit-text-stroke:1.6px_#02171f] [paint-order:stroke_fill] opacity-[0.5] shrink-0 mq800:text-[229px] mq800:leading-[412px] mq450:text-[143px] mq450:leading-[275px]"
              variant="inherit"
              variantMapping={{ inherit: "h2" }}
              sx={{ fontWeight: "500", lineHeight: "120%" }}
            >
              CB7
            </Typography>
            <Box className="flex flex-col items-start gap-8 z-[1] shrink-0 text-left text-[53px] text-white mq800:gap-4">
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
                Take the full advantage of going paper-less now.
              </Typography>
              <div className="w-[462.9px] relative text-base leading-[130%] inline-block opacity-[0.8]">{`CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations `}</div>
            </Box>
            <Box className="h-[125.3px] flex flex-col items-start shrink-0 mq800:h-auto">
              <Box className="h-[49px] flex items-start gap-10 mq800:flex-wrap mq450:gap-5">
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
                  Contact Us
                </Button>
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
                      background:
                        "linear-gradient(106.53deg, #00b4fd, #003ace)",
                    },
                  }}
                >
                  REQUEST DEMO
                </Button>
              </Box>
            </Box>
          </Box>
        </section>
        <FrameComponent5 />
        <UpdateDesign />
        <SampleListing />
        <section className="w-[1440px] bg-black overflow-hidden flex items-start !pt-[57px] !pb-[57px] !pl-20 !pr-20 box-border gap-[214.2px] text-left text-[53px] text-white font-[Archivo] mq800:h-auto mq800:gap-[107px] mq800:!pl-10 mq800:!pr-10 mq800:box-border mq450:gap-[54px]">
          <Box className="flex flex-col items-start gap-8 mq800:gap-4">
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
              Take the full advantage of going paper-less now.
            </Typography>
            <div className="w-[462.9px] relative text-base leading-[130%] inline-block opacity-[0.7]">{`CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations `}</div>
          </Box>
          <Box className="flex flex-col items-start !pt-[76.5px] !pb-0 !pl-0 !pr-0">
            <Box className="flex items-center justify-end gap-10 mq800:flex-wrap mq450:gap-5">
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
                Contact Us
              </Button>
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
          </Box>
        </section>
        <FooterMask />
      </main>
    </Box>
  );
};

export default Document1;
