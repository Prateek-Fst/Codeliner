import { Typography, Box } from "@mui/material";
import PropTypes from "prop-types";

const CoreBankingFeatures = ({ className = "" }) => {
  return (
    <section
      className={`w-[1440px] bg-black overflow-hidden flex items-end !pt-[110px] !pb-[109.6px] !pl-[770px] !pr-20 box-border gap-[277.3px] mq800:h-auto mq800:gap-[69px] mq800:!pl-48 mq800:!pt-[71px] mq800:!pb-[71px] mq800:box-border mq450:gap-[35px] mq450:!pl-5 mq450:box-border mq1350:gap-[139px] mq1350:!pl-[385px] mq1350:!pr-10 mq1350:box-border ${className}`}
    >
      <img
        className="!ml-[-929px] w-[651.7px] h-[480px] relative object-contain shrink-0"
        loading="lazy"
        alt=""
        src="/Container@2x.png"
      />
      <section className="h-[402.7px] flex flex-col items-start shrink-0 text-left text-[27px] text-white font-[Archivo] mq800:h-auto">
        <Box className="flex flex-col items-start gap-[34px] mq800:gap-[17px]">
          <Typography
            className="!m-0 w-[495.3px] relative inline-block mq450:text-[22px] mq450:leading-7"
            variant="inherit"
            variantMapping={{ inherit: "h2" }}
            sx={{ fontWeight: "400", lineHeight: "130%" }}
          >
            Run a more efficient, flexible,and digitally connected corebanking system
          </Typography>
          <Box className="flex flex-col items-start gap-3.5 text-base">
            <div className="relative leading-[130%] font-semibold">What you will get:</div>
            <Box className="flex items-start justify-center gap-[29px] mq800:flex-wrap">
              <Box className="flex flex-col items-start gap-1 mq800:flex-1">
                <Box className="w-[296px] flex items-center gap-[5px]">
                  <img className="h-[31.4px] w-[30px] relative" loading="lazy" alt="" src="/Depiction.svg" />
                  <div className="flex-1 relative leading-[130%] opacity-[0.8]">Customer-On Boarding</div>
                </Box>
                <Box className="w-[296px] flex items-center gap-[5px]">
                  <img className="h-[31.4px] w-[30px] relative" alt="" src="/Specification.svg" />
                  <div className="flex-1 relative leading-[130%] opacity-[0.8]">Managing deposits and withdrawals</div>
                </Box>
                <Box className="w-[296px] flex items-center gap-[5px]">
                  <img className="h-[31.4px] w-[30px] relative" alt="" src="/Component.svg" />
                  <div className="flex-1 relative leading-[130%] opacity-[0.8]">Transaction management</div>
                </Box>
                <Box className="w-[296px] flex items-center gap-[5px]">
                  <img className="h-[31.4px] w-[30px] relative" alt="" src="/Partition.svg" />
                  <div className="flex-1 relative leading-[130%] opacity-[0.8]">Interest Calculation</div>
                </Box>
                <Box className="w-[265px] flex items-start gap-[5px]">
                  <img className="h-[31.4px] w-[30px] relative" alt="" src="/Division.svg" />
                  <div className="flex-1 relative leading-[130%] opacity-[0.8]">
                    Payments processing (cash, cheques, mandates, NEFT, RTGS etc)
                  </div>
                </Box>
              </Box>
              <Box className="flex flex-col items-start gap-1 mq800:flex-1">
                <Box className="w-[265px] flex items-center justify-center gap-[5px]">
                  <img className="h-[31.4px] w-[30px] relative" alt="" src="/Component.svg" />
                  <div className="flex-1 relative leading-[130%] opacity-[0.8]">CRM Activities</div>
                </Box>
                <Box className="w-[265px] flex items-start gap-[5px]">
                  <img className="h-[31.4px] w-[30px] relative" alt="" src="/Factor.svg" />
                  <div className="flex-1 relative leading-[130%] opacity-[0.8]">Configuring New Banking Products</div>
                </Box>
                <Box className="w-[265px] flex items-start gap-[5px]">
                  <img className="h-[31.4px] w-[30px] relative" alt="" src="/Arrangement.svg" />
                  <div className="flex-1 relative leading-[130%] opacity-[0.8]">Loan disbursal and Loan management</div>
                </Box>
                <Box className="w-[265px] flex items-start gap-[5px] text-[27px]">
                  <Box className="h-[659px] w-[1440px] relative bg-black overflow-hidden shrink-0 hidden grid-cols-[repeat(12,_1fr)] [column-gap:20px] !pl-20 !pr-20">
                    <Box className="absolute top-[49px] left-[0px] shadow-[-188px_4px_98px_79px_#000d12_inset] bg-black w-full h-[480px] overflow-y-auto">
                      <Box className="absolute top-[106px] left-[80px] h-[409px] flex flex-col items-start gap-[120px] shrink-0">
                        <Box className="flex flex-col items-start gap-6 shrink-0">
                          <div className="w-[449.1px] relative leading-[130%] inline-block mq450:text-[22px] mq450:leading-7">
                            Achieve workload optimization, save time, making system more agile and equipped for work.
                          </div>
                          <div className="w-[327.2px] relative text-base leading-[130%] inline-block opacity-[0.7]">
                            Products built with Focus to deliver ambient user experience and a customer-centric approach.
                          </div>
                        </Box>
                        <Box className="flex flex-col items-start gap-6 shrink-0">
                          <div className="w-[449.1px] relative leading-[130%] inline-block mq450:text-[22px] mq450:leading-7">
                            Streamline business processes, automated back-office operations and improve profitability.
                          </div>
                          <div className="w-[327.2px] relative text-base leading-[130%] inline-block opacity-[0.7]">
                            Products built with Focus to deliver ambient user experience and a customer-centric approach.
                          </div>
                        </Box>
                        <Box className="flex flex-col items-start gap-6 shrink-0">
                          <div className="w-[449.1px] relative leading-[130%] inline-block mq450:text-[22px] mq450:leading-7">
                            Intelligent processing capabilities with pre-integrated security and adaptive API monetization.
                          </div>
                          <div className="w-[327.2px] relative text-base leading-[130%] inline-block opacity-[0.7]">
                            Products built with Focus to deliver ambient user experience and a customer-centric approach.
                          </div>
                        </Box>
                        <Box className="flex flex-col items-start gap-6 shrink-0 text-[rgba(233,244,249,0)]">
                          <div className="w-[449.1px] relative leading-[130%] inline-block mq450:text-[22px] mq450:leading-7">
                            Intelligent processing capabilities with pre-integrated security and adaptive API monetization.
                          </div>
                          <div className="w-[327.2px] relative text-base leading-[130%] inline-block opacity-[0.7]">
                            Products built with Focus to deliver ambient user experience and a customer-centric approach.
                          </div>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <img className="h-[31.4px] w-[30px] relative shrink-0" alt="" src="/Component.svg" />
                  <div className="flex-1 relative text-base leading-[130%] opacity-[0.8] shrink-0">
                    Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.
                  </div>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </section>
    </section>
  );
};

CoreBankingFeatures.propTypes = {
  className: PropTypes.string,
};

export default CoreBankingFeatures;
