import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
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
        <HowItWorksSection />
        <ModulesSection />
        <BlogNewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
