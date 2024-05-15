import React from "react";
import { BiGlobe } from "react-icons/bi";
import { FaBell } from "react-icons/fa";
import { RxHamburgerMenu, RxMagnifyingGlass } from "react-icons/rx";
import { Link } from "react-router-dom";

const YTHeader = ({ setShowSideBar, showSideBar }) => {
  const handleSideBarShow = () => setShowSideBar(!showSideBar);
  // const [theme, setTheme] = React.useState(null);
  const handleToggleThemeMode = () => {
    if (document.querySelector("body").classList.contains("dark")) {
      document.querySelector("body").classList.remove("dark");
    } else {
      document.querySelector("body").classList.add("dark");
    }
  };

  return (
    <>
      <header className="yt_header flex between-center h-14 pl-6 pr-8 fixed top-0 left-0 w-full z-[100] bg-dark_bg">
        <div className="flex items-center gap-6 h-full">
          <button type="button" onClick={handleSideBarShow}>
            <RxHamburgerMenu className="text-2xl" />
          </button>
          <div className="flex items-center relative">
            <Link to={"/"} className="animate-spin">
              <BiGlobe className="text-2xl" />
            </Link>
          </div>
        </div>
        <div className="searchBox_parent hidden sm:flex betweeen-center gap-4 w-1/2 md:w-[54.5%] xl:w-[35%] 2xl:w-[37.5%]">
          <div className="searchBox relative bg-dark2 rounded-full min-h-10 max-h-10 w-full h-full py-2 flex items-center ml-8 border border-outline">
            <div className="box border border-transparent flex items-center rounded-tl-full rounded-bl-full pl-[14px] w-full">
              {/* Input Search Box */}
              <input
                type="text"
                name="Search"
                id="searchBox"
                placeholder="Search"
                className="bg-transparent leading-none h-10 w-full caret-text_primary pointer-events-auto text-light_bg placeholder:text-[#888] focus:pl-[2px]"
              />

              {/* Search icon on focus */}
              <div className="hidden-search-icon h-6 w-8 left-4 hidden">
                <RxMagnifyingGlass className='text-2xl'/>
              </div>
            </div>

            {/* Search button */}
            <button
              type="button"
              className="bg-raised_bg hover:bg-hover_bg rounded-tr-full rounded-br-full w-full max-w-16 h-10 f-col-center"
            >
              <RxMagnifyingGlass className='text-2xl'/>
            </button>
          </div>
        </div>
        <div className="flex justify-end items-center gap-6">
          <div className="flex items-center gap-4">
            {/* NOTIFICATIONS BUTTON */}
            <button
              className="w-8 h-8 rounded-full bg-transparent hover:bg-hover_bg overflow-hidden hidden md:f-col-center"
              onClick={handleToggleThemeMode}
            >
              <FaBell className="text-2xl" />
            </button>
          </div>
          {/* USER BUTTON */}
          <button className="w-8 h-8 rounded-full bg-transparent hover:bg-hover_bg overflow-hidden">
            <div className="bg-termGreen/50 w-full h-full f-col-center text-xs">USER</div>
          </button>
        </div>
      </header>
    </>
  );
};

export default YTHeader;
