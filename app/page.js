import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Main from "@/components/main/Main";
import NewsletterSection from "@/components/newsletter/NewsLetter";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  return (
    <div className="bg-white font-lato">
      <Hero />
      <Main />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
