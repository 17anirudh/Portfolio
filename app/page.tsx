import { HeroSection } from "@/components/sections";
import dynamic from "next/dynamic";
import Loading from "@/components/ui/loading";

const SkillsSection = dynamic(() => import("@/components/sections").then((mod) => mod.SkillsSection), { loading: () => <Loading /> });
const ProjectsSection = dynamic(() => import("@/components/sections").then((mod) => mod.ProjectsSection), { loading: () => <Loading /> });
const JourneySection = dynamic(() => import("@/components/sections").then((mod) => mod.JourneySection), { loading: () => <Loading /> });
const ContactSection = dynamic(() => import("@/components/sections").then((mod) => mod.ContactSection), { loading: () => <Loading /> });

export default function Home() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <JourneySection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
