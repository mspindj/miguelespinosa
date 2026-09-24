import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Outlet, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import SiteLayout from "./site/SiteLayout";
import Home from "./site/pages/Home";
import CasePage from "./site/pages/CasePage";
import NotFound from "./site/pages/NotFound";
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
import DesignDebtArticle from "./pages/articles/DesignDebtArticle";
import TrustLayerArticle from "./pages/articles/TrustLayerArticle";
import AmbassadorModelArticle from "./pages/articles/AmbassadorModelArticle";
import OrderTakerArticle from "./pages/articles/OrderTakerArticle";
import CostOfConfusionArticle from "./pages/articles/CostOfConfusionArticle";
import HireForJudgmentArticle from "./pages/articles/HireForJudgmentArticle";
import AIHarnessArticle from "./pages/articles/AIHarnessArticle";
import AIWhereBelongsArticle from "./pages/articles/AIWhereBelongsArticle";
import AITrustCalibrationArticle from "./pages/articles/AITrustCalibrationArticle";
import CorrectionsLogArticle from "./pages/articles/CorrectionsLogArticle";
import DesignerTrainsModelArticle from "./pages/articles/DesignerTrainsModelArticle";
import DesignMdArticle from "./pages/articles/DesignMdArticle";
import AIDesignOS from "./pages/AIDesignOS";
import Privacy from "./pages/Privacy";

const queryClient = new QueryClient();

/** Pages not yet migrated to the new system (phase 2) keep their own chrome and scroll reset. */
const LegacyLayout = () => (
  <>
    <ScrollToTop />
    <Outlet />
  </>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Redesigned routes (Terminal Brutal) */}
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/case-study/:slug" element={<CasePage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          {/* Legacy routes, migrated in phase 2 */}
          <Route element={<LegacyLayout />}>
            <Route path="/about" element={<About />} />
            <Route path="/ai-design-os" element={<AIDesignOS />} />
            <Route path="/privacy" element={<Privacy />} />
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
            <Route path="/insights/design-debt" element={<DesignDebtArticle />} />
            <Route path="/insights/trust-layer" element={<TrustLayerArticle />} />
            <Route path="/insights/ambassador-model" element={<AmbassadorModelArticle />} />
            <Route path="/insights/order-taker" element={<OrderTakerArticle />} />
            <Route path="/insights/cost-of-confusion" element={<CostOfConfusionArticle />} />
            <Route path="/insights/hire-for-judgment" element={<HireForJudgmentArticle />} />
            <Route path="/insights/ai-harness" element={<AIHarnessArticle />} />
            <Route path="/insights/ai-where-it-belongs" element={<AIWhereBelongsArticle />} />
            <Route path="/insights/ai-trust-calibration" element={<AITrustCalibrationArticle />} />
            <Route path="/insights/corrections-md" element={<CorrectionsLogArticle />} />
            <Route path="/insights/designer-trains-model" element={<DesignerTrainsModelArticle />} />
            <Route path="/insights/design-md" element={<DesignMdArticle />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
