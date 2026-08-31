import Carousel from "./_components/Carousel";
import Collections from "./_components/Collections";
import Gift from "./_components/Gift";
import HeroSection from "./_components/HeroSection";
import Inspiration from "./_components/Inspiration";
import Story from "./_components/Story";

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
