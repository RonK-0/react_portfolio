import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import DashCerts from "./components/pages/dashboard/Cert/DashCerts";
import DashHome from "./components/pages/dashboard/DashHome";
import DashProjCount from "./components/pages/dashboard/DashProjectCount";
import DashProjectFull from "./components/pages/dashboard/DashProjectFull";
import DashProjectImg from "./components/pages/dashboard/ProjectImg/DashProjectImg";
import DashProjectInfo from "./components/pages/dashboard/ProjectInfo/DashProjectInfo";
import DashProjectSkill from "./components/pages/dashboard/ProjectSkill/DashProjectSkill";
import DashSkills from "./components/pages/dashboard/Skill/DashSkills";
import Home from "./components/pages/home/Home";
import { StoreProvider } from "./store/StoreContext";

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
              <Route path="/database/" element={<DashHome />} />
              {/* Dashboard Pages */}
              <Route path="/database/project/" element={<DashProjCount />} />
              <Route path="/database/project/full" element={<DashProjectFull />} />
              <Route path="/database/project/info" element={<DashProjectInfo />} />
              <Route path="/database/project/img" element={<DashProjectImg />} />
              <Route path="/database/project/skills" element={<DashProjectSkill/> } />
              <Route path="/database/certs" element={<DashCerts/> } />
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
