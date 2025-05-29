import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Vivek",
    position: "CEO @ KIF Foundation",
    text: "Aditya was instrumental in building the KIF Foundation website from scratch alongside his team. His technical skills and dedication helped us launch a smooth, fast, and professional platform that serves our mission well.",
    avatar: memojiAvatar1,
  },
  // {
  //   name: "Olivia Green",
  //   position: "Marketing Manager @ TechStartups",
  //   text: "Alex was instrumental in transforming our website into a powerful",
  //   avatar: memojiAvatar2,
  // },
  {
    name: "Ajeet Bisen",
    position: "Founder @ Bajeet.com",
    text: "Aditya was consistent and reliable while maintaining our platform with his team. His technical support made a real difference, and I look forward to collaborating with him on future projects.",
    avatar: memojiAvatar3,
  },
  {
    name: "Priya Mehta",
    position: "Team Lead @ Blue Heart Lab Pvt Ltd",
    text: "Aditya contributed to our MERN stack project with steady dedication and solid development skills. He was dependable and easy to work with throughout the collaboration.",
    avatar: memojiAvatar4,
  },
  {
     name: "Neeraj",
  position: "SDE @ Triage",
  text: "Collaborating with Aditya was both fun and insightful. We learned a lot from each other while building together. Aditya brought fresh perspectives to the table, and our teamwork made the entire process smooth and enjoyable.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Happy Clients"
          title="What Clients Say about Me"
          description=" Don't just take my word for it. See what my clients have to say about my work."
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:60s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
