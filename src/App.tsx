import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TPDesignSystemCase from "./pages/TPDesignSystemCase";
import DesignTransformationCase from "./pages/DesignTransformationCase";
import TatiCase from "./pages/TatiCase";
import CashConversionCase from "./pages/CashConversionCase";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import InsightsHub from "./pages/InsightsHub";
import ROIExperienceArticle from "./pages/articles/ROIExperienceArticle";
import AILeadershipParadoxArticle from "./pages/articles/AILeadershipParadoxArticle";
import AuthorityGapArticle from "./pages/articles/AuthorityGapArticle";
import OutcomeStoriesArticle from "./pages/articles/OutcomeStoriesArticle";
import LeanLeadershipArticle from "./pages/articles/LeanLeadershipArticle";
import AIGuardrailsArticle from "./pages/articles/AIGuardrailsArticle";
import StrategyBottleneckArticle from "./pages/articles/StrategyBottleneckArticle";
import ResearchInflectionArticle from "./pages/articles/ResearchInflectionArticle";
import GeneralistAdvantageArticle from "./pages/articles/GeneralistAdvantageArticle";

const queryClient = new QueryClient();

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
          <Route path="/case-study/tp-design-system" element={<TPDesignSystemCase />} />
          <Route path="/case-study/design-transformation" element={<DesignTransformationCase />} />
          <Route path="/case-study/tati-ai" element={<TatiCase />} />
          <Route path="/case-study/cash-conversion" element={<CashConversionCase />} />
          {/* Insights Hub */}
          <Route path="/insights" element={<InsightsHub />} />
          {/* Article routes */}
          <Route path="/insights/roi-of-experience" element={<ROIExperienceArticle />} />
          <Route path="/insights/ai-leadership-paradox" element={<AILeadershipParadoxArticle />} />
          <Route path="/insights/authority-gap" element={<AuthorityGapArticle />} />
          <Route path="/insights/outcome-stories" element={<OutcomeStoriesArticle />} />
          <Route path="/insights/lean-leadership" element={<LeanLeadershipArticle />} />
          <Route path="/insights/ai-guardrails" element={<AIGuardrailsArticle />} />
          <Route path="/insights/strategy-bottleneck" element={<StrategyBottleneckArticle />} />
          <Route path="/insights/research-inflection" element={<ResearchInflectionArticle />} />
          <Route path="/insights/generalist-advantage" element={<GeneralistAdvantageArticle />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
