import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import NextIcon from "@/assets/icons/next-js.svg";
import GithubIcon from "@/assets/icons/github.svg";
import TailwindIcon from "@/assets/icons/tailwindcss.svg";
import NodeIcon from "@/assets/icons/nodedotjs.svg";
import DockerIcon from "@/assets/icons/docker.svg";
import MongoIcon from "@/assets/icons/mongodb.svg";
import ShadcnIcon from "@/assets/icons/shadcnui.svg";
import ExpressIcon from "@/assets/icons/express.svg";
import { TechIcon } from "@/components/TechnoIcon";

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

export const AboutSection = () => {
  return (
    <div className="pb-96">
      <SectionHeader
        eyebrow="About Me"
        title="A Glimpse Into My World"
        description="Learn more about who I am, what I do, and what inspires me."
      />
      <div>
        <Card>
          <div>
            <StarIcon />
            <h3>My Reads</h3>
            <p>Explore the books shaping my perspectives.</p>
          </div>
          <Image src={bookImage} alt="Book cover" />
        </Card>
        <Card>
          <div>
            <StarIcon />
            <h3>My Toolbox</h3>
            <p>
              Explore the technologies and tools I use to craft exceptional
              digital experiences.
            </p>
          </div>
          <div>
            {toolboxItems.map((item) => (
              <div key={item.title}>
                <TechIcon component={item.iconType} />
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};
