import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Massage from "./pages/Massage";
import Facials from "./pages/Facials";
import HandFootCare from "./pages/HandFootCare";
import BrowsLashes from "./pages/BrowsLashes";
import HairRemoval from "./pages/HairRemoval";
import GentlemensSpa from "./pages/GentlemensSpa";
import Policies from "./pages/Policies";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/massage" element={<Massage />} />
          <Route path="/facials" element={<Facials />} />
          <Route path="/hand-foot-care" element={<HandFootCare />} />
          <Route path="/brows-lashes" element={<BrowsLashes />} />
          <Route path="/hair-removal" element={<HairRemoval />} />
          <Route path="/gentlemens-spa" element={<GentlemensSpa />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
