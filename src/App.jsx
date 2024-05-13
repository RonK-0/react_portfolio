import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import Home from "./components/pages/home/Home";
import { StoreProvider } from "./store/StoreContext";
import DashboardHome from "./components/pages/dashboard/DashboardHome";
import DashboardProject from "./components/pages/dashboard/DashboardProject";
import DashboardProjectImg from "./components/pages/dashboard/DashboardProjectImg";

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
              <Route path="/database/project/" element={<DashboardProject />} />
              <Route path="/database/project/img" element={<DashboardProjectImg />} />

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
