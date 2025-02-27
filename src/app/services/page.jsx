"use client";

import  { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { Description } from "@radix-ui/react-dialog";
import { animate, motion } from "framer-motion";

const services = [
    {
        num:"01",
        title:"web development",
        description:"I specialize in crafting responsive and dynamic websites tailored to meet your unique business needs. From concept to launch, I ensure a seamless and engaging user experience on all devices.",
        href:""
    },
    {
        num:"02",
        title:"UI/UX Design",
        description:"I design intuitive and visually captivating interfaces that prioritize user satisfaction and drive engagement. My focus is on creating exceptional user experiences that delight and retain your audience.",
        href:""
    }, {
        num:"03",
        title:"Logo Design",
        description:"I create unique and memorable logos that encapsulate your brand's identity. Each design is tailored to reflect the essence of your business and leave a lasting impression on your audience.",
        href:""
    },
]



const Services = () => {
    return(
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                  initial={{opacity:0}}
                  animate={{opacity:1,transition:{delay:2.4,duration:0.4,ease:"easeIn"},
                }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {services.map((service,index) => {
                        return (
                            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                                {/**top */}
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover 
                                     transition-all duration-500 ">{service.num}</div>
                                    <Link href={service.href} className="
                                    w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent
                                    transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                                        <BsArrowDownRight className="text-primary text-3xl"/>
                                    </Link>
                                </div>
                                {/**title */}
                                <h2 className="text-[42px] font-bold leading-none
                                 text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                                {/**description */}
                                <p className="text-white/60">{service.description}</p>
                                {/**border */}
                                <div className="border-b border-white/20 w-full"></div>
                            </div>
                        );
                    })}


                </motion.div>
            </div>
        </section>
    )
}

export default Services;