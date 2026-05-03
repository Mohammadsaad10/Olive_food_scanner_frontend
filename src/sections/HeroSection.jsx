import Container from "../layout/Container";
import HeroHeadlineBlock from "../components/hero/HeroHeadlineBlock";
import HeroProductCarousel from "../components/hero/HeroProductCarousel";
import HeroTrustAvatars from "../components/hero/HeroTrustAvatars";

const HeroSection = () => {
  return (
    <section>
      <Container className="flex flex-col items-center">
        <HeroTrustAvatars />
        <HeroHeadlineBlock />
        <HeroProductCarousel />
      </Container>
    </section>
  );
};

export default HeroSection;
