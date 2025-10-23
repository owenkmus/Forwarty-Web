import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ModulesSection } from "@/components/modules-section";
import { BlogNewsSection } from "@/components/blog-news-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ModulesSection />
        <BlogNewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
