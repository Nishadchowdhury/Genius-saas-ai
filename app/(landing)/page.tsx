import { LandingNavbar } from "@/components/landing-navbar";
import HeroCards from "@/components/Hero-cards";

const LandingPage = () => {
  return (
    <div className="md:min-h-screen md:max-h-screen md:overflow-hidden ">
      <LandingNavbar />
      <HeroCards />
    </div>
  );
}

export default LandingPage;