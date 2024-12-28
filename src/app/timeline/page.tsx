import { Timeline } from "@/components/chart/timeline/Timeline";
import { getAllOccupations } from "@/services/get-all-occupations";

const TimelinePage: React.FC = async () => {
  const allOccupations = await getAllOccupations();
  const data = allOccupations.map((o) => o.frontmatter);
  return (
    <div>
      <h1>Welcome to the timeline page</h1>
      <Timeline data={data} width={800} />
    </div>
  );
};

export default TimelinePage;
