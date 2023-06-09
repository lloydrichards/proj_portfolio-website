import { PostCard } from "@/components/posts/post_card/PostCard";
import { RecentPosts } from "@/components/posts/recent_posts/RecentPosts";
import { ProjectCard } from "@/components/projects/project_card/ProjectCard";
import { SpotlightProjects } from "@/components/projects/spotlight_projects/SpotlightProjects";
import { allBlogs, allLabs, allProjects } from "contentlayer/generated";
import Image from "next/image";
import { TbBarrierBlock } from "react-icons/tb";

export default function Home() {
  return (
    <main className="mb-8 flex min-h-screen flex-col items-center gap-8">
      <section className="flex min-h-[98vh] w-full justify-center bg-accent ">
        <div className="prose grid grid-cols-5 gap-8 p-0">
          <Image
            className="col-span-5 mb-0 self-end md:col-span-3"
            src="/images/lloyd_richards_portrait.png"
            alt="Half body head shot of Lloyd Richards"
            width={400}
            height={600}
            priority
          />
          <div className="col-span-5 self-center px-4 md:col-span-2">
            <h1 className="font-serif">Hello, I&apos;m Lloyd</h1>
            <blockquote>
              Exploring innovative ways of visualizing a sustainable future
              through data
            </blockquote>
          </div>
        </div>
      </section>
      <section className="prose px-2">
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
      <div className="w-full bg-accent px-8 py-8">
        <RecentPosts posts={[...allLabs, ...allBlogs]} />
      </div>
      <section className="min-h-96 prose mt-8 w-full px-2">
        <h2 className="font-serif">Timeline</h2>
        <div className="min-h-96 not-prose rounded bg-secondary px-4 py-6">
          <div className="card-body text-error-content flex-row items-center justify-center">
            <TbBarrierBlock size={34} />
            <h3 className="text-xl font-bold">Currently Under Construction</h3>
          </div>
        </div>
      </section>
    </main>
  );
}
