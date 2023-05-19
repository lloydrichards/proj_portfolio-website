import { ProjectCard } from "@/components/projects/project_card/ProjectCard";
import { allProjects } from "contentlayer/generated";
import Image from "next/image";

export default function Home() {
  const sortedProjects = allProjects
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .filter((d) => d.published);
  return (
    <main className="flex min-h-screen flex-col items-center p-16">
      <section className="prose">
        <h1 className="font-serif">Hello, I&apos;m Lloyd</h1>
        <Image
          src="/images/lloyd_richards_portrait.png"
          alt="Lloyd Richards Portrait"
          style={{
            position: "relative",
            top: "auto",
            right: 0,
          }}
          width={300}
          height={300}
        />
        <blockquote>
          Exploring innovative ways of visualizing a sustainable future through
          data
        </blockquote>
        <h2 className="font-serif">About</h2>
        <p>
          I&apos;m a Zurich-based <strong>Interaction Engineer</strong>. Data
          visualisation is a potent tool for understanding and communicating
          complex information. As a garden designer, I aimed to create
          beautiful, sustainable spaces that enhance the well-being of people
          and the planet. Now as a web developer, I want to empower people to
          understand the earth better.
        </p>
        <p>
          In my life, I&apos;ve travelled to many places, met many people, and
          pursued varied careers. From a baker in Canada to a bamboo builder in
          Costa Rica and from a landscaper in England to a web designer in
          Switzerland, I&apos;ve always been passionate about learning new
          skills and applying them to real-world projects.
        </p>
        <p>
          My approach to problem-solving is rooted in three core principles:
        </p>
        <ul role="list">
          <li>
            Passionate about <strong>sustainability</strong> and having a
            positive impact on the planet
          </li>
          <li>
            Obsessed with <strong>systems thinking</strong> and understanding
            the interconnectedness of different disciplines
          </li>
          <li>
            Constantly <strong>learning</strong> new skills and applying them to
            real-world projects
          </li>
        </ul>
        <p>
          This website is a personal portfolio and experimental space where I
          can showcase my projects, experiment with new ideas, and share my
          thoughts and experiences through blogging. Please feel free to explore
          my recent projects, read my experiments and blog posts, and contact me
          directly via the form below or through social media.
        </p>
      </section>
      <section className="card card-body mt-8 min-h-96 w-full bg-secondary text-secondary-content">
        <h2 className="card-title font-serif">Portfolio</h2>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
          {sortedProjects
            .filter((d) => d.spotlight)
            .map((project) => (
              <ProjectCard key={project.slugAsParams} project={project} />
            ))}
        </div>
      </section>
      <section className="card card-body mt-8 h-96 w-full bg-secondary text-secondary-content">
        <h2 className="card-title font-serif">Posts</h2>
      </section>
      <section className="h-200 card card-body mt-8 h-screen w-full bg-secondary text-secondary-content">
        <h2 className="card-title font-serif">Timeline</h2>
      </section>
    </main>
  );
}
