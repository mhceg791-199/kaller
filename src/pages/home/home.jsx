import ArchitecturalIntro from "../../components/home/ArchitecturalIntro/ArchitecturalIntro";
import AwardsRecognition from "../../components/home/AwardsRecognition/AwardsRecognition";
import HeroSection from "../../components/home/HeroSection/HeroSection";
// import Overview from "../../components/home/Overview/Overview";
import PortfolioSection from "../../components/home/Portfolio/portfolioProjects";
import WhoWeAreSection from "../../components/home/WhoWeAre/WhoWeAre";

export default function home() {
  return (
    <>
      <HeroSection />
      <ArchitecturalIntro/>
      <WhoWeAreSection/>
      <AwardsRecognition/>
      {/* <Overview /> */}
      <PortfolioSection />
    </>
  );
}
