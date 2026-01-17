import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FlamingoCase from "./pages/FlamingoCase";
import DesignTransformationCase from "./pages/DesignTransformationCase";
import TatiCase from "./pages/TatiCase";
import CashConversionCase from "./pages/CashConversionCase";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/case-study/flamingo" element={<FlamingoCase />} />
          <Route path="/case-study/design-transformation" element={<DesignTransformationCase />} />
          <Route path="/case-study/tati-ai" element={<TatiCase />} />
          <Route path="/case-study/cash-conversion" element={<CashConversionCase />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
