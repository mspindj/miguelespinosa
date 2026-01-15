import ProfileCard from "./ProfileCard";
import StatusCard from "./StatusCard";
import StackCard from "./StackCard";
import CaseStudyCard from "./CaseStudyCard";
import MetricsCard from "./MetricsCard";
import ContactCard from "./ContactCard";

const caseStudies = [
  {
    codename: "Flamingo",
    title: "Design Systems",
    description: "Creating a unified design language to scale decisions across global teams. Governance, Tokenization, and Adoption.",
    icon: "design-system" as const,
  },
  {
    codename: "Tati",
    title: "AI Experience",
    description: "Designing the trust layer between humans and AI agents. Focusing on clarity, specialized interfaces, and user confidence.",
    icon: "ai" as const,
  },
  {
    codename: "Cash Conversion",
    title: "Fintech UX",
    description: "Transforming complex financial operations into seamless, human-centric experiences. Simplification of mental models.",
    icon: "fintech" as const,
  },
];

const BentoGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <ProfileCard />
      <StatusCard />
      <StackCard />
      {caseStudies.map((study) => (
        <CaseStudyCard key={study.codename} {...study} />
      ))}
      <MetricsCard />
      <ContactCard />
    </div>
  );
};

export default BentoGrid;
