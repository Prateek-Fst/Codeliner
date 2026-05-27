import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import SolutionCard from "./SolutionCard";
import LoanCard from "./LoanCard";
import PropTypes from "prop-types";

const SolutionsSection = ({ className = "" }) => {
  const [solutions] = useState([
    {
      icon: "/Frame-26.svg",
      title: "Core Banking CB7",
      description:
        "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.",
      titleOpacity: "",
      arrowIcon: "/Spacer-Learn.svg",
    },
    {
      icon: "/Frame-261.svg",
      title: "Digital Banking N7",
      description:
        "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients ",
      titleOpacity: "0.9",
      arrowIcon: "/3.svg",
    },
    {
      icon: "/Frame-262.svg",
      title: "Open Banking",
      description:
        "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.",
      titleOpacity: "",
      arrowIcon: "/3.svg",
    },
  ]);

  return (
    <section
      className={`w-[1440px] bg-black overflow-hidden flex items-start !pt-[47.1px] !pb-[44.9px] !pl-20 !pr-20 box-border relative isolate gap-[217px] text-left text-[37px] text-white font-[Archivo] mq800:gap-[108px] mq800:!pt-5 mq800:!pb-5 mq800:!pl-10 mq800:!pr-10 mq800:box-border mq450:gap-[54px] mq1350:!pt-[31px] mq1350:!pb-[29px] mq1350:box-border ${className}`}
    >
      <Box className="h-[556.8px] w-[556.8px] absolute !!m-[0 important] top-[447.5px] left-[968.6px] [filter:blur(200px)] rounded-[50%] [background:linear-gradient(103.43deg,_rgba(0,_180,_253,_0.1),_rgba(0,_58,_206,_0.1))] shrink-0" />
      <Box className="flex flex-col items-start gap-12 z-[3] shrink-0 mq450:gap-6">
        <Typography
          className="!m-0 w-[433px] relative inline-block mq800:text-3xl mq800:leading-9 mq450:text-[22px] mq450:leading-[27px]"
          variant="inherit"
          variantMapping={{ inherit: "h1" }}
          sx={{ fontWeight: "400", lineHeight: "120%", letterSpacing: "-0.01em" }}
        >
          All of our solutions are tailor-made to your needs
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
          request demo
        </Button>
      </Box>
      <Box className="w-[613px] flex items-start flex-wrap content-start gap-x-[76px] gap-y-[52px] z-[2] shrink-0 mq800:gap-[38px] mq450:gap-[19px]">
        {solutions.map((item, index) => (
          <SolutionCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
            titleOpacity={item.titleOpacity}
            arrowIcon={item.arrowIcon}
          />
        ))}
        <LoanCard
          icon="/Frame-26.svg"
          title="Loan Origination System"
          arrowIcon="/3.svg"
        />
        <LoanCard
          icon="/Frame-263.svg"
          title="Loan Management System"
          padding="unset"
          arrowIcon="/3.svg"
        />
      </Box>
    </section>
  );
};

SolutionsSection.propTypes = {
  className: PropTypes.string,
};

export default SolutionsSection;
