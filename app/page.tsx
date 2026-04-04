import ScrollWrapper from "@/lib/scroll-wrapper";
import { HeroSection } from "@/components/content";
import dynamic from "next/dynamic";
import Loading from "@/components/ui/loading";

const SkillsSection = dynamic(() => import("@/components/content").then((mod) => mod.SkillsSection), { loading: () => <Loading /> });
const ProjectsSection = dynamic(() => import("@/components/projects").then((mod) => mod.default), { loading: () => <Loading /> });
const JourneySection = dynamic(() => import("@/components/content").then((mod) => mod.JourneySection), { loading: () => <Loading /> });
const ContactSection = dynamic(() => import("@/components/content").then((mod) => mod.ContactSection), { loading: () => <Loading /> });

export default function Home() {
  return (
    <ScrollWrapper>
      <HeroSection />
      <SkillsSection />
      <JourneySection />
      <ProjectsSection />
      <ContactSection />
    </ScrollWrapper>
  );
}
