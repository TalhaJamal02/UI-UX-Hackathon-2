import EditorSection from "@/components/EditorSection";
import FeaturedPosts from "@/components/FeaturedPosts";
import FeaturedSection from "@/components/FeaturedSection";
import HeroSection from "@/components/Hero";
import HeroTwo from "@/components/Hero2";
import HeroThree from "@/components/Hero3";

export default function Home() {
  return (
    <div className=" h-full w-full overflow-hidden">
      <HeroSection />
      <div className="h-auto pt-16 pb-16 w-full">
        <EditorSection />
      </div>
      <div className="h-auto pt-16 pb-16 w-full">
        <FeaturedSection />
      </div>
      <div className="h-auto pt-16 w-full">
        <HeroTwo />
      </div>
      <div>
        <HeroThree />
      </div>
      <div className="h-auto pt-24 pb-16 w-full">
        <FeaturedPosts />
      </div>
    </div>
  );
}
