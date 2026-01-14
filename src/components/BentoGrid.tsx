import ProfileCard from "./ProfileCard";
import StatusCard from "./StatusCard";
import StackCard from "./StackCard";
import ExperienceCard from "./ExperienceCard";
import MetricsCard from "./MetricsCard";
import ContactCard from "./ContactCard";

const BentoGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <ProfileCard />
      <StatusCard />
      <StackCard />
      <ExperienceCard />
      <MetricsCard />
      <ContactCard />
    </div>
  );
};

export default BentoGrid;
