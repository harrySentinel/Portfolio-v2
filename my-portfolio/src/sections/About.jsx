import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import { NextIcon } from "@/assets/icons/NextIcon";
import GithubIcon from "@/assets/icons/github.svg";
import { TailwindIcon } from "@/assets/icons/TailwindIcon";
import { NodeIcon } from "@/assets/icons/NodeIcon";
import { DockerIcon } from "@/assets/icons/DockerIcon";
import { MongoIcon } from "@/assets/icons/MongoIcon";
import { ShadcnIcon } from "@/assets/icons/ShadcnIcon";
import { ExpressIcon } from "@/assets/icons/ExpressIcon";
import { TechIcon } from "@/components/TechnoIcon";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";

const toolboxItems = [
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "javaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "Tailwind CSS",
    iconType: TailwindIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Node js",
    iconType: NodeIcon,
  },
  {
    title: "Express js",
    iconType: ExpressIcon,
  },
  {
    title: "MongoDB",
    iconType: MongoIcon,
  },
  {
    title: "Next js",
    iconType: NextIcon,
  },
  {
    title: "shadcn/ui",
    iconType: ShadcnIcon,
  },
  {
    title: "Docker",
    iconType: DockerIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: "Music",
    emoji: "🎧",
    left: "5%",
    top: "5%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "50%",
    top: "5%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "35%",
    top: "40%",
  },
    {
    title: "Travelling",
    emoji: "🧳",
    left: "10%",
    top: "35%",
  },
  {
    title: "Cooking",
    emoji: "🍴",
    left: "70%",
    top: "45%",
  },
  {
    title: "Fitness",
    emoji: "🏋️",
    left: "5%",
    top: "65%",
  },
  {
    title: "Anime",
    emoji: "🌀",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
          <Card className="h-[320px] md:col-span-2 lg:col-span-1">
            <CardHeader
              title="My Reads"
              description="Explore the books shaping my perspectives."
            />
            <div className="w-40 mx-auto mt-2 md:mt-0">
              <Image src={bookImage} alt="Book cover" />
            </div>
          </Card>
          <Card className="h-[320px] md:col-span-3 lg:col-span-2">
            <CardHeader
              title="My Toolbox"
              description=" Explore the technologies and tools I use to craft exceptional digital experiences."
              className=""
            />
        
            <ToolboxItems items={toolboxItems} className="" />
            <ToolboxItems
              items={toolboxItems}
              className="mt-6"
              itemsWrapperClassName="-translate-x-1/2"
            />
          </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
          <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
            <CardHeader
              title="Beyond the Code"
              description="Explore my interests and hobbies beyond the digital realm"
              className="px-6 py-6"
            />
            <div className="relative flex-1">
              {hobbies.map((hobby) => (
                <div
                  key={hobby.title}
                  className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                  style={{
                    left: hobby.left,
                    top: hobby.top,
                  }}
                >
                  <span className="font-medium text-gray-950">
                    {hobby.title}
                  </span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
            <Image src={mapImage} alt="map"  className="h-full w-full object-cover object-left-top"/>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offest-2 after:rounded-full after:outline-gray-950/30">
            <Image src={smileMemoji} alt="smiling memoji" className="size-20" />
            </div>
          </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
