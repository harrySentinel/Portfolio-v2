import memojiImage from "@/assets/images/memoji-computer.png"
import Image from "next/image";
import ArrowDown from '@/assets/icons/arrow-down.svg';

export const HeroSection = () => {
    return (
     <div className="py-32" >
        <div className="container">
        <div className="flex flex-col items-center">
         <Image src={memojiImage} className="size-[100px]" alt="Person peeking behind the laptop" />
         <div className="bg-gray-950 border border-gray-800">
            <div></div>
            <div>Available for new Projects</div>
         </div>
         </div>
         <h1>Building Exceptional User Experiences</h1>
         <p>
            I specialize in transforming designs into functional, high-performing
            web applications. Let's discuss your next project.
         </p>
         <div>
            <button>
                <span>Explore My Work</span>
                <ArrowDown />
            </button>
            <button>
                <span>👋</span>
                <span>Let's Connect</span>
            </button>
         </div>
        </div>
    </div>
    )
};