import React from "react";
import Sidebar_Collapsed from "./Sidebar_Collapsed";
import Sidebar_Expanded from "./Sidebar_Expanded";
import YTHeader from "./YTHeader";

const DashWrapper = ({ children }) => {
  const [showSideBar, setShowSideBar] = React.useState(false);
  return (
    <div className={`dash_page relative bg-dark_bg min-h-screen h-full`}>
      <YTHeader setShowSideBar={setShowSideBar} showSideBar={showSideBar} />
      <div className={`home_body relative w-full h-full bg-dark_bg`}>
        <div className={`mobile flex xl:hidden w-full xl:w-0`}>
          <Sidebar_Collapsed />
          <Sidebar_Expanded
            setShowSideBar={setShowSideBar}
            showSideBar={showSideBar}
          />
          <main
            className={`relative top-[56px] left-[72px] ml-2 h-fit w-[calc(100%-72px)] ${
              showSideBar ? "overflow-hidden" : "overflow-y-visible"
            }`}
          >
            {children}
          </main>
        </div>

        <div className={`desktop hidden xl:flex w-0 xl:w-full h-full`}>
          {showSideBar === false && <Sidebar_Collapsed />}
          {showSideBar === true && (
            <Sidebar_Expanded
              setShowSideBar={setShowSideBar}
              showSideBar={showSideBar}
            />
          )}
          <main
            className={`relative top-[56px] ${
              showSideBar
                ? "left-[240px] w-[calc(100%-240px)]"
                : "left-[72px] w-[calc(100%-72px)]"
            } ml-2  h-fit ${
              showSideBar ? "overflow-hidden" : "overflow-y-visible"
            }`}
          >
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashWrapper;
