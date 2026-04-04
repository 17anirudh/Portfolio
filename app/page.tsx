import ScrollWrapper from "@/lib/scroll-wrapper";
import { HeroSection } from "@/components/content";
import dynamic from "next/dynamic";

const SkillsSection = dynamic(() => import("@/components/content").then((mod) => mod.SkillsSection));
const ProjectsSection = dynamic(() => import("@/components/projects").then((mod) => mod.default));

export default function Home() {
  return (
    <ScrollWrapper>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
    </ScrollWrapper>
  );
}
