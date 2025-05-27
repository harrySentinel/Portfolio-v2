import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from '@/components/Card';

const testimonials = [
  {
    name: "Alex Turner",
    position: "Marketing Manager @ TechStartups",
    text: "Alex was instrumental in transforming our website into a powerful platform for engaging users and driving results. His attention to detail and user-first approach significantly improved our overall UX",
    avatar: memojiAvatar1,
  },
    {
    name: "Olivia Green",
    position: "Marketing Manager @ TechStartups",
    text: "Alex was instrumental in transforming our website into a powerful",
    avatar: memojiAvatar2,
  },
     {
    name: "Daniel White",
    position: "Marketing Manager @ TechStartups",
    text: "Alex was instrumental in transforming our website into a powerful",
    avatar: memojiAvatar3,
  },
    {
    name: "Emily Carter",
    position: "Marketing Manager @ TechStartups",
    text: "Alex was instrumental in transforming our website into a powerful",
    avatar: memojiAvatar4,
  },
     {
    name: "Michael Brown",
    position: "Marketing Manager @ TechStartups",
    text: "Alex was instrumental in transforming our website into a powerful",
    avatar: memojiAvatar5,
  },
]

export const TestimonialsSection = () => {
    return (
    <div className="py-16 lg:py-24">
        <div className="container">
        <SectionHeader eyebrow="Happy Clients" title="What Clients Say about Me" description=" Don't just take my word for it. See what my clients have to say about my work." 
        />
        <div className="mt-16 lg:mt-24 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex gap-8 flex-none">
            {testimonials.map((testimonial) => (
               <Card key={testimonial.name} className="max-w-xs md:max-w-md p-6 md:p-8">
                <div className="flex gap-4 items-center">
                <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-fullflex-shrink-0">
                 <Image src={testimonial.avatar} alt ={testimonial.name} className="max-h-full" />
                 </div>
                 <div>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-white/40">{testimonial.position}</div>
                 </div>
                 </div>
                 <p className="mt-4 md:mt-6 text-sm md:text-base">{testimonial.text}</p>
                </Card>
            ))}
          </div>
        </div>
        </div>
    </div>
    );
};