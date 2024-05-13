import React from "react";
import { FaBell } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { SiStartrek } from "react-icons/si";
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
              <SiStartrek className="text-2xl" />
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  focusable="false"
                >
                  <path d="m20.87 20.17-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path>
                </svg>
              </div>
            </div>

            {/* Search button */}
            <button
              type="button"
              className="bg-raised_bg hover:bg-hover_bg rounded-tr-full rounded-br-full w-full max-w-16 h-10 f-col-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
                className="w-6 h-6"
              >
                <path d="m20.87 20.17-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path>
              </svg>
            </button>
          </div>
          {/* Mic button */}
          <button className="rounded-full min-w-10 min-h-10 flex center bg-raised_bg hover:bg-hover_bg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
            >
              <path d="M12 3c-1.66 0-3 1.37-3 3.07v5.86c0 1.7 1.34 3.07 3 3.07s3-1.37 3-3.07V6.07C15 4.37 13.66 3 12 3zm6.5 9h-1c0 3.03-2.47 5.5-5.5 5.5S6.5 15.03 6.5 12h-1c0 3.24 2.39 5.93 5.5 6.41V21h2v-2.59c3.11-.48 5.5-3.17 5.5-6.41z"></path>
            </svg>
          </button>
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
            <img src="https://via.placeholder.com/88" alt="" className="" />
          </button>
        </div>
      </header>
    </>
  );
};

export default YTHeader;
