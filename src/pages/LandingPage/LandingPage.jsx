import { TranslationProvider } from "@/shared/TranslationContext";

import Header from "@/components/layout/Header/";
import HeroSection from "./components/HeroSection/HeroSection";
import DemoSection from "./components/DemoSection/DemoSection";
import AvatarsSection from "./components/AvatarsSection/AvatarsSection";
import AccessibilitySection from "./components/AccessibilitySection/AccessibilitySection";
import FeaturesSection from "./components/FeaturesSection/FeaturesSection";
import PricingSection from "./components/PricingSection/PricingSection";
import CommunitySection from "./components/CommunitySection/CommunitySection";
import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection";
import Footer from "@/components/layout/Footer";

import "./LandingPage.css";

const SECTIONS_ORDER = [
  HeroSection,
  DemoSection,
  AvatarsSection,
  AccessibilitySection,
  FeaturesSection,
  PricingSection,
  CommunitySection,
  TestimonialsSection
];

export default function LandingPage() {
  return (
    <main id="landingPage">
      <TranslationProvider prefixo="landingPage">
        <Header />
        {SECTIONS_ORDER.map((Section, index) => (
          <Section key={index} />
        ))}
      </TranslationProvider>
      <Footer />
    </main>
  );
}
