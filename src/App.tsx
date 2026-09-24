import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteLayout from "./site/SiteLayout";
import Home from "./site/pages/Home";
import CasePage from "./site/pages/CasePage";
import NotFound from "./site/pages/NotFound";

// Home and the decision records ship in the main chunk; every other route is its own chunk (R6.2).
const About = lazy(() => import("./site/pages/AboutPage"));
const Insights = lazy(() => import("./site/pages/InsightsPage"));
const AIDesignOS = lazy(() => import("./site/pages/AIDesignOSPage"));
const Privacy = lazy(() => import("./site/pages/PrivacyPage"));
const ROIExperienceArticle = lazy(() => import("./pages/articles/ROIExperienceArticle"));
const AILeadershipParadoxArticle = lazy(() => import("./pages/articles/AILeadershipParadoxArticle"));
const AuthorityGapArticle = lazy(() => import("./pages/articles/AuthorityGapArticle"));
const OutcomeStoriesArticle = lazy(() => import("./pages/articles/OutcomeStoriesArticle"));
const LeanLeadershipArticle = lazy(() => import("./pages/articles/LeanLeadershipArticle"));
const AIGuardrailsArticle = lazy(() => import("./pages/articles/AIGuardrailsArticle"));
const StrategyBottleneckArticle = lazy(() => import("./pages/articles/StrategyBottleneckArticle"));
const ResearchInflectionArticle = lazy(() => import("./pages/articles/ResearchInflectionArticle"));
const GeneralistAdvantageArticle = lazy(() => import("./pages/articles/GeneralistAdvantageArticle"));
const DesignDebtArticle = lazy(() => import("./pages/articles/DesignDebtArticle"));
const TrustLayerArticle = lazy(() => import("./pages/articles/TrustLayerArticle"));
const AmbassadorModelArticle = lazy(() => import("./pages/articles/AmbassadorModelArticle"));
const OrderTakerArticle = lazy(() => import("./pages/articles/OrderTakerArticle"));
const CostOfConfusionArticle = lazy(() => import("./pages/articles/CostOfConfusionArticle"));
const HireForJudgmentArticle = lazy(() => import("./pages/articles/HireForJudgmentArticle"));
const AIHarnessArticle = lazy(() => import("./pages/articles/AIHarnessArticle"));
const AIWhereBelongsArticle = lazy(() => import("./pages/articles/AIWhereBelongsArticle"));
const AITrustCalibrationArticle = lazy(() => import("./pages/articles/AITrustCalibrationArticle"));
const CorrectionsLogArticle = lazy(() => import("./pages/articles/CorrectionsLogArticle"));
const DesignerTrainsModelArticle = lazy(() => import("./pages/articles/DesignerTrainsModelArticle"));
const DesignMdArticle = lazy(() => import("./pages/articles/DesignMdArticle"));

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/case-study/:slug" element={<CasePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/ai-design-os" element={<AIDesignOS />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/insights" element={<Insights />} />
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
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
