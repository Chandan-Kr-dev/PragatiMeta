import { GlassCard } from "./Glasscard";
import { EmpowerLamp } from "./lampeffect";
import { motion } from "framer-motion";
import { TypewriterEffectSmooth, TypewriterEffect } from "./components/ui/typewriter-effect";
import { Home,UserPlus,LayoutDashboardIcon  } from "lucide-react";
import Navbar from "./Navbar";
import { AnimatedTestimonials } from "./components/ui/animated-testimonials";
import FloatingFooter from "./FloatingFooter";
import { BackgroundBeamsWithCollision } from "./components/ui/background-beams-with-collision";
const Homepage = () => {
  const navigationItems = [
    {
      name: "Home",
      link: "/",
      icon: <Home size={16} />
    },
    {
      name: "Signup",
      link: "/signup",
      icon: <UserPlus size={16} />
    },
    {
      name: "Studash",
      link: "/studashboard",
      icon: <LayoutDashboardIcon size={16} />
    },
   
    
  ];
  const testimonials = [
    {
      name: "Danish Shah",
      designation: "Full Stack ,DBMS Developer",
      quote: "Second Year IT Student at Techno Mains Saltlake",
      src: "/Images/ME.jpeg",
      socials: [
        { platform: "instagram", url: "https://www.instagram.com/danish_shanil?igsh=M3hmMjNzZHcxOGtq" },
        { platform: "linkedin", url: "https://www.linkedin.com/in/danish-shah-65454021b" },
        { platform: "github", url: "https://github.com/DanishShah619" },
      ],
    },
    {
      name: "Chandan Kumar",
      designation: "Backend,DBMS Developer",
      quote:  "Second Year IT Student at Techno Mains Saltlake",
      src: "/Images/Chandan.jpeg",
      socials: [
        { platform: "instagram", url: "https://www.instagram.com/chandan_ck2409/" },
        { platform: "linkedin", url: "https://www.linkedin.com/in/chandankr-dev" },
        { platform: "github", url: "https://gitHub.com/Chandan-Kr-dev" },
       
      ],
    },
    {
      name: "Abdul Rahman",
      designation: "AI Expert Lead",
      quote:  "Second Year IT Student at Techno Mains Saltlake",
      src: "/Images/Abdul.jpeg",
      socials: [
        { platform: "instagram", url: "https://www.instagram.com/epsilonstar02/profilecard/?igsh=MTdzNHBoMjU4eHNlMg==" },
        { platform: "linkedin", url: "https://www.linkedin.com/in/abdul-rahman58322" },
        { platform: "github", url: "https://github.com/epsilonstar-02" },
      ],
    },
    {
      name: "Ankit Kumar Jha",
      designation:  "AI Expert,Innovation & Reaserch Lead",
      quote:  "Second Year IT Student at Techno Mains Saltlake",
      src: "/Images/Ankit.jpeg", 
      socials: [
        { platform: "instagram", url: " https://www.instagram.com/virtual_shootout?igsh=eGcxdnEyOW13MTBx" },
        { platform: "linkedin", url: "https://www.linkedin.com/in/ankit-kumar-jha-140b32287" },
        { platform: "github", url: " https://github.com/Ankitj9568" },
      ],
    },
  ];
  
  return (
    <BackgroundBeamsWithCollision className="" >
<div >
    <Navbar  />
    <div className="min-h-screen w-full overflow-y-auto bg-black ">
    
      <div className="flex flex-col items-center justify-start ">
     
      <div className="h-24"></div> 
        <EmpowerLamp />
        
        <GlassCard className="w-[90%] md:w-[60%] mx-auto  mb-10 ">
          
          <TypewriterEffect words={[{text:"OUR"},
        {text:"VISION"}]} className="text-white/80 text-xl" />
          <motion.span
  className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent text-lg font-semibold text-center"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
At the heart of our mission lies a bold and compassionate vision — to bridge the educational divide by harnessing the power of AI to reach the underserved, the overlooked, and the unheard. We envision a world where every child, regardless of their background, location, or circumstance, has access to quality learning resources and personalized educational support. Our AI-assisted platform is designed to empower the poor and wayward sections of society, offering them a second chance to dream, grow, and build a better future. We believe education is a right, not a privilege — and through technology, we aim to make that right a reality for all.
</motion.span>
        </GlassCard>
        
        <GlassCard className="w-[90%] md:w-[60%] mx-auto mt-10 mb-10 p-6">
          {/* Additional content here */}
          <TypewriterEffect words={[{text:"ABOUT"},
        {text:"US"}]} className="text-white/80 text-xl" />
            <motion.span
  className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent text-lg font-semibold text-center"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
GyanGrid is an AI-powered educational platform on a mission to make learning equitable, accessible, and data-driven across India’s schools — especially in underserved regions. With smart dashboards for students, teachers, and school admins, we bring real-time insights, offline learning support, multilingual tools, and secure fee/salary systems under one intuitive interface.

From classroom analytics to device redistribution, GyanGrid isn’t just EdTech — it’s EduQuity in action.

</motion.span>
        </GlassCard>
        
       
        <GlassCard className="w-[90%] md:w-[60%] mx-auto mt-10 mb-10 p-6">
        <TypewriterEffect words={[{text:"OUR"},
        {text:"PRODUCT"}]} className="text-white/80 text-xl" />
     <motion.span   className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent text-lg font-semibold text-center"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
GyanGrid is a next-generation educational intelligence platform built to bridge the gaps in India’s school ecosystem — from urban classrooms to rural blackboards. Designed with empathy, powered by AI, and aligned with the NEP 2020 vision, GyanGrid empowers students, teachers, and school administrators through personalized insights, real-time analytics, and an inclusive digital experience.

Our platform brings together academic tracking, class management, digital fee/salary payments, and an integrated e-marketplace — all in one unified dashboard that works online and offline, across languages, and on low-cost devices.

But we’re more than just an EdTech tool — we’re a mission.
A mission to ensure that no child is left behind, no teacher unsupported, and no school disconnected from the data that can drive real transformation.

With features like daily quizzes, topic-level progress tracking, grievance redressal, and our unique ReConnect device redistribution model, we’re not just digitizing classrooms — we’re building a sustainable ecosystem of equity, access, and educational upliftment.

Backed by innovation, driven by impact, and built by a team that believes in the power of inclusive technology — GyanGrid is not just EdTech.
It’s EduQuity.
  </motion.span>
        </GlassCard>
        
        <GlassCard className="w-[90%] md:w-[60%] mx-auto mt-5 mb-5 p-3 h-50">
        <TypewriterEffect words={[{text:"MEET"},
        {text:"US"}]} className="text-white/80 text-xl" />
  <AnimatedTestimonials testimonials={testimonials} autoplay />
        
        </GlassCard>
      </div>
    </div>
    <FloatingFooter />
    </div>
    </BackgroundBeamsWithCollision>
  );
};

export default Homepage;
