import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import AboutSnippet from "@/components/AboutSnippet";
import FeaturedPortfolio from "@/components/FeaturedPortfolio";
import ParallaxQuote from "@/components/ParallaxQuote";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="homePage">
      <HeroSection />
      <TrustBar />
      <AboutSnippet />
      <FeaturedPortfolio />
      <ParallaxQuote />
      <Testimonials />
    </div>
  );
}
