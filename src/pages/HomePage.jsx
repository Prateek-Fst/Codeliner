import { Typography, Box, Button } from "@mui/material";
import Desktop from "../components/Desktop";
import SolutionsSection from "../components/SolutionsSection";
import CloudBankingHero from "../components/CloudBankingHero";
import CoreBankingFeatures from "../components/CoreBankingFeatures";
import DigitalBankingSection from "../components/DigitalBankingSection";
import InsightsSection from "../components/InsightsSection";
import CaseStudiesSection from "../components/CaseStudiesSection";
import Footer from "../components/Footer";

const HomePage = () => {
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
            <nav className="!m-0 flex items-center gap-[19px] text-left text-xs text-white font-['Chivo_Mono_Medium']">
              <button className="flex items-center gap-1 bg-transparent border-none cursor-pointer text-[#e9f4f9] text-xs font-['Chivo_Mono_Medium'] uppercase tracking-wide">
                Solutions
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M1 1L5 5L9 1" stroke="#e9f4f9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button className="flex items-center gap-1 bg-transparent border-none cursor-pointer text-[#e9f4f9] text-xs font-['Chivo_Mono_Medium'] uppercase tracking-wide">
                Resources
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M1 1L5 5L9 1" stroke="#e9f4f9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button className="flex items-center gap-1 bg-transparent border-none cursor-pointer text-[#e9f4f9] text-xs font-['Chivo_Mono_Medium'] uppercase tracking-wide">
                About Us
              </button>
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
        <SolutionsSection />
        <CloudBankingHero />
        <CoreBankingFeatures />
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
                sx={{ fontWeight: "400", lineHeight: "120%", letterSpacing: "-0.01em" }}
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
                  sx={{ color: "#e9f4f9", fontSize: "15", borderColor: "#e9f4f9", borderRadius: "10px", "&:hover": { borderColor: "#e9f4f9" } }}
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
                    "&:hover": { background: "linear-gradient(106.53deg, #00b4fd, #003ace)" },
                  }}
                >
                  REQUEST DEMO
                </Button>
              </Box>
            </Box>
          </Box>
        </section>
        <DigitalBankingSection />
        <InsightsSection />
        <CaseStudiesSection />
        <section className="w-[1440px] bg-black overflow-hidden flex items-start !pt-[57px] !pb-[57px] !pl-20 !pr-20 box-border gap-[214.2px] text-left text-[53px] text-white font-[Archivo] mq800:h-auto mq800:gap-[107px] mq800:!pl-10 mq800:!pr-10 mq800:box-border mq450:gap-[54px]">
          <Box className="flex flex-col items-start gap-8 mq800:gap-4">
            <Typography
              className="!m-0 w-[607.8px] relative inline-block mq800:text-[42px] mq800:leading-[51px] mq450:text-[32px] mq450:leading-[38px]"
              variant="inherit"
              variantMapping={{ inherit: "h1" }}
              sx={{ fontWeight: "400", lineHeight: "120%", letterSpacing: "-0.01em" }}
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
                sx={{ color: "#e9f4f9", fontSize: "15", borderColor: "#e9f4f9", borderRadius: "10px", "&:hover": { borderColor: "#e9f4f9" } }}
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
                  "&:hover": { background: "linear-gradient(106.53deg, #00b4fd, #003ace)" },
                }}
              >
                REQUEST DEMO
              </Button>
            </Box>
          </Box>
        </section>
        <Footer />
      </main>
    </Box>
  );
};

export default HomePage;
