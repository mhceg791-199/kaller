import HeroSection from "../../components/home/HeroSection/HeroContainer";
import ArchitecturalIntro from "../../components/home/ArchitecturalIntro/ArchitecturalIntroContainer";
// import AwardsRecognition from "../../components/home/AwardsRecognition/AwardsContainer";
// import Overview from "../../components/home/Overview/Overview";
import PortfolioSection from "../../components/home/Portfolio/portfolioProjects";
import WhoWeAre from "../../components/home/WhoWeAre/WhoWeAreContainer";

export default function home() {
  return (
    <main>
      <HeroSection />
      <ArchitecturalIntro/>
      <WhoWeAre/>
      {/* <AwardsRecognition/> */}
      {/* <Overview /> */}
      <PortfolioSection />
    </main>
  );
}
