import { Box } from "@mui/material";
import PropTypes from "prop-types";

const StatusBar = () => (
  <Box className="flex justify-between items-center px-5 pt-3 pb-1 text-[9px] font-semibold text-black select-none z-40">
    <div>9:41</div>
    <Box className="flex items-center gap-[4px]">
      <svg width="10" height="8" viewBox="0 0 10 8" fill="currentColor">
        <rect x="0" y="6" width="1.5" height="2" rx="0.3" />
        <rect x="2" y="4" width="1.5" height="4" rx="0.3" />
        <rect x="4" y="2" width="1.5" height="6" rx="0.3" />
        <rect x="6" y="0" width="1.5" height="8" rx="0.3" />
      </svg>
      <svg width="10" height="8" viewBox="0 0 10 8" fill="currentColor">
        <path d="M5 8c-.6 0-1-.4-1-1 0-.3.1-.5.3-.7C5.5 5.1 7.5 5.1 8.7 6.3c.2.2.3.4.3.7 0 .6-.4 1-1 1-.3 0-.5-.1-.7-.3-.6-.6-1.5-.6-2.1 0-.2.2-.4.3-.7.3z" />
        <path d="M5 5.5c-1.2 0-2.3-.9-2.3-2.1 0-.6.2-1.1.6-1.5C5.1.1 8.1.1 9.9 1.9c.4.4.6.9.6 1.5 0 1.2-1.1 2.1-2.3 2.1-.6 0-1.1-.2-1.5-.6-.2-.2-.5-.4-.7-.4z" />
      </svg>
      <Box className="w-[14px] h-[7px] border border-solid border-black rounded-[2px] p-[0.5px] flex items-center">
        <Box className="w-full h-full bg-black rounded-[0.5px]" />
      </Box>
    </Box>
  </Box>
);

const BottomNav = ({ activeTab }) => (
  <Box className="bg-white border-t border-solid border-gray-100 flex justify-around items-center py-2 z-40 select-none">
    {[
      { name: "Home", icon: "/006-home-button-1.svg", tab: "home" },
      { name: "Card", icon: "/004-credit-card-1-1.svg", tab: "card" },
      { name: "Transaction", icon: "/002-swap-1.svg", tab: "transaction" },
      { name: "Profile", icon: "/008-user-1-1.svg", tab: "profile" },
    ].map((item) => {
      const isActive = activeTab === item.tab;
      return (
        <Box key={item.name} className="flex flex-col items-center cursor-pointer">
          <img
            src={item.icon}
            alt={item.name}
            className={`w-[16px] h-[16px] object-contain ${isActive ? "opacity-100" : "opacity-40"}`}
            style={isActive ? { filter: "drop-shadow(0 0 2px rgba(0, 180, 253, 0.5))" } : {}}
          />
          <span className={`text-[7.5px] font-medium mt-[2px] ${isActive ? "text-[#00b4fd] font-semibold" : "text-gray-400"}`}>
            {item.name}
          </span>
          {isActive && <Box className="w-[3px] h-[3px] bg-[#00b4fd] rounded-full mt-[1px]" />}
        </Box>
      );
    })}
  </Box>
);

BottomNav.propTypes = {
  activeTab: PropTypes.string.isRequired,
};

