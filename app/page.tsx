import Hero from "../components/sections/hero/default";
import Footer from "../components/footer/default";
import Navigation from "@/components/ui/navigation";
import Features from "@/components/sections/logos/default";
import {ImageGenLogo} from "@/components/logos/image-gen-logo";
import {About} from "@/components/about/default";
import {Templates} from "@/components/templates/default";
import InfiniteScrollBanner from "@/components/animation/default";
import ImageGallery from "@/components/ui/images/ImageGallery ";


// Your Home component is now a Server Component (async)
export default async function Home() {
  // If you need to fetch any data, you can do it here
  // Example: 
  // const res = await fetch('https://api.example.com/something');
  // const data = await res.json();

  
  return (
    <main className="min-h-screen w-full overflow-hidden bg-background text-foreground">
      <header className="relative flex items-center h-16 px-4">
        <div className="absolute left-4">
          <ImageGenLogo />
        </div>
        <div className="mx-auto">
          <Navigation />
        </div>
      </header>
      <Hero />
      <ImageGallery/>
      <Features id="features-section" />
      <InfiniteScrollBanner />
      <Templates id="templates-section" />
      <About id="about-section" />
      <Footer/>
    </main>
  );
}

