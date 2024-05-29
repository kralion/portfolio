import { Chip } from "@material-tailwind/react";
import IconCloud from "../components/icon-cloud";
const slugs = [
  "typescript",
  "javascript",
  "expo",
  "react",
  "nuxtdotjs",
  "trpc",
  "drizzle",
  "netlify",
  "vite",
  "vitest",
  "tailwindcss",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "firebase",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "visualstudiocode",
  "figma",
];

export default function TechStack() {
  return (
    <div className="  pt-24 lg:pt-16 text-center lg:space-y-20 space-y-10 font-Obviously">
      <div className="text-center space-y-2">
        <Chip
          color="orange"
          className="w-fit rounded-full mx-auto  "
          variant="gradient"
          value="My Tech Stack"
        />
        <h3 className="lg:text-3xl text-2xl font-black   gap-1">
          Technologies I work with
        </h3>
      </div>
      <div className=" flex mx-auto h-full w-full lg:max-w-[70rem] max-w-[40rem] items-center justify-center overflow-hidden rounded-lg  bg-background  ">
        <IconCloud iconSlugs={slugs} />
      </div>
    </div>
  );
}
