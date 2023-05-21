import { PostCard } from "@/components/posts/post_card/PostCard";
import { RecentPosts } from "@/components/posts/recent_posts/RecentPosts";
import { ProjectCard } from "@/components/projects/project_card/ProjectCard";
import { SpotlightProjects } from "@/components/projects/spotlight_projects/SpotlightProjects";
import { allBlogs, allLabs, allProjects } from "contentlayer/generated";
import Image from "next/image";
import { TbBarrierBlock } from "react-icons/tb";

export default function Home() {
  const sortedProjects = allProjects
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .filter((d) => d.published);
  return (
    <main className="mb-8 flex min-h-screen flex-col items-center gap-8">
      <section className="hero min-h-[95vh] bg-base-200 ">
        <div className="hero-content h-full flex-col p-0 md:flex-row">
          <Image
            className="self-end"
            src="/images/lloyd_richards_portrait.png"
            alt="Lloyd Richards Portrait"
            width={400}
            height={600}
          />
          <div className="prose md:w-[30vw]">
            <h1 className="font-serif">Hello, I&apos;m Lloyd</h1>
            <blockquote>
              Exploring innovative ways of visualizing a sustainable future
              through data
            </blockquote>
          </div>
        </div>
      </section>
      <section className="prose">
        <h2 className="font-serif">How to Use</h2>
        <p>
          This website is a personal portfolio and lab space where I can
          showcase my projects, experiment with new ideas, and share my thoughts
          and experiences through blogging. Please feel free to explore my
          recent projects, read my lab and blog posts, or connect with me
          through social media.
        </p>
      </section>
      <SpotlightProjects />
      <div className="w-full bg-base-200 py-8">
        <RecentPosts posts={[...allLabs, ...allBlogs]} />
      </div>
      <section className="min-h-96 prose mt-8 w-full">
        <h2 className="font-serif">Timeline</h2>
        <div className="min-h-96 not-prose card rounded bg-base-300">
          <div className="card-body flex-row items-center justify-center text-error-content">
            <TbBarrierBlock size={34} />
            <h3 className="text-xl font-bold">Currently Under Construction</h3>
          </div>
        </div>
      </section>
    </main>
  );
}
