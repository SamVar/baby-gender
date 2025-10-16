import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import Home from "./pages/Home";
import Plan from "./pages/Plan";
import Predict from "./pages/Predict";
import About from "./pages/About";
import Myths from "./pages/Myths";
import Science from "./pages/Science";
import Medical from "./pages/Medical";
import Culture from "./pages/Culture";
import Lifestyle from "./pages/Lifestyle";
import Stories from "./pages/Stories";
import Resources from "./pages/Resources";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/predict" element={<Predict />} />
          <Route path="/about" element={<About />} />
          
          {/* Learn Section */}
          <Route path="/myths" element={<Myths />} />
          <Route path="/science" element={<Science />} />
          <Route path="/medical" element={<Medical />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/lifestyle" element={<Lifestyle />} />
          
          {/* Resources Section */}
          <Route path="/stories" element={<Stories />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/faq" element={<FAQ />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
