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
import ProtectedRoute from "./components/pages/access/ProtectedRoute";
import DashUsers from "./components/pages/dashboard/Users/DashUsers";
import Login from "./components/pages/access/Login";
import CreatePassword from "./components/pages/access/CreatePassword";
import ForgotPassword from "./components/pages/access/ForgotPassword";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <StoreProvider>
          <Router>
            <Routes>
              {/* FOR NOT FOUND 404 PAGE */}
              <Route path="*" element={<NotFound />} />

              {/* Login Page */}
              <Route path="/login" element={<Login />} />

              {/* Password Setup & Reset */}
              <Route path="/create-password" element={<CreatePassword />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />

              {/* Portfolio Page */}
              <Route path="/" element={<Home />} />

            {/* PROTECTED PAGES START */}
              {/* Dashboard Home */}
              <Route
                path="/database/"
                element={
                  <ProtectedRoute>
                    <DashHome />
                  </ProtectedRoute>
                }
              />
              {/* Dashboard Pages */}
              <Route
                path="/database/project/"
                element={
                  <ProtectedRoute>
                    <DashProjCount />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/database/project/full"
                element={
                  <ProtectedRoute>
                    <DashProjectFull />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/database/project/info"
                element={
                  <ProtectedRoute>
                    <DashProjectInfo />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/database/project/img"
                element={
                  <ProtectedRoute>
                    <DashProjectImg />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/database/project/skills"
                element={
                  <ProtectedRoute>
                    <DashProjectSkill />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/database/certs"
                element={
                  <ProtectedRoute>
                    <DashCerts />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/database/skills"
                element={
                  <ProtectedRoute>
                    <DashSkills />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/database/users"
                element={
                  <ProtectedRoute>
                    <DashUsers />
                  </ProtectedRoute>
                }
              />
            {/* PROTECTED PAGES END */}
            </Routes>
          </Router>
        </StoreProvider>
      </QueryClientProvider>
    </>
  );
}
export default App;
