import { LandingNavbar } from "@/components/landing-navbar";
import HeroCards from "@/components/Hero-cards";
import HomeBanner from "@/components/Home-banner";
import HomeFooter from "@/components/HomeFooter";
import Drawer_Component from "@/components/Drawer";

const LandingPage = () => {
  return (
    <div className=" ">
      <LandingNavbar />
      <HeroCards />
      <HomeBanner />
    </div>
  );
}

export default LandingPage;