const SpendScreen = () => {
  const months = [
    { label: "Jan", height: "35%" },
    { label: "Feb", height: "55%" },
    { label: "Mar", height: "85%", active: true },
    { label: "Apr", height: "45%" },
    { label: "May", height: "65%" },
    { label: "Jun", height: "25%" },
  ];

  return (
    <Box className="flex-1 flex flex-col justify-between px-3.5 pb-2 pt-1 overflow-y-auto">
      <Box className="mb-2">
        <div className="text-[7.5px] uppercase font-semibold text-gray-400">March 2022</div>
        <div className="text-[17px] font-bold text-[#081e69] leading-tight">$8,295.00 USD</div>
      </Box>

      <Box className="bg-white rounded-xl p-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex flex-col gap-1.5 relative mb-2">
        <Box className="absolute top-[8px] left-[45%] -translate-x-[50%] bg-[#081e69] text-white text-[6.5px] px-1 py-[2px] rounded-[3px] shadow z-10 after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-[3px] after:border-solid after:border-transparent after:border-t-[#081e69]">
          $8,295.00
        </Box>

        <Box className="h-[75px] flex items-end justify-between px-1 relative">
          <div className="absolute left-0 right-0 top-[25px] border-t border-dashed border-gray-100 w-full" />
          <div className="absolute left-0 right-0 top-[50px] border-t border-dashed border-gray-100 w-full" />
          <div className="absolute left-0 right-0 top-[75px] border-t border-dashed border-gray-100 w-full" />

          {months.map((m, idx) => (
            <Box key={idx} className="flex flex-col items-center flex-1 gap-1 h-full justify-end">
              <Box 
                style={{ height: m.height }} 
                className={`w-[12px] rounded-md transition-all duration-500 ${m.active ? "bg-[#081e69]" : "bg-gray-100"}`} 
              />
              <span className={`text-[6.5px] font-medium ${m.active ? "text-[#081e69] font-bold" : "text-gray-400"}`}>
                {m.label}
              </span>
            </Box>
          ))}
        </Box>
      </Box>

      <Box className="flex gap-2 mb-2">
        <Box className="flex-1 bg-white rounded-xl p-2 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex items-center gap-1.5 border border-solid border-gray-50">
          <Box className="w-[18px] h-[18px] rounded-full bg-emerald-50 flex items-center justify-center text-[10px] text-emerald-500 font-bold">↙</Box>
          <Box>
            <div className="text-[6.5px] uppercase font-bold text-gray-400">Income</div>
            <div className="text-[9.5px] font-bold text-emerald-600">+$453.00</div>
          </Box>
        </Box>
        <Box className="flex-1 bg-white rounded-xl p-2 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex items-center gap-1.5 border border-solid border-gray-50">
          <Box className="w-[18px] h-[18px] rounded-full bg-rose-50 flex items-center justify-center text-[10px] text-rose-500 font-bold">↗</Box>
          <Box>
            <div className="text-[6.5px] uppercase font-bold text-gray-400">Spend</div>
            <div className="text-[9.5px] font-bold text-[#081e69]">-$453.00</div>
          </Box>
        </Box>
      </Box>

      <Box className="flex-1 flex flex-col gap-1.5">
        <div className="text-[9px] font-bold text-[#0f0f0f]">Recent activity</div>
        <Box className="flex flex-col gap-1 bg-white rounded-xl p-2 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
          {[
            { name: "To Jin", desc: "Work", date: "12 jun 2022", amount: "-$59", icon: "/Group-16.svg", isNegative: true },
            { name: "From Google", desc: "Salary", date: "10 jun 2022", amount: "+$859", icon: "/Group-17.svg", isNegative: false }
          ].map((tx, idx) => (
            <Box key={idx} className="flex justify-between items-center py-1 border-b border-solid border-gray-50 last:border-b-0 font-[Archivo]">
              <Box className="flex items-center gap-2">
                <img src={tx.icon} alt="" className="w-[18px] h-[18px]" />
                <Box>
                  <div className="text-[7.5px] font-semibold text-gray-900">{tx.name} <span className="text-[6.5px] text-gray-400 font-normal">• {tx.desc}</span></div>
                  <div className="text-[5.5px] text-gray-400">{tx.date}</div>
                </Box>
              </Box>
              <div className={`text-[8px] font-bold ${tx.isNegative ? "text-gray-900" : "text-emerald-600"}`}>{tx.amount}</div>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

const HomeScreen = () => (
  <Box className="flex-1 flex flex-col justify-between px-3.5 pb-2 pt-1 overflow-y-auto">
    <Box className="flex justify-between items-center mb-2">
      <Box className="flex items-center gap-1.5">
        <img src="/Representation@2x.png" alt="Toni Kross" className="w-[20px] h-[20px] rounded-lg object-cover" />
        <Box>
          <div className="text-[8px] font-bold text-gray-900 leading-tight">Toni Kross</div>
          <div className="text-[6px] text-gray-400">Good Morning</div>
        </Box>
      </Box>
      <img src="/Group-5.svg" alt="Notifications" className="w-[14px] h-[14px]" />
    </Box>

    <Box className="bg-[#081e69] text-white rounded-xl p-3 shadow-[0_4px_12px_rgba(8,30,105,0.15)] flex flex-col gap-1 mb-2">
      <div className="text-[6.5px] text-blue-200 uppercase font-semibold">Total balance</div>
      <div className="text-[15px] font-bold">$42,295.00 USD</div>
      <div className="border-t border-solid border-white/10 w-full mt-1 pt-1 opacity-60 text-[5.5px]">Premium Banking Account</div>
    </Box>

    <Box className="flex justify-between bg-white rounded-xl p-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] mb-2">
      {[
        { name: "Fund Transfer", icon: "/transfer-money-1.svg" },
        { name: "Add Money", icon: "/dollar-1.svg" },
        { name: "More", icon: "/Group-7.svg" }
      ].map((action) => (
        <Box key={action.name} className="flex flex-col items-center gap-[2px] cursor-pointer flex-1">
          <Box className="w-[24px] h-[24px] rounded-lg bg-sky-50 flex items-center justify-center">
            <img src={action.icon} alt={action.name} className="w-[12px] h-[12px] object-contain" />
          </Box>
          <span className="text-[6px] font-medium text-gray-500 text-center">{action.name}</span>
        </Box>
      ))}
    </Box>

    <Box className="flex-1 flex flex-col gap-1.5">
      <div className="text-[9px] font-bold text-[#0f0f0f]">Recent activity</div>
      <Box className="flex flex-col gap-1 bg-white rounded-xl p-2 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
        {[
          { name: "To Jin", desc: "Work", date: "12 jun 2022", amount: "-$59", icon: "/Group-16.svg", isNegative: true },
          { name: "From Google", desc: "Salary", date: "10 jun 2022", amount: "+$859", icon: "/Group-17.svg", isNegative: false },
          { name: "To David", desc: "Work", date: "7 jun 2022", amount: "-$479", icon: "/Group-18.svg", isNegative: true }
        ].map((tx, idx) => (
          <Box key={idx} className="flex justify-between items-center py-1 border-b border-solid border-gray-50 last:border-b-0 font-[Archivo]">
            <Box className="flex items-center gap-2">
              <img src={tx.icon} alt="" className="w-[18px] h-[18px]" />
              <Box>
                <div className="text-[7.5px] font-semibold text-gray-900">{tx.name} <span className="text-[6.5px] text-gray-400 font-normal">• {tx.desc}</span></div>
                <div className="text-[5.5px] text-gray-400">{tx.date}</div>
              </Box>
            </Box>
            <div className={`text-[8px] font-bold ${tx.isNegative ? "text-gray-900" : "text-emerald-600"}`}>{tx.amount}</div>
          </Box>
        ))}
      </Box>
    </Box>
  </Box>
);

const ProfileScreen = () => (
  <Box className="flex-1 flex flex-col justify-between px-3.5 pb-2 pt-1 overflow-y-auto">
    <Box className="flex flex-col items-center gap-1.5 mt-2 mb-3">
      <img src="/Representation@2x.png" alt="Toni Kross" className="w-[48px] h-[48px] rounded-full object-cover border border-solid border-white shadow-md" />
      <Box className="text-center">
        <div className="text-[12px] font-bold text-gray-900">Toni Kross</div>
        <div className="text-[7.5px] text-gray-400 font-medium">tonikross@gmai.com</div>
      </Box>
    </Box>

    <Box className="flex-1 flex flex-col gap-2">
      {[
        { title: "Profile setting", desc: "Manage your personal data", icon: "👤" },
        { title: "Setting", desc: "Preferences and configurations", icon: "⚙️" },
        { title: "Support", desc: "Help center and direct contact", icon: "🎧" },
        { title: "Sign out", desc: "Logout from your account", icon: "🚪" }
      ].map((item, idx) => (
        <Box key={idx} className="flex justify-between items-center bg-white rounded-xl px-3 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.03)] border border-solid border-gray-50 cursor-pointer transition-all hover:bg-gray-50 font-[Archivo]">
          <Box className="flex items-center gap-2.5">
            <span className="text-[12px]">{item.icon}</span>
            <Box>
              <div className="text-[8px] font-bold text-gray-900 leading-tight">{item.title}</div>
              <div className="text-[5.5px] text-gray-400 mt-[1px]">{item.desc}</div>
            </Box>
          </Box>
          {item.title !== "Sign out" && (
            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" className="opacity-40">
              <path d="M1 1L5 5L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </Box>
      ))}
    </Box>
  </Box>
);

const PhoneMockup = ({ className = "", screenType = "profile" }) => {
  return (
    <Box className={`w-[268.3px] h-[542.9px] relative rounded-[40px] bg-black p-[8px] box-border shadow-[0_20px_50px_rgba(0,0,0,0.3)] shrink-0 flex flex-col justify-between select-none ${className}`}>
      <Box className="absolute top-[12px] left-[50%] -translate-x-[50%] w-[110px] h-[18px] bg-black rounded-full z-50 flex items-center justify-between px-4">
        <Box className="w-[4px] h-[4px] bg-[#1a1a1a] rounded-full" />
        <Box className="w-[40px] h-[3px] bg-[#0d0d0d] rounded-full" />
      </Box>

      <Box className="w-full h-full bg-[#f4f7f9] overflow-hidden rounded-[32px] relative flex flex-col justify-between text-black font-[Archivo] text-left !pt-[20px]">
        <StatusBar />
        
        {screenType === "spend" && <SpendScreen />}
        {screenType === "home" && <HomeScreen />}
        {screenType === "profile" && <ProfileScreen />}

        <BottomNav activeTab={screenType === "spend" || screenType === "home" ? "home" : "profile"} />
      </Box>
    </Box>
  );
};

PhoneMockup.propTypes = {
  className: PropTypes.string,
  screenType: PropTypes.oneOf(["spend", "home", "profile"]),
};

export default PhoneMockup;
