import {
  typefaceBody1,
  typefaceHeading1,
  typefaceListItem,
} from "@/components/tokens/typeface";

const AboutPage = () => {
  return (
    <main className="col-span-full">
      <h1 className={typefaceHeading1()}>About Me</h1>
      <p className={typefaceBody1()}>
        I&apos;m a Zurich-based <strong>Interaction Engineer</strong>. Data
        visualisation is a potent tool for understanding and communicating
        complex information. As a garden designer, I aimed to create beautiful,
        sustainable spaces that enhance the well-being of people and the planet.
        Now as a web developer, I want to empower people to understand the earth
        better.
      </p>
      <p className={typefaceBody1()}>
        In my life, I&apos;ve travelled to many places, met many people, and
        pursued varied careers. From a baker in Canada to a bamboo builder in
        Costa Rica and from a landscaper in England to a web designer in
        Switzerland, I&apos;ve always been passionate about learning new skills
        and applying them to real-world projects.
      </p>
      <p className={typefaceBody1()}>
        My approach to problem-solving is rooted in three core principles:
      </p>
      <ul role="list" className={typefaceListItem("list-disc pl-4")}>
        <li>
          Passionate about <strong>sustainability</strong> and having a positive
          impact on the planet
        </li>
        <li>
          Obsessed with <strong>systems thinking</strong> and understanding the
          interconnectedness of different disciplines
        </li>
        <li>
          Constantly <strong>learning</strong> new skills and applying them to
          real-world projects
        </li>
      </ul>
      <p className={typefaceBody1()}>
        This website is a personal portfolio and experimental space where I can
        showcase my projects, experiment with new ideas, and share my thoughts
        and experiences through blogging. Please feel free to explore my recent
        projects, read my experiments and blog posts, and contact me directly
        via the form below or through social media.
      </p>
    </main>
  );
};

export default AboutPage;
