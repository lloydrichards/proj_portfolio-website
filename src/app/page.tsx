import { PostCard } from "@/components/molecule/post_card";
import { ProjectCard } from "@/components/molecule/project_card";
import {
  typefaceBlockQuote,
  typefaceBody1,
  typefaceHeading1,
  typefaceHeading2,
} from "@/components/tokens/typeface";
import { getFeaturedLabs } from "@/services/get-featured-labs";
import { getFeaturedProjects } from "@/services/get-featured-projects";
import Image from "next/image";

const HomePage = async () => {
  const allProjects = await getFeaturedProjects();
  const allLabs = await getFeaturedLabs();

  return (
    <main className="col-span-full grid grid-cols-subgrid grid-rows-4 gap-3">
      <Image
        className="col-span-4 row-span-2"
        src="/images/lloyd_richards_portrait.png"
        alt="Half body head shot of Lloyd Richards"
        width={400}
        height={600}
        priority
      />
      <section className="col-span-6 col-start-7 self-center justify-self-center">
        <h1 className={typefaceHeading1()}>Hello, I&apos;m Lloyd</h1>
        <blockquote className={typefaceBlockQuote()}>
          Exploring innovative ways of visualizing a sustainable future through
          data
        </blockquote>
      </section>
      <section className="col-span-8 self-center justify-self-center">
        <h2 className={typefaceHeading2()}>How to Use</h2>
        <p className={typefaceBody1()}>
          This website is a personal portfolio and lab space where I can
          showcase my projects, experiment with new ideas, and share my thoughts
          and experiences through blogging. Please feel free to explore my
          recent projects, read my lab and blog posts, or connect with me
          through social media.
        </p>
      </section>
      {allProjects.map(({ frontmatter }) => (
        <ProjectCard key={"project" + frontmatter.slug} project={frontmatter} />
      ))}
      <div className="col-span-3" />
      {allLabs.map(({ frontmatter }) => (
        <PostCard
          key={"lab" + frontmatter.slug}
          post={frontmatter}
          className="col-span-3"
        />
      ))}
    </main>
  );
};

export default HomePage;
