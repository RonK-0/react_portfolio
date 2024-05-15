import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import Home from "./components/pages/home/Home";
import { StoreProvider } from "./store/StoreContext";
import DashboardHome from "./components/pages/dashboard/DashHome";
import DashboardProjectImg from "./components/pages/dashboard/ProjectImg/DashProjectImg";
import DashboardProjectInfo from "./components/pages/dashboard/ProjectInfo/DashProjectInfo";
import DashboardProjectFull from "./components/pages/dashboard/DashProjectFull";
import DashSkills from "./components/pages/dashboard/Skill/DashSkills";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <StoreProvider>
          <Router>
            <Routes>
              {/* Portfolio Page */}
              <Route path="/" element={<Home />} />

              {/* Dashboard Home */}
              <Route path="/database/" element={<DashboardHome />} />
              <Route path="/database/project/full" element={<DashboardProjectFull />} />
              <Route path="/database/project/info" element={<DashboardProjectInfo />} />
              <Route path="/database/project/img" element={<DashboardProjectImg />} />
              {/* <Route path="/database/project/skills" element={< } /> */}
              {/* <Route path="/database/certificates" element={< } /> */}
              <Route path="/database/skills" element={<DashSkills/> } />

              {/* FOR NOT FOUND 404 PAGE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </StoreProvider>
      </QueryClientProvider>
    </>
  );
}
export default App;
