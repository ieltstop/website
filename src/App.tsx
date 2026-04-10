import { Routes, Route } from "react-router";
import PublicLayout from "./components/layout/public-layout";
import HomePage from "./routes/home";
import PricingPage from "./routes/pricing";
import FAQPage from "./routes/faq";
import ContactPage from "./routes/contact";
import BlogPublicPage from "./routes/blog-public";
import PrivacyPolicyPage from "./routes/privacy-policy";
import TermsConditionsPage from "./routes/terms-conditions";
import RefundPolicyPage from "./routes/refund-policy";
import BandCalculatorPage from "./routes/band-calculator";
import ComparePage from "./routes/compare";
import TestDayGuidePage from "./routes/test-day-guide";
import StudyAbroadPage from "./routes/study-abroad";
import EssayCheckerPage from "./routes/services/essay-checker";
import LetterCheckerPage from "./routes/services/letter-checker";
import ReportCheckerPage from "./routes/services/report-checker";
import SpeakingAssessmentPage from "./routes/services/speaking-assessment";
import TextEnhancerPage from "./routes/services/text-enhancer";
import SampleAnswersPage from "./routes/services/sample-answers";

export default function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPublicPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-conditions" element={<TermsConditionsPage />} />
        <Route path="/refund-policy" element={<RefundPolicyPage />} />
        <Route path="/band-calculator" element={<BandCalculatorPage />} />
        <Route path="/compare" element={<ComparePage />} />
        <Route path="/test-day-guide" element={<TestDayGuidePage />} />
        <Route path="/study-abroad" element={<StudyAbroadPage />} />
        <Route path="/services/essay-checker" element={<EssayCheckerPage />} />
        <Route path="/services/letter-checker" element={<LetterCheckerPage />} />
        <Route path="/services/report-checker" element={<ReportCheckerPage />} />
        <Route path="/services/speaking-assessment" element={<SpeakingAssessmentPage />} />
        <Route path="/services/text-enhancer" element={<TextEnhancerPage />} />
        <Route path="/services/sample-answers" element={<SampleAnswersPage />} />
      </Route>
    </Routes>
  );
}
