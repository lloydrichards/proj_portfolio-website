import { RecentPosts } from "@/components/organism/recent_posts/RecentPosts";
import { SpotlightProjects } from "@/components/organism/spotlight_projects/SpotlightProjects";
import { allBlogs, allLabs, allOccupations } from "contentlayer/generated";
import { isAfter, subYears } from "date-fns";
import dynamic from "next/dynamic";
import Image from "next/image";

const TimelineDashboard = dynamic(
  () => import("@/components/organism/timeline_dashboard/timeline_dashboard"),
  {
    ssr: false,
  },
);

export default function Home() {
  return (
    <main className="mb-8 flex min-h-screen flex-col items-center gap-8 text-foreground">
      <section className="flex min-h-[98vh] w-full justify-center bg-accent ">
        <div className="prose grid grid-cols-5 gap-8 p-0 dark:prose-invert">
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
      <section className="prose px-2 dark:prose-invert">
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
      <div className="w-full bg-accent p-8">
        <RecentPosts posts={[...allLabs, ...allBlogs]} />
      </div>
      <TimelineDashboard
        occupations={allOccupations.filter((d) =>
          isAfter(new Date(d.start_date), subYears(new Date(), 5)),
        )}
      />
    </main>
  );
}
