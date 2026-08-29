import Carousel from "./components/Carousel";
import Collections from "./components/Collections";
import Gift from "./components/Gift";
import HeroSection from "./components/HeroSection";
import Inspiration from "./components/Inspiration";
import Story from "./components/Story";

export default function Home() {
  return (
    <div data-theme="">
      <HeroSection />
      <Story />
      <Collections />
      <Carousel />
      <Inspiration />
      <Gift />
    </div>
  );
}
