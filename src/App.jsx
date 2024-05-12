import { QueryClient } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NotFound from "./components/pages/NotFound";
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
